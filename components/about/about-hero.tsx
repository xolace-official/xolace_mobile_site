"use client"

import { m as motion, useReducedMotion } from "motion/react"

export function AboutHero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="hero-pb relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-gentle-pulse absolute top-1/2 left-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.07] blur-[140px]" />
        <div className="animate-gentle-pulse absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/[0.05] blur-[110px] [animation-delay:2.5s]" />
        <div className="animate-gentle-pulse absolute bottom-0 left-1/4 h-[350px] w-[350px] rounded-full bg-chart-2/[0.04] blur-[100px] [animation-delay:5s]" />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 font-mono text-[11px] tracking-[0.24em] text-muted-foreground/50 uppercase"
        >
          End-to-end emotional processing infrastructure
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 font-serif text-4xl leading-[1.1] font-light text-foreground italic md:text-5xl lg:text-[4.5rem]"
        >
          We built the room
          <br />
          we couldn&apos;t find.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-lg text-base leading-relaxed font-light text-muted-foreground/60 md:text-lg"
        >
          From when you can&apos;t name what you&apos;re feeling, to finding the
          right help. Not simulated help.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: prefersReducedMotion ? 1 : 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex origin-center items-center justify-center gap-4"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-border/30" />
          <div className="size-1.5 rounded-full bg-primary/40" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-border/30" />
        </motion.div>
      </div>
    </section>
  )
}
