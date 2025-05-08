import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function SuggestedFriends() {
  const suggestions = [
    {
      id: "1",
      name: "Morgan Lee",
      avatar: "/placeholder.svg?height=40&width=40&query=woman with glasses",
      mutualFriends: 12,
    },
    {
      id: "2",
      name: "Jordan Smith",
      avatar: "/placeholder.svg?height=40&width=40&query=man with beard",
      mutualFriends: 8,
    },
    {
      id: "3",
      name: "Casey Wong",
      avatar: "/placeholder.svg?height=40&width=40&query=person smiling",
      mutualFriends: 5,
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>People You May Know</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={suggestion.avatar || "/placeholder.svg"} alt={suggestion.name} />
              <AvatarFallback>{suggestion.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">{suggestion.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{suggestion.mutualFriends} mutual friends</p>
            </div>
            <Button size="sm" variant="outline" className="rounded-full">
              Add
            </Button>
          </div>
        ))}
        <Button variant="ghost" className="w-full text-sm">
          See All
        </Button>
      </CardContent>
    </Card>
  )
}
