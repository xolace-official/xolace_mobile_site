"use client"

import { motion } from "motion/react"
import { Spotlight } from "@/components/ui/spotlight"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      <Spotlight duration={8} xOffset={80} />

      <div className="max-w-4xl text-center z-10 space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight tracking-tight font-medium"
        >
          Not everything needs fixing.{" "}
          <br />
          <span className="italic font-light opacity-90">
            Some things just need to be said.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Xolace is a quiet space for the moments between. Not a feed. Not a
          clinic. A place to be human.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-3"
        >
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full cta-gradient text-primary-foreground text-sm font-semibold tracking-wide transition-all duration-500 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
          >
            Free to download
          </a>
          <p className="text-xs text-muted-foreground/40 tracking-wide">
            Available on iOS &amp; Android
          </p>
        </motion.div>
      </div>

      {/* Two ambient colour sources — primary top-left, accent bottom-right */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full top-1/4 left-1/4" />
        <div className="absolute w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full bottom-1/4 right-1/4" />
      </div>
    </section>
  )
}
