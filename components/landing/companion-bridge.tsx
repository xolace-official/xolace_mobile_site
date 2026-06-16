"use client"

import Image from "next/image"
import { m as motion, useScroll, useTransform } from "motion/react"
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
      className="relative flex items-center justify-center gap-5 overflow-hidden py-24 md:py-40"
    >
      {/* Ambient glow — echoes the blue in the image */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 hidden h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/6 blur-[120px] md:block" />
        <div className="absolute top-1/2 left-1/2 hidden h-[300px] w-[300px] -translate-x-1/2 -translate-y-[40%] rounded-full bg-primary/4 blur-[80px] md:block" />
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mb-10 max-w-md px-6 text-center font-serif text-lg text-muted-foreground italic md:text-xl"
      >
        The AI finds the words. Another person proves you&apos;re not alone in
        them.
      </motion.p>

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
          <div className="absolute -bottom-8 left-1/2 h-14 w-[65%] -translate-x-1/2 rounded-full bg-blue-500/20 blur-2xl" />

          <Image
            src="/images/6ai-store-black.png"
            alt="We walk the journey with you — Xolace"
            width={420}
            height={700}
            className="relative h-auto w-[272px] rounded-[2.25rem] border border-border/20 shadow-[0_40px_80px_-16px_rgba(0,40,120,0.18),0_8px_24px_-4px_rgba(0,0,0,0.1)] md:w-[340px] lg:w-[380px]"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
