"use client"

import Link from "next/link"
import Image from "next/image"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/about", label: "About" },
  // { href: "/manifesto", label: "Manifesto" },
  { href: "/press", label: "Press" },
  // { href: "/faq", label: "FAQ" },
  { href: "https://ambassador.xolaceinc.com", label: "Ambassadors", external: true },
]

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className={cn(
        "absolute inset-0 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-2xl backdrop-saturate-150 border-b border-border/20 shadow-sm"
          : "bg-transparent"
      )} />

      <div className="relative flex justify-between items-center px-6 md:px-12 py-4 max-w-screen-2xl mx-auto">

        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <Image
            src="/images/use-x-remove-bg.png"
            alt="Xolace"
            width={28}
            height={28}
            className="size-7 object-contain transition-transform duration-500 group-hover:scale-110"
          />
          <span className="font-serif italic text-lg text-foreground/80 group-hover:text-foreground transition-colors duration-300">
            Xolace
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          <div className="flex items-center gap-5 text-sm">
            {navLinks.map(({ href, label, external }) => {
              const isActive = !external && (href === "/" ? pathname === "/" : pathname.startsWith(href))
              return (
                <Link
                  key={href}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "relative py-0.5 transition-colors duration-300 font-light tracking-wide",
                    isActive
                      ? "text-foreground"
                      : external
                        ? "text-muted-foreground/50 hover:text-muted-foreground"
                        : "text-muted-foreground/70 hover:text-foreground"
                  )}
                >
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 inset-x-0 h-px rounded-full bg-primary" />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            {/*<Link*/}
            {/*  href="/#download"*/}
            {/*  className="bg-secondary-foreground text-primary-foreground text-xs font-medium px-4 py-2 rounded-full hover:bg-primary/85 hover:scale-105 transition-all duration-300"*/}
            {/*>*/}
            {/* Begin*/}
            {/*</Link>*/}
            <AnimatedThemeToggler />
          </div>
        </div>

        {/* Mobile: theme + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <AnimatedThemeToggler />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
        menuOpen ? "max-h-96" : "max-h-0"
      )}>
        <div className="bg-background/95 backdrop-blur-2xl border-b border-border/20 px-6 pb-5 pt-1">
          {navLinks.map(({ href, label, external }) => {
            const isActive = !external && (href === "/" ? pathname === "/" : pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={cn(
                  "flex items-center justify-between py-3.5 text-sm font-light tracking-wide border-b border-border/10 last:border-0 transition-colors duration-200",
                  isActive ? "text-foreground" : "text-muted-foreground/70 hover:text-foreground"
                )}
              >
                {label}
                {external && (
                  <span className="text-[10px] font-mono text-muted-foreground/30 tracking-widest uppercase">↗</span>
                )}
              </Link>
            )
          })}
          <div className="pt-4">
            <Link
              href="/#download"
              className="block bg-primary text-primary-foreground text-sm font-medium px-4 py-2.5 rounded-full text-center hover:bg-primary/85 transition-colors duration-300"
            >
              Try Xolace for Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
