"use client"

import { m as motion } from "motion/react"
import { FounderCarousel } from "@/components/ui/founder-carousel"
import { founders } from "@/lib/team"

export function TeamSection() {
  return (
    <section className="section-spacing-y relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-gentle-pulse absolute -top-20 -left-20 h-[600px] w-[600px] rounded-full bg-accent/[0.05] blur-[150px]" />
        <div className="animate-gentle-pulse absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-[130px] [animation-delay:2.5s]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="section-container relative z-10 mb-12"
      >
        <p className="mb-5 font-mono text-[11px] tracking-[0.24em] text-muted-foreground/30 uppercase">
          The team
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-serif text-4xl leading-[1.1] font-light text-foreground italic md:text-5xl">
            The people behind it.
          </h2>
          <p className="max-w-xs pb-1 text-sm font-light text-muted-foreground/40 sm:text-right">
            We built Xolace for ourselves first. Every decision starts with the
            same question: would we have trusted this?
          </p>
        </div>
      </motion.div>

      <div className="relative z-10">
        <FounderCarousel founders={founders} />
      </div>
    </section>
  )
}
