"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Facebook, Twitter, LinkIcon, Mail, Copy, Check } from "lucide-react"

interface ShareModalProps {
  postId: string
  children: React.ReactNode
}

export function ShareModal({ postId, children }: ShareModalProps) {
  const [copied, setCopied] = useState(false)
  const [shareText, setShareText] = useState("")

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://friendzy.com/posts/${postId}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share this post</DialogTitle>
        </DialogHeader>
        <div className="flex items-start gap-3 mt-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/leon-hoang.png" alt="Leon Hoang" />
            <AvatarFallback>LH</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="Add a comment..."
              className="min-h-20 resize-none"
              value={shareText}
              onChange={(e) => setShareText(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Button variant="outline" className="flex items-center gap-2">
            <Facebook className="h-4 w-4 text-blue-600" />
            <span>Facebook</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Twitter className="h-4 w-4 text-sky-500" />
            <span>Twitter</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-red-500" />
            <span>Email</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2" onClick={handleCopyLink}>
            {copied ? (
              <>
                <Check className="h-4 w-4 text-green-500" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Copy Link</span>
              </>
            )}
          </Button>
        </div>
        <div className="flex items-center gap-2 mt-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
          <LinkIcon className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-500 truncate">{`https://friendzy.com/posts/${postId}`}</span>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="ghost">Cancel</Button>
          <Button>Share Now</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
