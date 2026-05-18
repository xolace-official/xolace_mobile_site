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
    <section className="py-32 px-8 bg-xo-surface-lowest">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left — emotional premise */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-3xl md:text-4xl text-foreground font-light leading-[1.3]">
              When you&apos;re at your most honest, the last thing you need
              is to wonder if someone is watching.
            </p>
            <p className="text-base text-muted-foreground/60 font-light leading-relaxed">
              We built Xolace for ourselves first. We know what it feels like
              to need a space that won&apos;t sell you out.
            </p>
          </motion.div>

          {/* Right — privacy commitments as plain statements */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-0 divide-y divide-border/15"
          >
            {features.map(({ Icon, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-4 py-5"
              >
                <Icon className="size-4 text-accent mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-foreground/70 font-light leading-relaxed">
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
