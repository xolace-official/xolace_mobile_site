"use client"

import { motion, useReducedMotion } from "motion/react"

export function AboutHero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative hero-pb overflow-hidden">

      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[650px] h-[650px] rounded-full bg-primary/[0.07] blur-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-gentle-pulse" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-accent/[0.05] blur-[110px] top-1/4 right-1/4 animate-gentle-pulse [animation-delay:2.5s]" />
        <div className="absolute w-[350px] h-[350px] rounded-full bg-chart-2/[0.04] blur-[100px] bottom-0 left-1/4 animate-gentle-pulse [animation-delay:5s]" />
      </div>

      <div className="section-container relative z-10 text-center">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground/50 mb-8"
        >
          End-to-end emotional processing infrastructure
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-4xl md:text-5xl lg:text-[4.5rem] font-light text-foreground leading-[1.1] mb-6"
        >
          We built the room<br />we couldn&apos;t find.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-muted-foreground/60 font-light leading-relaxed max-w-lg mx-auto"
        >
          From when you can&apos;t name what you&apos;re feeling, to finding the right help. Not simulated help.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: prefersReducedMotion ? 1 : 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4 mt-12 origin-center"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-border/30" />
          <div className="size-1.5 rounded-full bg-primary/40" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-border/30" />
        </motion.div>

      </div>
    </section>
  )
}
