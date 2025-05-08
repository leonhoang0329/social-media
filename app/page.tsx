import { FriendzyHeader } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PostFeed } from "@/components/post-feed"
import { StoriesSection } from "@/components/stories-section"
import { TrendingSection } from "@/components/trending-section"
import { SuggestedFriends } from "@/components/suggested-friends"
import { Footer } from "@/components/footer"

export default function Home() {
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
