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

        {/* Download badges — direct path to the app, no scrolling required */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-5"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/gh/app/xolace/id6761601429"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-105 hover:opacity-90 active:scale-95"
              aria-label="Download Xolace on the App Store"
            >
              <Image
                src="/images/app-store-mobile.png"
                alt="Download on the App Store"
                width={160}
                height={53}
                className="h-12 w-auto dark:hidden"
              />
              <Image
                src="/images/app-store-mobile-dark.png"
                alt="Download on the App Store"
                width={160}
                height={53}
                className="h-12 w-auto hidden dark:block"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.xolaceincorg.xolace"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-105 hover:opacity-90 active:scale-95"
              aria-label="Get Xolace on Google Play"
            >
              <Image
                src="/images/play-store-light.png"
                alt="Get it on Google Play"
                width={160}
                height={53}
                className="h-12 w-auto dark:hidden"
              />
              <Image
                src="/images/play-store-dark.png"
                alt="Get it on Google Play"
                width={160}
                height={53}
                className="h-12 w-auto hidden dark:block"
              />
            </a>
          </div>
          <p className="text-xs text-muted-foreground/35 tracking-wide">
            Free to download · iOS &amp; Android
          </p>
        </motion.div>

        <motion.a
          href="#paths"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="inline-block text-muted-foreground/25 hover:text-muted-foreground/50 transition-colors duration-500 text-lg"
          aria-label="Scroll to see how it works"
        >
          ↓
        </motion.a>
      </div>

      {/* Warm ambient glow — deep indigo centre, accent bloom bottom-right */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[700px] h-[700px] rounded-full bg-primary/[0.04] blur-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[350px] h-[350px] rounded-full bg-accent/[0.04] blur-[100px] bottom-0 right-1/3" />
      </div>
    </section>
  )
}
