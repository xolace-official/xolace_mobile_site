"use client"

import Link from "next/link"
import Image from "next/image"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Glassy backdrop */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-2xl backdrop-saturate-150 border-b border-border/40" />

      <div className="relative flex justify-between items-center px-6 md:px-12 py-4 md:py-5 max-w-screen-2xl mx-auto">
        {/* Logo + mascot */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
        >
          <Image
            src="/images/use-x-remove-bg.png"
            alt="Xolace mascot"
            width={32}
            height={32}
            className="size-8 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          />
          <span className="text-xl tracking-tighter text-foreground font-medium italic hidden sm:block">
            Xolace
          </span>
        </Link>

        {/* Right side — nav links + theme toggle */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center gap-5 md:gap-8 text-sm tracking-wide">
            <Link
              href="/manifesto"
              className="text-primary font-medium transition-colors duration-500"
            >
              Manifesto
            </Link>
            <Link
              href="#waitlist"
              className="text-muted-foreground hover:text-primary transition-colors duration-500"
            >
              Waitlist
            </Link>
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-border/60" />

          <AnimatedThemeToggler />
        </div>
      </div>
    </nav>
  )
}
