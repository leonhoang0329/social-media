import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-gray-950 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative size-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-pink-500">
                <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-950"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-600 to-pink-500"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Friendzy
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Connect with friends, share moments, and find your perfect match all in one place.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5 text-gray-500 hover:text-purple-600" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5 text-gray-500 hover:text-purple-600" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5 text-gray-500 hover:text-purple-600" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Youtube className="h-5 w-5 text-gray-500 hover:text-purple-600" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400">
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400">
                  Licenses
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2023 Friendzy. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
              Made with <Heart className="h-4 w-4 text-pink-500 mx-1" /> by Friendzy Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
