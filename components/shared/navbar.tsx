"use client"

import Link from "next/link"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { XolaceLogo } from "@/components/shared/xolace-logo"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Grip, X, ArrowUpRight } from "lucide-react"

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <nav className="fixed top-0 w-full z-50">
        <div className={cn(
          "absolute inset-0 transition-all duration-500",
          isScrolled
            ? "bg-background/80 backdrop-blur-2xl backdrop-saturate-150 border-b border-border/20 shadow-sm"
            : "bg-transparent"
        )} />

        <div className="relative flex justify-between items-center px-2 md:px-12 py-4 max-w-screen-2xl mx-auto">

          <Link href="/" className="group shrink-0">
            <XolaceLogo
              size="sm"
              priority
              className="transition-opacity duration-300 opacity-80 group-hover:opacity-100"
            />
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
              {menuOpen ? <X className="size-5" /> : <Grip className="size-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu — anchored below the navbar, covers the rest of the screen */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 md:hidden",
          "top-15",
          "bg-background/80 backdrop-blur-2xl backdrop-saturate-150 border-t border-border/20",
          "transition-opacity duration-200",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="px-6 pt-3 pb-10">
          {navLinks.map(({ href, label, external }) => {
            const isActive = !external && (href === "/" ? pathname === "/" : pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={cn(
                  "flex items-center justify-between py-4 text-xl font-light tracking-wide border-b border-border/10 last:border-0 transition-colors duration-200",
                  isActive ? "text-foreground" : "text-muted-foreground/50 hover:text-foreground"
                )}
              >
                <span>{label}</span>
                {isActive && <span className="size-1.5 rounded-full bg-primary shrink-0" />}
                {external && <ArrowUpRight className="size-4 text-muted-foreground/30 shrink-0" />}
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}
