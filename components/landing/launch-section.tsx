"use client"

import { motion } from "motion/react"
import { DownloadButtons } from "@/components/shared/download-buttons"

export function LaunchSection() {
  return (
    <section id="download" className="section-spacing relative overflow-hidden bg-xo-outline-variant">
      <div className="section-container-narrow relative z-10 space-y-16">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-4"
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <DownloadButtons align="center" />
        </motion.div>

      </div>
    </section>
  )
}
