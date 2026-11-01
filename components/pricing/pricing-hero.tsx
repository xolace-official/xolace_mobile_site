"use client"

import { m as motion } from "motion/react"
import {
  DisplayHeading,
  Eyebrow,
  Lead,
  HeroGlow,
} from "@/components/shared/ledger"

// The only h1 on the page, shared by both layouts so the promise leads on every screen size.
export function PricingHero() {
  return (
    <section className="section-spacing relative">
      <HeroGlow />
      <div className="section-container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow>Pricing</Eyebrow>
          <DisplayHeading className="mt-6 max-w-3xl">
            Your mirror is free. It always will be.
          </DisplayHeading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl"
        >
          <Lead>
            Understanding what you feel shouldn&rsquo;t depend on whether you
            can pay. Xolace Plus is for what comes after the mirror: Kindling,
            more room to reflect, and your full history.
          </Lead>
        </motion.div>
      </div>
    </section>
  )
}
