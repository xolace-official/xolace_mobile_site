"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export interface TocSection {
  id: string
  label: string
}

interface TableOfContentsProps {
  sections: TocSection[]
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost intersecting entry
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          // Pick the one closest to the top
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          )
          setActiveId(top.target.id)
        }
      },
      {
        rootMargin: "-10% 0px -75% 0px",
        threshold: 0,
      }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 120
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <nav aria-label="Table of contents">
      <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground mb-5">
        Contents
      </p>
      <ul className="space-y-0.5">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => handleClick(section.id)}
              className={cn(
                "text-left text-xs pl-3 py-1.5 border-l-2 transition-all duration-300 w-full leading-snug",
                activeId === section.id
                  ? "border-primary text-foreground font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              )}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
