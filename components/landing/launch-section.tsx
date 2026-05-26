"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { DownloadButtons } from "@/components/shared/download-buttons"

export function LaunchSection() {
  return (
    <section
      id="download"
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Full-screen background video — preload=none defers the 5.7 MB fetch until scroll */}
      <video
        src="/vids/Launch-vid.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay — heavier at bottom so text stays readable */}
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-background/10" />

      {/* Content anchored to the bottom */}
      <div className="relative z-10 w-full pb-20 md:pb-28">
        <div className="section-container-narrow text-center space-y-8">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <h2 className="text-5xl md:text-6xl text-foreground leading-tight font-light">
              Carry it{" "}
              <span className="font-serif italic font-light opacity-80">
                with you.
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
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
