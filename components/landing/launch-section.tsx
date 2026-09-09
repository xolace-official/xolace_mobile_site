"use client"

import { useEffect, useRef, useState } from "react"
import { m as motion } from "motion/react"
import { DownloadButtons } from "@/components/shared/download-buttons"

export function LaunchSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    // autoPlay forces browsers to fetch the video regardless of the
    // preload hint, so the 5.7 MB file must not be in the DOM at all
    // until the section is actually about to be scrolled into view.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowVideo(true)
          observer.disconnect()
        }
      },
      { rootMargin: "600px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="download"
      className="relative flex min-h-screen items-end overflow-hidden"
    >
      {/* Full-screen background video — mounted only once the section nears the viewport */}
      {showVideo && (
        <video
          src="/vids/Launch-vid.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Gradient overlay — heavier at bottom so text stays readable */}
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-background/10" />

      {/* Content anchored to the bottom */}
      <div className="relative z-10 w-full pb-20 md:pb-28">
        <div className="section-container-narrow space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-4"
          >
            <h2 className="font-serif text-5xl leading-[1.1] font-semibold text-foreground md:text-6xl lg:text-[4.25rem]">
              Carry it with you.
            </h2>
            <p className="mx-auto max-w-md text-lg leading-relaxed text-muted-foreground">
              Xolace is free to download. Your first session takes 3 minutes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <DownloadButtons align="center" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
