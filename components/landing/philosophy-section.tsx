"use client"

import { m as motion } from "motion/react"

export function PhilosophySection() {
  return (
    <section id="manifesto" className="bg-xo-surface-lowest py-32">
      <div className="mx-auto max-w-4xl space-y-10 px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block rounded-full border border-xo-outline-variant/20 px-4 py-1 text-xs tracking-[0.05rem] text-primary uppercase"
        >
          The Philosophy
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl leading-tight font-light text-foreground md:text-5xl"
        >
          Xolace is not therapy. It&apos;s the space before, between, and
          outside therapy.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl leading-relaxed font-light text-muted-foreground md:text-2xl"
        >
          Sometimes you want clarity. Sometimes you just need to say it and let
          it go. Xolace holds both.
        </motion.p>
      </div>
    </section>
  )
}
