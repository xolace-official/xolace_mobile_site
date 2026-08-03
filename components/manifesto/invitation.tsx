"use client"

import Image from "next/image"
import { m as motion } from "motion/react"
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
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
          >
            <div className="absolute -top-20 -left-20 hidden h-[500px] w-[500px] rounded-full bg-primary/[0.14] blur-[100px] md:block" />
            <div className="absolute right-1/3 bottom-0 hidden h-[400px] w-[400px] rounded-full bg-accent/[0.08] blur-[90px] md:block" />
          </div>

          <div className="relative z-10 flex flex-col gap-10 p-10 md:p-16 lg:flex-row lg:items-end lg:justify-between lg:p-20">
            {/* Left — text and buttons */}
            <div className="max-w-lg">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mb-5 font-serif text-5xl leading-[1.1] font-semibold text-foreground md:text-6xl lg:text-[4.25rem]"
              >
                Come home.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mb-10 font-serif text-base leading-relaxed text-muted-foreground/65 md:text-lg"
              >
                The room exists now. It&apos;s free. It takes three minutes. No
                sign-up. No feed. Just space.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <DownloadButtons align="start" />
              </motion.div>
            </div>

            {/* Right — mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.0,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex shrink-0 justify-center lg:justify-end"
            >
              <Image
                src="/flux-images/ChatGPT_Image_Oct_20__2025__10_39_59_PM-removebg-preview.png"
                alt=""
                width={260}
                height={260}
                className="h-auto w-44 object-contain drop-shadow-2xl md:w-56 lg:w-64"
                aria-hidden
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
