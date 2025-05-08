import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart } from "lucide-react"

export function DatingPreview() {
  const matches = [
    {
      id: "1",
      name: "Taylor",
      avatar: "/placeholder.svg?height=60&width=60&query=attractive woman smiling",
      compatibility: "92%",
    },
    {
      id: "2",
      name: "Jordan",
      avatar: "/placeholder.svg?height=60&width=60&query=attractive man smiling",
      compatibility: "88%",
    },
  ]

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <CardTitle className="flex items-center gap-2">
          <Heart className="h-5 w-5 fill-white" />
          Dating Matches
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="text-sm mb-4">Your top matches today:</div>
        <div className="grid gap-4">
          {matches.map((match) => (
            <div key={match.id} className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border-2 border-pink-200">
                <AvatarImage src={match.avatar || "/placeholder.svg"} alt={match.name} />
                <AvatarFallback>{match.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium">{match.name}</p>
                <div className="text-xs text-pink-500 font-medium">{match.compatibility} match</div>
              </div>
              <Button
                size="sm"
                className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
              >
                <Heart className="h-4 w-4 mr-1" />
                Match
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button
            variant="ghost"
            className="text-sm w-full text-pink-500 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-950/20"
          >
            See All Matches
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
