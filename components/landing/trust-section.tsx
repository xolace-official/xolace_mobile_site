"use client"

import { motion } from "motion/react"
import { Lock, UserX, EyeOff, Ban } from "lucide-react"

const features = [
  { Icon: Lock, text: "Your words are encrypted end-to-end." },
  { Icon: UserX, text: "Account only needed to share with others." },
  { Icon: EyeOff, text: "Your name is never attached to what you write." },
  { Icon: Ban, text: "No ads. No data selling. Ever." },
]

export function TrustSection() {
  return (
    <section className="section-spacing bg-xo-surface-lowest">
      <div className="section-container">
        <div className="flex w-full flex-col items-start justify-between gap-12 md:flex-row">
          {/* Left — emotional premise */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 space-y-6"
          >
            <p className="text-3xl leading-[1.3] font-light text-foreground md:text-4xl">
              When you&apos;re at your most honest, the last thing you need is
              to wonder if someone is watching.
            </p>
            <p className="text-base leading-relaxed font-light text-muted-foreground/60">
              We built Xolace for ourselves first. We know what it feels like to
              need a space that won&apos;t sell you out.
            </p>
          </motion.div>

          {/* Right — privacy commitments as plain statements */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 space-y-0 divide-y divide-border/15 "
          >
            {features.map(({ Icon, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex gap-4 py-5 "
              >
                <Icon
                  className="mt-0.5 size-4 shrink-0 text-accent"
                  strokeWidth={1.5}
                />
                <span className="text-sm  font-light text-foreground/70">
                  {text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
