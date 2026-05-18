"use client"

import { motion } from "motion/react"

export function ProblemSection() {
  return (
    <section className="py-32 md:py-40 bg-xo-surface-lowest overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 space-y-20 md:space-y-24">

        {/* Vignette 1 — left */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/30 mb-5">
            Monday · 11:00 PM
          </p>
          <p className="text-3xl md:text-5xl text-foreground font-light leading-[1.25]">
            Chest tight.
            <br />
            Don&apos;t know why.
            <br />
            Not &lsquo;therapy bad&rsquo; —{" "}
            <em className="text-primary/55 not-italic font-extralight">just heavy.</em>
          </p>
        </motion.div>

        {/* Vignette 2 — right offset */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl md:ml-auto text-left md:text-right"
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/30 mb-5">
            Friday · 10:30 PM
          </p>
          <p className="text-3xl md:text-5xl text-foreground font-light leading-[1.25]">
            Scrolling.
            <br />
            Not depressed —{" "}
            <em className="text-primary/55 not-italic font-extralight">just hollow.</em>
          </p>
        </motion.div>

        {/* Bridge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4 border-t border-border/20"
        >
          <p className="text-xl md:text-2xl text-muted-foreground/60 font-serif italic font-light leading-relaxed">
            That space. That&apos;s where Xolace lives.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
