"use client"

import { motion } from "motion/react"
import { FounderCarousel } from "@/components/ui/founder-carousel"
import { founders } from "@/lib/team"

export function TeamSection() {
  return (
    <section className="section-spacing-y border-t border-border/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="section-container-wide mb-10"
      >
        <span className="section-label mb-5">The team</span>
        <h2 className="text-4xl md:text-5xl text-foreground font-light mb-4">
          The people behind it.
        </h2>
        <p className="font-serif text-muted-foreground/65 max-w-md leading-relaxed">
          We built Xolace for ourselves first. Every decision starts with the same question: would we have trusted this on the hard nights?
        </p>
      </motion.div>

      <FounderCarousel founders={founders} />
    </section>
  )
}
