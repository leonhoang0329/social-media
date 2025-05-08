"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Heart, MessageCircle, Share, MoreHorizontal, Bookmark, Flag, Send, MapPin } from "lucide-react"
// First, add the import for the ShareModal component
import { ShareModal } from "@/components/share-modal"

export function PostFeed() {
  const posts = [
    {
      id: "1",
      user: {
        name: "Alex Morgan",
        username: "alexmorgan",
        avatar: "/young-man-smiling.png",
      },
      content:
        "Just hiked to the top of Mount Rainier! The view was absolutely breathtaking. Definitely worth the 4am wake up call. #hiking #adventure #nature",
      image: "/mountain-summit-panorama.png",
      location: "Mount Rainier, Washington",
      time: "2 hours ago",
      likes: 243,
      comments: 42,
      shares: 12,
      liked: false,
      bookmarked: false,
    },
    {
      id: "2",
      user: {
        name: "Jamie Chen",
        username: "jamiechen",
        avatar: "/woman-with-coffee.png",
      },
      content:
        "Just finished my latest painting! I've been working on this piece for weeks and I'm so happy with how it turned out. What do you think? 🎨 #art #painting #creativity",
      image: "/colorful-abstract-canvas.png",
      location: "Art Studio",
      time: "5 hours ago",
      likes: 512,
      comments: 78,
      shares: 34,
      liked: true,
      bookmarked: true,
    },
    {
      id: "3",
      user: {
        name: "Taylor Kim",
        username: "taylorkim",
        avatar: "/smiling-selfie.png",
      },
      content:
        "Just adopted this little guy from the shelter! Meet Max, the newest member of our family. He's already made himself at home on the couch. 🐶 #dogsofinstagram #adoption #rescuedog",
      image: "/cute-puppy-on-couch.png",
      location: "Home Sweet Home",
      time: "1 day ago",
      likes: 876,
      comments: 124,
      shares: 56,
      liked: false,
      bookmarked: false,
    },
  ]

  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({
    "2": true,
  })

  const [bookmarkedPosts, setBookmarkedPosts] = useState<Record<string, boolean>>({
    "2": true,
  })

  const toggleLike = (postId: string) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }))
  }

  const toggleBookmark = (postId: string) => {
    setBookmarkedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }))
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <CardHeader className="flex flex-row items-center gap-4 p-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.user.avatar || "/placeholder.svg"} alt={post.user.name} />
              <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{post.user.name}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.time}</span>
                    {post.location && (
                      <>
                        <span className="mx-1">•</span>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{post.location}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-5 w-5" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Bookmark className="h-4 w-4 mr-2" />
                      {bookmarkedPosts[post.id] ? "Remove bookmark" : "Save post"}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Flag className="h-4 w-4 mr-2" />
                      Report post
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <p className="px-4 py-2">{post.content}</p>
            {post.image && (
              <div className="relative aspect-[4/3] md:aspect-[16/9] mt-2 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt="Post image"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
            )}
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  <Avatar className="h-5 w-5 border-2 border-background">
                    <AvatarImage src="/diverse-person.png" />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-5 w-5 border-2 border-background">
                    <AvatarImage src="/diverse-group-two.png" />
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-5 w-5 border-2 border-background">
                    <AvatarImage src="/diverse-group-outdoors.png" />
                    <AvatarFallback>U3</AvatarFallback>
                  </Avatar>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {likedPosts[post.id] ? post.likes + 1 : post.likes} likes
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">{post.comments} comments</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{post.shares} shares</span>
              </div>
            </div>
          </CardContent>
          <Separator />
          {/* Then update the share button in the CardFooter section */}
          <CardFooter className="p-0">
            <div className="grid grid-cols-3 w-full">
              <Button
                variant="ghost"
                className={`flex items-center justify-center gap-2 py-3 rounded-none ${
                  likedPosts[post.id] ? "text-pink-500" : ""
                }`}
                onClick={() => toggleLike(post.id)}
              >
                <Heart className={`h-5 w-5 ${likedPosts[post.id] ? "fill-current" : ""}`} />
                <span>Like</span>
              </Button>
              <Button variant="ghost" className="flex items-center justify-center gap-2 py-3 rounded-none">
                <MessageCircle className="h-5 w-5" />
                <span>Comment</span>
              </Button>
              <ShareModal postId={post.id}>
                <Button variant="ghost" className="flex items-center justify-center gap-2 py-3 rounded-none">
                  <Share className="h-5 w-5" />
                  <span>Share</span>
                </Button>
              </ShareModal>
            </div>
          </CardFooter>
          <div className="px-4 py-2 space-y-3">
            <h4 className="text-sm font-medium">Comments</h4>

            <div className="flex gap-2">
              <Avatar className="h-7 w-7 flex-shrink-0">
                <AvatarImage src="/young-man-smiling.png" alt="Alex Morgan" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl px-3 py-2">
                  <p className="text-sm font-medium">Alex Morgan</p>
                  <p className="text-sm">Amazing view! I need to visit there someday.</p>
                </div>
                <div className="flex gap-4 mt-1 ml-1">
                  <button className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">Like</button>
                  <button className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">Reply</button>
                  <span className="text-xs text-gray-500">2h</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Avatar className="h-7 w-7 flex-shrink-0">
                <AvatarImage src="/woman-cafe-coffee.png" alt="Jamie Chen" />
                <AvatarFallback>JC</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl px-3 py-2">
                  <p className="text-sm font-medium">Jamie Chen</p>
                  <p className="text-sm">The colors in this photo are incredible! What camera did you use?</p>
                </div>
                <div className="flex gap-4 mt-1 ml-1">
                  <button className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">Like</button>
                  <button className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">Reply</button>
                  <span className="text-xs text-gray-500">1h</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/leon-hoang.png" alt="Leon Hoang" />
              <AvatarFallback>LH</AvatarFallback>
            </Avatar>
            <div className="flex-1 flex items-center gap-2">
              <Input
                placeholder="Write a comment..."
                className="rounded-full bg-gray-100 dark:bg-gray-800 border-none"
              />
              <Button size="icon" variant="ghost" className="rounded-full">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send comment</span>
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
