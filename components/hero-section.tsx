"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageIcon, Smile, MapPin, Camera } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function HeroSection() {
  const [postContent, setPostContent] = useState("")

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 p-6 text-white">
      <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10 mix-blend-overlay"></div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Friendzy</h1>
        <p className="text-lg md:text-xl opacity-90 mb-8">
          Connect with friends, share moments, and find your perfect match all in one place.
        </p>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-xl">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Avatar className="h-10 w-10 border-2 border-white">
                <AvatarImage src="/leon-hoang.png" alt="Leon Hoang" />
                <AvatarFallback>LH</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea
                  placeholder="What's on your mind?"
                  className="min-h-20 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 resize-none text-white placeholder:text-white/70"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                />
                <Tabs defaultValue="post" className="mt-2">
                  <TabsList className="bg-white/20 grid grid-cols-4">
                    <TabsTrigger value="post" className="data-[state=active]:bg-white/30">
                      Post
                    </TabsTrigger>
                    <TabsTrigger value="photo" className="data-[state=active]:bg-white/30">
                      Photo
                    </TabsTrigger>
                    <TabsTrigger value="story" className="data-[state=active]:bg-white/30">
                      Story
                    </TabsTrigger>
                    <TabsTrigger value="live" className="data-[state=active]:bg-white/30">
                      Live
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="post" className="mt-4 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30">
                        <ImageIcon className="h-4 w-4 mr-2" />
                        <span>Add Photo</span>
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30">
                        <Smile className="h-4 w-4 mr-2" />
                        <span>Feeling</span>
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>Location</span>
                      </Button>
                    </div>
                    <Button className="w-full bg-white text-purple-600 hover:bg-white/90 hover:text-purple-700">
                      Share Post
                    </Button>
                  </TabsContent>
                  <TabsContent value="photo" className="mt-4 space-y-4">
                    <div className="flex justify-center items-center h-32 border-2 border-dashed border-white/40 rounded-lg">
                      <div className="text-center">
                        <Camera className="h-8 w-8 mx-auto mb-2 opacity-70" />
                        <p>Upload photos or drag and drop</p>
                      </div>
                    </div>
                    <Button className="w-full bg-white text-purple-600 hover:bg-white/90 hover:text-purple-700">
                      Share Photos
                    </Button>
                  </TabsContent>
                  <TabsContent value="story" className="mt-4 space-y-4">
                    <div className="flex justify-center items-center h-32 border-2 border-dashed border-white/40 rounded-lg">
                      <div className="text-center">
                        <Camera className="h-8 w-8 mx-auto mb-2 opacity-70" />
                        <p>Create a new story</p>
                      </div>
                    </div>
                    <Button className="w-full bg-white text-purple-600 hover:bg-white/90 hover:text-purple-700">
                      Share Story
                    </Button>
                  </TabsContent>
                  <TabsContent value="live" className="mt-4 space-y-4">
                    <div className="text-center py-4">
                      <p className="mb-4">Start a live video to connect with your friends in real-time</p>
                      <Button className="bg-white text-purple-600 hover:bg-white/90 hover:text-purple-700">
                        Go Live Now
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
