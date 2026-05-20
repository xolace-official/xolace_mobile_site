"use client"

import { motion } from "motion/react"

export function AboutHero() {
  return (
    <section className="relative hero-pb overflow-hidden">

      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute w-150 h-[600px] rounded-full bg-primary/5 blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-4xl md:text-5xl lg:text-[4rem] font-light text-foreground leading-[1.1] mb-6"
        >
          We built the room<br />we couldn&apos;t find.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-md mx-auto"
        >
          Four people who felt the weight first - and built the place they needed.
        </motion.p>
      </div>
    </section>
  )
}
