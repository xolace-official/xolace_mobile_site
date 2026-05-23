"use client"

import { motion } from "motion/react"
import { FounderCarousel } from "@/components/ui/founder-carousel"
import { founders } from "@/lib/team"

export function TeamSection() {
  return (
    <section className="section-spacing-y overflow-hidden relative">

      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-accent/[0.05] blur-[150px] -top-20 -left-20 animate-gentle-pulse" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[130px] bottom-0 right-0 animate-gentle-pulse [animation-delay:2.5s]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="section-container relative z-10 mb-12"
      >
        <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground/30 mb-5">
          The team
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="font-serif italic font-light text-foreground text-4xl md:text-5xl leading-[1.1]">
            The people behind it.
          </h2>
          <p className="text-sm text-muted-foreground/40 font-light pb-1 max-w-xs sm:text-right">
            We built Xolace for ourselves first. Every decision starts with the same question: would we have trusted this?
          </p>
        </div>
      </motion.div>

      <div className="relative z-10">
        <FounderCarousel founders={founders} />
      </div>

    </section>
  )
}
