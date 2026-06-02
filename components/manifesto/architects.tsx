"use client"

import { m as motion } from "motion/react"
import { FounderCarousel } from "@/components/ui/founder-carousel"
import { founders } from "@/lib/team"

export function Architects() {
  return (
    <section className="mb-32 md:mb-52 overflow-hidden relative">

      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-accent/[0.05] blur-[140px] -top-20 -right-20 animate-gentle-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="section-container-wide mb-10 relative z-10"
      >
        <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground/30 mb-5">
          The architects
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="font-serif italic font-light text-4xl md:text-5xl text-foreground leading-[1.1]">
            The people behind it.
          </h2>
          <p className="text-sm text-muted-foreground/40 font-light pb-1 max-w-xs sm:text-right">
            Behind Xolace are those who felt the void first — building the room they couldn&apos;t find.
          </p>
        </div>
      </motion.div>

      <div className="relative z-10">
        <FounderCarousel founders={founders} />
      </div>

    </section>
  )
}
