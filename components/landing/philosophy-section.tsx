"use client"

import { motion } from "motion/react"

export function PhilosophySection() {
  return (
    <section id="manifesto" className="py-32 bg-xo-surface-lowest">
      <div className="max-w-4xl mx-auto px-8 text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block px-4 py-1 rounded-full border border-xo-outline-variant/20 text-xs tracking-[0.05rem] uppercase text-primary"
        >
          The Philosophy
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl text-foreground leading-tight font-light"
        >
          Xolace is not therapy. It&apos;s the space before, between, and
          outside therapy.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light"
        >
          Sometimes you want clarity. Sometimes you just need to say it and let
          it go. Xolace holds both.
        </motion.p>
      </div>
    </section>
  )
}
