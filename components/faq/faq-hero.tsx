"use client"

import { motion } from "motion/react"

export function FaqHero() {
  return (
    <section className="pb-12">
      <div className="section-container text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.1] mb-6"
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
