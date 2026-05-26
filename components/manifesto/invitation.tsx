"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { DownloadButtons } from "@/components/shared/download-buttons"

export function Invitation() {
  return (
    <section className="section-spacing" id="download">
      <div className="section-container-wide">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-primary/15 bg-primary/[0.05]"
        >
          {/* Inner atmosphere */}
          <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/[0.14] blur-[100px] -top-20 -left-20" />
            <div className="absolute w-[400px] h-[400px] rounded-full bg-accent/[0.08] blur-[90px] bottom-0 right-1/3" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 p-10 md:p-16 lg:p-20">

            {/* Left — text and buttons */}
            <div className="max-w-lg">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif italic font-light text-4xl md:text-5xl lg:text-[3.25rem] text-foreground leading-[1.1] mb-5"
              >
                Come home.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-base md:text-lg text-muted-foreground/65 leading-relaxed mb-10"
              >
                The room exists now. It&apos;s free. It takes three minutes.
                No sign-up. No feed. Just space.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <DownloadButtons align="start" />
              </motion.div>
            </div>

            {/* Right — mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="shrink-0 flex justify-center lg:justify-end"
            >
              <Image
                src="/flux-images/ChatGPT_Image_Oct_20__2025__10_39_59_PM-removebg-preview.png"
                alt=""
                width={260}
                height={260}
                className="w-44 md:w-56 lg:w-64 h-auto object-contain drop-shadow-2xl"
                aria-hidden
              />
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
