"use client"

import { m as motion } from "motion/react"
import Image from "next/image"
import { DownloadButtons } from "@/components/shared/download-buttons"

export function LaunchSection() {
  return (
    <section
      id="download"
      className="relative flex min-h-screen items-end overflow-hidden"
    >
      {/* Full-screen background video — preload=none defers the 5.7 MB fetch until scroll */}
      <video
        src="/vids/Launch-vid.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Gradient overlay — heavier at bottom so text stays readable */}
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-background/10" />

      {/* Content anchored to the bottom */}
      <div className="relative z-10 w-full pb-20 md:pb-28">
        <div className="section-container-narrow space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <h2 className="text-5xl leading-tight font-light text-foreground md:text-6xl">
              Carry it{" "}
              <span className="font-serif font-light italic opacity-80">
                with you.
              </span>
            </h2>
            <p className="mx-auto max-w-md text-lg leading-relaxed text-muted-foreground">
              Xolace is free to download. Your first session takes 3 minutes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <DownloadButtons align="center" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
