"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { FriendzyHeader } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PostFeed } from "@/components/post-feed"
import { StoriesSection } from "@/components/stories-section"
import { TrendingSection } from "@/components/trending-section"
import { SuggestedFriends } from "@/components/suggested-friends"
import { Footer } from "@/components/footer"

interface Post {
  id: string;
  content: string;
  createdAt: string;
  author: {
    name: string;
    image: string;
  };
  likes: { id: string }[];
  comments: {
    id: string;
    content: string;
    createdAt: string;
    author: {
      name: string;
      image: string;
    };
  }[];
}

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState("");
  const [newComment, setNewComment] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: newPost }),
    });

    if (res.ok) {
      setNewPost("");
      fetchPosts();
    }
  };

  const handleLike = async (postId: string) => {
    const res = await fetch(`/api/posts/${postId}/like`, {
      method: "POST",
    });

    if (res.ok) {
      fetchPosts();
    }
  };

  const handleComment = async (postId: string) => {
    if (!newComment[postId]?.trim()) return;

    const res = await fetch(`/api/posts/${postId}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: newComment[postId] }),
    });

    if (res.ok) {
      setNewComment({ ...newComment, [postId]: "" });
      fetchPosts();
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-950">
      <FriendzyHeader />
      <main className="container mx-auto px-4 py-6">
        <HeroSection />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 mt-8">
          <div className="lg:col-span-3 space-y-6">
            <SuggestedFriends />
          </div>
          <div className="lg:col-span-6 space-y-6">
            <StoriesSection />
            <PostFeed />
          </div>
          <div className="lg:col-span-3 space-y-6">
            <TrendingSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
