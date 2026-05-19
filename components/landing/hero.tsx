"use client"

import { motion } from "motion/react"
import { Spotlight } from "@/components/ui/spotlight"
import { Iphone } from "@/components/ui/iphone"
import { DownloadButtons } from "@/components/shared/download-buttons"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-spacing-x pt-32 pb-24 overflow-hidden">
      <Spotlight duration={8} xOffset={80} />

      <div className="relative z-10 w-full max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-10">

        {/* Text + CTAs */}
        <div className="flex-1 text-center lg:text-left">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic text-4xl leading-[1.1] font-light text-foreground md:text-5xl lg:text-[4.5rem] lg:leading-[1.08]"
          >
            For the moments<br />
            that don&apos;t have<br />
            a name yet.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 mx-auto lg:mx-0 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {`A quiet place to say what's true, when you can't find the words for it on your own.`}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <DownloadButtons align="center" className="lg:justify-start" />
          </motion.div>
        </div>

        {/* iPhone */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 w-[200px] md:w-[230px] lg:w-[260px]"
        >
          <div className="relative">
            <div aria-hidden className="absolute inset-0 -z-10 blur-[60px] bg-primary/10 rounded-full scale-150" />
            <Iphone src="/app-images/see-it-clearly.jpeg" />
          </div>
        </motion.div>

      </div>

      {/* Warm ambient glow — deep indigo centre, accent bloom bottom-right */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute w-175 h-175 rounded-full bg-primary/4 blur-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-87.5 h-87.5 rounded-full bg-accent/4 blur-[100px] bottom-0 right-1/3" />
      </div>
    </section>
  )
}
