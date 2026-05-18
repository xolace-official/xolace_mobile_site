"use client"

import { motion } from "motion/react"

export function ProblemSection() {
  return (
    <section className="py-32 px-8 md:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-8 md:col-start-3 space-y-12">

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl text-foreground leading-snug font-light"
          >
            Monday at 11pm. Chest tight.
            <br />
            Don&apos;t know why. Not &apos;therapy bad&apos; —{" "}
            <span className="text-primary/60 italic">just heavy.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl text-foreground leading-snug font-light pl-8 md:pl-24"
          >
            Friday night. Scrolling.
            <br />
            Not depressed —{" "}
            <span className="text-primary/60 italic">just hollow.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-primary/60 italic text-center pt-4"
          >
            That space. That&apos;s where Xolace lives.
          </motion.p>

        </div>
      </div>
    </section>
  )
}
