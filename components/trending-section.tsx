import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

export function TrendingSection() {
  const trendingTopics = [
    {
      id: "1",
      topic: "#TechConference2023",
      posts: "15.3K posts",
    },
    {
      id: "2",
      topic: "#SummerVibes",
      posts: "12.8K posts",
    },
    {
      id: "3",
      topic: "#NewMusic",
      posts: "10.5K posts",
    },
    {
      id: "4",
      topic: "#TravelGoals",
      posts: "8.7K posts",
    },
    {
      id: "5",
      topic: "#FoodieFinds",
      posts: "7.2K posts",
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-pink-500" />
          Trending Now
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trendingTopics.map((topic) => (
            <div key={topic.id} className="space-y-1">
              <div className="font-medium hover:text-purple-600 cursor-pointer transition-colors">{topic.topic}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{topic.posts}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
            #Photography
          </Badge>
          <Badge variant="outline" className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
            #Gaming
          </Badge>
          <Badge variant="outline" className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
            #Fitness
          </Badge>
          <Badge variant="outline" className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
            #Books
          </Badge>
          <Badge variant="outline" className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
            #Cooking
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
