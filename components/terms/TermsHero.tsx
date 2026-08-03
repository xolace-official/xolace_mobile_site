"use client"

import { m as motion } from "motion/react"

export function TermsHero() {
  return (
    <section className="hero-pb relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-gentle-pulse absolute -top-40 -right-20 h-[550px] w-[550px] rounded-full bg-primary/[0.05] blur-[140px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 font-mono text-[11px] tracking-[0.24em] text-muted-foreground/50 uppercase"
        >
          Legal
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 font-serif text-5xl leading-[1.1] font-semibold text-foreground md:text-6xl lg:text-[4.25rem]"
        >
          Terms of Service
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-base leading-relaxed font-light text-muted-foreground/70 md:text-lg"
        >
          By using Xolace, you enter into an agreement with us. These terms
          govern that relationship — our commitments to you, and what we ask
          in return.
        </motion.p>

        <div className="mt-8 flex items-center gap-6">
          <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground/50 uppercase">
            Last Updated: April 7, 2026
          </span>
        </div>

        <div className="mt-12 border-t border-border" />
      </div>
    </section>
  )
}
