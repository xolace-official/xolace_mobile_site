"use client"

import { m as motion } from "motion/react"
import Image from "next/image"
import { Spotlight } from "@/components/ui/spotlight"
import { DownloadButtons } from "@/components/shared/download-buttons"

export function Hero() {
  return (
    <section className="section-spacing-x relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-24 pb-16 md:py-16">
      <Spotlight duration={8} xOffset={80} />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-8 md:justify-between lg:flex-row lg:gap-10">
        {/* Text + CTAs */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-light text-foreground italic"
          >
            {/* Mobile + tablet: 2 lines */}
            <span className="block text-[2.5rem] leading-[1.2] font-semibold lg:hidden">
              <span className="block">For the moments</span>
              <span className="block">that don&apos;t have a name yet.</span>
            </span>
            {/* Desktop: 3 lines */}
            <span className="hidden text-[4.5rem] leading-[1.08] font-semibold lg:block">
              <span className="block whitespace-nowrap">For the moments</span>
              <span className="block whitespace-nowrap">
                that don&apos;t have
              </span>
              <span className="block whitespace-nowrap">a name yet.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0"
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
          className="pointer-events-none w-52 shrink-0 select-none md:w-80 lg:w-110"
        >
          <div className="relative">
            <div
              aria-hidden
              className="animate-gentle-pulse absolute inset-0 -z-10 scale-[1.6] rounded-full bg-primary/15 blur-[90px]"
            />
            <div
              aria-hidden
              className="animate-gentle-pulse absolute bottom-0 left-1/2 -z-10 h-1/2 w-3/4 -translate-x-1/2 rounded-full bg-accent/10 blur-[70px] [animation-delay:1.5s]"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
          </div>
        </motion.div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 hidden h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/4 blur-[140px] md:block" />
        <div className="absolute right-1/3 bottom-0 hidden h-87.5 w-87.5 rounded-full bg-accent/4 blur-[100px] md:block" />
      </div>
    </section>
  )
}
