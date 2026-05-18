"use client"

import Link from "next/link"
import Image from "next/image"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/manifesto", label: "Manifesto" },
  { href: "https://ambassador.xolaceinc.com", label: "Ambassadors", external: true },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 bg-background/70 backdrop-blur-2xl backdrop-saturate-150" />

      <div className="relative flex justify-between items-center px-6 md:px-12 py-4 max-w-screen-2xl mx-auto">

        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/images/use-x-remove-bg.png"
            alt="Xolace"
            width={28}
            height={28}
            className="size-7 object-contain transition-transform duration-500 group-hover:scale-110"
          />
          <span className="font-serif italic text-lg text-foreground/80 group-hover:text-foreground transition-colors duration-300 hidden md:block">
            Xolace
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm">
            {navLinks.map(({ href, label, external }) => {
              const isActive = !external && pathname.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "transition-colors duration-300 font-light tracking-wide",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground/70 hover:text-foreground"
                  )}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          <AnimatedThemeToggler />
        </div>

      </div>
    </nav>
  )
}
