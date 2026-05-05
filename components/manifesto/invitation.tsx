"use client"

import Image from "next/image"
import { motion } from "motion/react"

export function Invitation() {
  return (
    <section className="asymmetric-layout mb-32" id="download">
      <div className="bg-card p-5 md:p-20 rounded-xl relative overflow-hidden">
        {/* Subtle gradient glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
        <div className="relative z-10 max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-5xl text-foreground mb-6 font-light"
          >
            Come home.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-muted-foreground mb-12 text-lg font-serif"
          >
            If any of this resonated — Xolace is live. It&apos;s ready when you are.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap items-center gap-4"
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
            aria-label="Get Xolace on the App Store"
          >
            <Image
              src="/images/app-store-mobile.png"
              alt="Download on the App Store"
              width={200}
              height={59}
              className="h-14 w-auto rounded-xl dark:hidden"
            />
            <Image
              src="/images/app-store-mobile-dark.png"
              alt="Download on the App Store"
              width={200}
              height={59}
              className="h-14 w-auto rounded-xl hidden dark:block"
            />
          </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-xs text-muted-foreground mt-6"
          >
            iOS coming soon.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
