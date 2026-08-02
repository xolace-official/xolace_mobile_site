"use client"

import { m as motion } from "motion/react"
import { AdvisorCarousel } from "@/components/ui/advisor-carousel"
import { advisors } from "@/lib/advisors"

export function AdvisorsSection() {
  return (
    <section className="section-spacing-y relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-gentle-pulse absolute -top-20 -right-20 h-[550px] w-[550px] rounded-full bg-primary/[0.045] blur-[140px]" />
        <div className="animate-gentle-pulse absolute -bottom-20 -left-20 h-[450px] w-[450px] rounded-full bg-accent/[0.04] blur-[120px] [animation-delay:2.5s]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="section-container relative z-10 mb-12"
      >
        <p className="mb-5 font-mono text-[11px] tracking-[0.24em] text-muted-foreground/30 uppercase">
          Who we listen to
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-serif text-4xl leading-[1.1] font-light text-foreground italic md:text-5xl">
            Guided by people
            <br className="hidden sm:block" /> with expertise in this field.
          </h2>
          <p className="max-w-xs pb-1 text-sm font-light text-muted-foreground/40 sm:text-right">
            Xolace is shaped in conversation with experts across mental health,
            safety, and product.
          </p>
        </div>
      </motion.div>

      <div className="relative z-10">
        <AdvisorCarousel advisors={advisors} />
      </div>
    </section>
  )
}
