"use client"

import { motion } from "motion/react"
import { Spotlight } from "@/components/ui/spotlight"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-spacing-x pt-32 pb-24 overflow-hidden">
      <Spotlight duration={8} xOffset={80} />

      <div className="relative z-10 mx-auto max-w-5xl space-y-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1>
            {/* The Xolace truth — takes over the screen */}
            <span className="block font-serif text-5xl leading-[1.1] font-light text-foreground italic md:text-6xl lg:text-[5.0rem]">
              {`For the moments that`}
              <br />
              don't have a name yet.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          {`A quiet place to say what's true, when you can't find the words for it on your own.`}
        </motion.p>
      </div>

      {/* Warm ambient glow — deep indigo centre, accent bloom bottom-right */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute w-175 h-175 rounded-full bg-primary/4 blur-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-87.5 h-87.5 rounded-full bg-accent/4 blur-[100px] bottom-0 right-1/3" />
      </div>
    </section>
  )
}
