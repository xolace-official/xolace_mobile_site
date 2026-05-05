"use client"

import Image from "next/image"
import { motion } from "motion/react"

export function LaunchSection() {
  return (
    <section id="download" className="py-40 px-8 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10 space-y-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-4"
        >
          <h2 className="text-5xl md:text-6xl text-foreground leading-tight font-light">
            We&apos;re live.{" "}
            <br />
            <span className="italic font-extralight opacity-80">
              Find your quiet corner.
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed">
            Xolace is out in the world. Watch what we built, then carry it with you.
          </p>
        </motion.div>

        {/* Launch video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden ring-1 ring-border shadow-2xl shadow-primary/5"
        >
          <video
            src="/vids/Launch-vid.mp4"
            controls
            playsInline
            className="w-full block"
          />
        </motion.div>

        {/* Download badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
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
              width={200}
              height={59}
              className="h-14 w-auto dark:hidden"
            />
            <Image
              src="/images/play-store-dark.png"
              alt="Get it on Google Play"
              width={200}
              height={59}
              className="h-14 w-auto hidden dark:block"
            />
          </a>

          <a
            href="https://apps.apple.com/gh/app/xolace/id6761601429"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-105 hover:opacity-90 active:scale-95"
            aria-label="Download Xolace on the App Store"
          >
            <Image
              src="/images/app-store-mobile.png"
              alt="Download Xolace on the App Store"
              aria-hidden="true"
              width={200}
              height={59}
              className="h-14 w-auto rounded-xl dark:hidden"
            />
            <Image
              src="/images/app-store-mobile-dark.png"
              alt="Download Xolace on the App Store"
              aria-hidden="true"
              width={200}
              height={59}
              className="h-14 w-auto rounded-xl hidden dark:block"
            />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-xs text-muted-foreground/60"
        >
          iOS coming soon.
        </motion.p>
      </div>

      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[120px] rounded-[100%] pointer-events-none" />
    </section>
  )
}
