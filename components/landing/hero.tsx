"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Spotlight } from "@/components/ui/spotlight"
import { DownloadButtons } from "@/components/shared/download-buttons"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-spacing-x pt-24 pb-16 md:py-16 overflow-hidden">
      <Spotlight duration={8} xOffset={80} />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center md:justify-between gap-8 lg:gap-10">

        {/* Text + CTAs */}
        <div className="flex-1 text-center lg:text-left">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic font-light text-foreground"
          >
            {/* Mobile + tablet: 2 lines */}
            <span className="block lg:hidden font-semibold text-[2.5rem] leading-[1.2]">
              <span className="block">For the moments</span>
              <span className="block">that don&apos;t have a name yet.</span>
            </span>
            {/* Desktop: 3 lines */}
            <span className="font-semibold hidden lg:block text-[4.5rem] leading-[1.08]">
              <span className="block whitespace-nowrap">For the moments</span>
              <span className="block whitespace-nowrap">that don&apos;t have</span>
              <span className="block whitespace-nowrap">a name yet.</span>
            </span>
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

        <motion.div
          initial={{ opacity: 0, y: 56, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 w-52 md:w-80 lg:w-110 pointer-events-none select-none"
        >
          <div className="relative">
            <motion.div
              aria-hidden
              animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 -z-10 blur-[90px] bg-primary/15 rounded-full scale-[1.6]"
            />
            <motion.div
              aria-hidden
              animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 w-3/4 h-1/2 blur-[70px] bg-accent/10 rounded-full"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                animate={{ scale: [1, 1.015, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <Image
                  src="/flux-images/ChatGPT_Image_Oct_20__2025__10_36_31_PM-removebg-preview.png"
                  alt="Flux"
                  width={300}
                  height={400}
                  className="w-full drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute w-175 h-175 rounded-full bg-primary/4 blur-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-87.5 h-87.5 rounded-full bg-accent/4 blur-[100px] bottom-0 right-1/3" />
      </div>
    </section>
  )
}
