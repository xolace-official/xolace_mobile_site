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
      <div className="section-container-narrow">

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-2xl md:text-3xl lg:text-[2.5rem] leading-[1.35] text-center mb-8"
        >
          When you&apos;re at your most honest, the last thing you need
          is to wonder if someone is watching.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="text-base text-muted-foreground/60 font-light leading-relaxed text-center mb-12"
        >
          We built Xolace for ourselves first. We know what it feels like
          to need a space that won&apos;t sell you out.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
          {features.map(({ Icon, text }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-3"
            >
              <Icon className="size-4 text-accent mt-0.5 shrink-0" strokeWidth={1.5} />
              <span className="text-sm font-light text-foreground/80 leading-relaxed">
                {text}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
