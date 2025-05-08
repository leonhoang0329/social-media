"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

export function StoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" })
    }
  }

  const stories = [
    { id: "create", name: "Create Story", image: null, isCreate: true },
    { id: "1", name: "Alex Morgan", image: "/young-man-smiling.png", time: "2h" },
    { id: "2", name: "Jamie Chen", image: "/woman-cafe-coffee.png", time: "3h" },
    { id: "3", name: "Taylor Kim", image: "/mountain-hiker.png", time: "5h" },
    { id: "4", name: "Jordan Lee", image: "/placeholder.svg?key=bjnv7", time: "8h" },
    { id: "5", name: "Casey Wong", image: "/beach-sunset-palms.png", time: "10h" },
    { id: "6", name: "Riley Park", image: "/city-skyline-night.png", time: "12h" },
    { id: "7", name: "Quinn Smith", image: "/dog-park-playtime.png", time: "16h" },
  ]

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Stories</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="rounded-full" onClick={scrollLeft}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Scroll left</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full" onClick={scrollRight}>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Scroll right</span>
          </Button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {stories.map((story) => (
          <Card
            key={story.id}
            className={`flex-shrink-0 w-28 h-48 rounded-xl overflow-hidden snap-start ${
              story.isCreate ? "bg-gray-100 dark:bg-gray-800" : "relative"
            }`}
          >
            {story.isCreate ? (
              <CardContent className="flex flex-col items-center justify-center h-full p-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center mb-2">
                  <Plus className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-center">Create Story</span>
              </CardContent>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img src={story.image || ""} alt={story.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-2 left-2 z-20">
                  <Avatar className="ring-4 ring-purple-600 border-2 border-white">
                    <AvatarImage src={story.image || ""} alt={story.name} />
                    <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="absolute bottom-2 left-2 right-2 z-20">
                  <p className="text-xs text-white font-medium line-clamp-1">{story.name}</p>
                  <p className="text-xs text-gray-300">{story.time}</p>
                </div>
              </>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
