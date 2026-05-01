"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export function CompanionBridge() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-40 overflow-hidden flex items-center justify-center"
    >
      {/* Ambient glow — echoes the blue in the image */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-blue-400/[0.06] blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[300px] h-[300px] rounded-full bg-primary/[0.04] blur-[80px]" />
      </div>

      {/* Image — centered, floating */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.93 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 px-6"
      >
        <motion.div style={{ y }} className="relative">
          {/* Soft ground shadow — creates the floating illusion */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[65%] h-14 bg-blue-500/20 blur-2xl rounded-full" />

          <Image
            src="/images/6ai-store-black.png"
            alt="We walk the journey with you — Xolace"
            width={420}
            height={700}
            className="relative w-[272px] md:w-[340px] lg:w-[380px] h-auto rounded-[2.25rem] shadow-[0_40px_80px_-16px_rgba(0,40,120,0.18),0_8px_24px_-4px_rgba(0,0,0,0.1)] border border-border/20"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
