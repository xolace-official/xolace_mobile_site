"use client"

import { motion } from "motion/react"
import { Lock, UserX, EyeOff, Ban } from "lucide-react"

const features = [
  { icon: Lock, text: "Words are end-to-end encrypted." },
  { icon: UserX, text: "Account only needed to share your thoughts with others." },
  { icon: EyeOff, text: "Your name is never attached to what you write." },
  { icon: Ban, text: "No ads. No data selling. Ever." },
]

export function TrustSection() {
  return (
    <section className="py-32 px-8 bg-xo-surface-lowest">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <h2 className="text-3xl text-foreground font-light">
              Built on trust,
              <br />
              not extraction.
            </h2>
            <div className="grid grid-cols-1 gap-5">
              {features.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <Icon className="size-[18px] text-accent mt-0.5 shrink-0" />
                  <span className="text-sm leading-relaxed">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            <PrivacyOrb />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function PrivacyOrb() {
  return (
    <div className="relative w-full max-w-[300px] aspect-square flex items-center justify-center">
      {/* Outermost ring */}
      <div className="absolute inset-0 rounded-full border border-border/20" />
      {/* Mid ring */}
      <div className="absolute inset-[12%] rounded-full border border-border/30" />
      {/* Inner ring */}
      <div className="absolute inset-[26%] rounded-full border border-primary/15" />

      {/* Glow — sits behind the icon */}
      <div className="absolute inset-[34%] rounded-full bg-primary/8 blur-xl" />

      {/* Pulsing halo */}
      <div className="absolute inset-[30%] rounded-full bg-primary/5 animate-gentle-pulse" />

      {/* Encrypted text ring — decorative, evokes data */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full opacity-[0.06] text-foreground"
        aria-hidden
      >
        <defs>
          <path id="textCircle" d="M 100,100 m -74,0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0" />
        </defs>
        <text className="text-[9px]" fill="currentColor" letterSpacing="3">
          <textPath href="#textCircle">
            ENCRYPTED · ANONYMOUS · NO ADS · PRIVATE · ENCRYPTED · ANONYMOUS ·
          </textPath>
        </text>
      </svg>

      {/* Center icon */}
      <Lock className="relative z-10 size-10 text-primary/60" strokeWidth={1.5} />
    </div>
  )
}
