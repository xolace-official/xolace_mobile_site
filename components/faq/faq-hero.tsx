"use client"

import { motion } from "motion/react"

export function FaqHero() {
  return (
    <section className="relative hero-pb overflow-hidden">

      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-4xl md:text-5xl lg:text-[4rem] font-light text-foreground leading-[1.1] mb-6"
        >
          Questions<br />worth asking.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-md mx-auto"
        >
          Honest answers. If something&apos;s still unclear, email{" "}
          <a
            href="mailto:hello@xolaceinc.com"
            className="text-foreground/80 underline underline-offset-4 hover:text-foreground transition-colors duration-200"
          >
            hello@xolaceinc.com
          </a>
          . We actually respond.
        </motion.p>
      </div>
    </section>
  )
}
