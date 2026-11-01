"use client"

import { m as motion } from "motion/react"
import { SafetyCrisisCard } from "@/components/safety/safety-crisis-card"
import {
  DisplayHeading,
  Eyebrow,
  Lead,
  HeroGlow,
} from "@/components/shared/ledger"

// Crisis lines come before the title in the DOM: on phones someone in danger sees them first; from lg they sit beside it.
export function SafetyHero() {
  return (
    <section className="section-spacing relative">
      <HeroGlow />
      <div className="section-container-wide relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:items-end lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:order-2"
        >
          <SafetyCrisisCard />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow>Safety</Eyebrow>
          <DisplayHeading className="mt-6">Safety at Xolace</DisplayHeading>
          <Lead className="mt-8 max-w-xl">
            What is in place today, and what we haven&rsquo;t built yet. We
            would rather you hear the second list from us.
          </Lead>
        </motion.div>
      </div>
    </section>
  )
}
