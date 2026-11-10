"use client"

import { m as motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { useProductHunt } from "@/hooks/use-product-hunt"
import { productHuntBadgeHref } from "@/lib/product-hunt"

const ease = [0.16, 1, 0.3, 1] as const

// Shown on launch day, and afterwards to anyone who arrives from the post.
export function ProductHuntNote() {
  const { fromProductHunt, show } = useProductHunt()
  if (!show) return null

  return (
    <motion.a
      href={productHuntBadgeHref("hero-note")}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
      className="group mx-auto mb-8 inline-flex max-w-full items-center gap-3 rounded-full border border-primary/50 bg-primary/15 py-1.5 pr-4 pl-1.5 text-sm text-foreground ring-4 ring-primary/10 transition-all duration-300 hover:border-primary hover:bg-primary/25 hover:ring-primary/20 lg:mx-0 lg:self-start"
    >
      <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-foreground/70" />
          <span className="relative inline-flex size-2 rounded-full bg-primary-foreground" />
        </span>
        Product Hunt
      </span>
      {/* The second half drops on phones so the pill stays on one line */}
      <span className="truncate font-medium">
        {fromProductHunt ? "Welcome, hunters." : "We're live today"}
        <span className="hidden sm:inline">
          {fromProductHunt ? " Thank you for coming." : ". Come say hello."}
        </span>
      </span>
      <ArrowUpRight className="size-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.a>
  )
}
