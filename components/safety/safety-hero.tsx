"use client"

import { m as motion } from "motion/react"
import { SafetyCrisisCard } from "@/components/safety/safety-crisis-card"

// Crisis lines come before the title: someone in danger shouldn't have to read anything first.
export function SafetyHero() {
  return (
    <section className="section-spacing">
      <div className="section-container-narrow flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SafetyCrisisCard />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Safety at Xolace
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            What is in place today, and what we haven&rsquo;t built yet. We
            would rather you hear the second list from us.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
