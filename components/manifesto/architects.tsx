"use client"

import { m as motion } from "motion/react"
import { FounderCarousel } from "@/components/ui/founder-carousel"
import { founders } from "@/lib/team"

export function Architects() {
  return (
    <section className="relative mb-32 overflow-hidden md:mb-52">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-gentle-pulse absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-accent/[0.05] blur-[140px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="section-container-wide relative z-10 mb-10"
      >
        <p className="mb-5 font-mono text-[11px] tracking-[0.24em] text-muted-foreground/30 uppercase">
          The architects
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-serif text-4xl leading-[1.1] font-light text-foreground italic md:text-5xl">
            The people behind it.
          </h2>
          <p className="max-w-xs pb-1 text-sm font-light text-muted-foreground/40 sm:text-right">
            Behind Xolace are those who felt the void first — building the room
            they couldn&apos;t find.
          </p>
        </div>
      </motion.div>

      <div className="relative z-10">
        <FounderCarousel founders={founders} />
      </div>
    </section>
  )
}
