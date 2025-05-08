"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, Home, Menu, MessageCircle, Search, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function FriendzyHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-gray-950/80 dark:border-gray-800">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center gap-2 mr-4">
          <div className="hidden md:flex">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative size-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-pink-500">
                <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-950"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-600 to-pink-500"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Friendzy
              </span>
            </Link>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="flex items-center gap-2 mb-8">
                  <div className="relative size-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-pink-500">
                    <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-950"></div>
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-600 to-pink-500"></div>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Friendzy
                  </span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Home className="h-5 w-5 text-gray-500" />
                  <span>Home</span>
                </Link>
                <Link
                  href="/profile"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <User className="h-5 w-5 text-gray-500" />
                  <span>Profile</span>
                </Link>
                <Link
                  href="/messages"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-gray-500" />
                  <span>Messages</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className={`${isSearchOpen ? "flex" : "hidden md:flex"} flex-1 items-center gap-4 md:gap-6`}>
          {isSearchOpen && (
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close search</span>
            </Button>
          )}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search Friendzy..."
              className="w-full bg-gray-100 dark:bg-gray-800 border-none pl-8 rounded-full"
            />
          </div>
        </div>

        <div className={`${isSearchOpen ? "hidden" : "flex"} ml-auto items-center gap-4`}>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(true)}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <nav className="hidden md:flex items-center gap-1">
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link href="/">
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link href="/messages">
                <MessageCircle className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-purple-500">
                  3
                </Badge>
                <span className="sr-only">Messages</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link href="/notifications">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-pink-500">
                  5
                </Badge>
                <span className="sr-only">Notifications</span>
              </Link>
            </Button>
          </nav>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/leon-hoang.png" alt="Leon Hoang" />
                  <AvatarFallback>LH</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Leon Hoang</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageCircle className="mr-2 h-4 w-4" />
                <span>Messages</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
