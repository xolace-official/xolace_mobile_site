"use client"

import { m as motion } from "motion/react"

// The only h1 on the page, shared by both layouts so the promise leads on every screen size.
export function PricingHero() {
  return (
    <section className="section-spacing">
      <div className="section-container-wide flex flex-col gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-4xl leading-[1.05] font-semibold tracking-tight text-foreground md:text-6xl lg:text-8xl lg:leading-[1.02]"
        >
          Your mirror is free. It always will be.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          Understanding what you feel shouldn&rsquo;t depend on whether you can
          pay. Xolace Plus is for what comes after the mirror: Kindling, more
          room to reflect, and your full history.
        </motion.p>
      </div>
    </section>
  )
}
