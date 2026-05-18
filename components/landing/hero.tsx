"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Spotlight } from "@/components/ui/spotlight"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24 overflow-hidden">
      <Spotlight duration={8} xOffset={80} />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1>
            {/* The "world's framing" — quieter, step back */}
            <span className="block text-2xl md:text-4xl text-foreground/50 font-light tracking-tight mb-3">
              Not everything needs fixing.
            </span>
            {/* The Xolace truth — takes over the screen */}
            <span className="block text-5xl md:text-7xl lg:text-[5.5rem] text-foreground font-serif italic font-light leading-[1.1]">
              Some things just need
              <br />
              to be said.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          A quiet space for the moments between. Not a feed. Not a clinic.
          Just a place to be human.
        </motion.p>
      </div>

      {/* Warm ambient glow — deep indigo centre, accent bloom bottom-right */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[700px] h-[700px] rounded-full bg-primary/[0.04] blur-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[350px] h-[350px] rounded-full bg-accent/[0.04] blur-[100px] bottom-0 right-1/3" />
      </div>
    </section>
  )
}
