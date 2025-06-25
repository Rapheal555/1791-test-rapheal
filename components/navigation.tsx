"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, MoveRight, Eye, Maximize } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/slide", label: "Slide", icon: MoveRight },
    { href: "/fade", label: "Fade", icon: Eye },
    { href: "/scale", label: "Scale", icon: Maximize },
  ]

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href}>
              <Button variant={pathname === href ? "default" : "ghost"} size="sm" className="rounded-full">
                <Icon className="h-4 w-4 mr-2" />
                {label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
