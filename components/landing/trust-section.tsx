"use client"

import { motion } from "motion/react"
import { Lock, EyeOff, UserX, Ban } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Commitment = {
  Icon: LucideIcon
  label: string
  text: string
  barColor: string
  iconColor: string
}

const commitments: Commitment[] = [
  {
    Icon: Lock,
    label: "Encrypted end-to-end",
    text: "Your words are encrypted. No one at Xolace reads them — not even us.",
    barColor: "bg-primary/50",
    iconColor: "text-primary/60",
  },
  {
    Icon: EyeOff,
    label: "Fully anonymous",
    text: "Your name is never attached to what you write. You are not a profile.",
    barColor: "bg-accent/50",
    iconColor: "text-accent/60",
  },
  {
    Icon: UserX,
    label: "No account needed",
    text: "Mirror and Vent work the moment you open the app. No sign-up required.",
    barColor: "bg-primary/30",
    iconColor: "text-primary/50",
  },
  {
    Icon: Ban,
    label: "No ads. No selling.",
    text: "We don't run ads. We don't sell data. The trust is the product.",
    barColor: "bg-accent/30",
    iconColor: "text-accent/50",
  },
]

export function TrustSection() {
  return (
    <section className="section-spacing bg-xo-surface-lowest">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — emotional anchor */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-32 space-y-6"
          >
            <span className="section-label">Privacy</span>
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-[2.6rem] font-light leading-[1.2] text-foreground">
              When you&apos;re at your most honest, the last thing you need
              is to wonder if someone&apos;s watching.
            </h2>
            <p className="text-base text-muted-foreground/55 font-light leading-relaxed max-w-sm">
              We built Xolace for ourselves first. We know what it feels like
              to need a space that won&apos;t sell you out.
            </p>
          </motion.div>

          {/* Right — commitment rows */}
          <div className="divide-y divide-border/15">
            {commitments.map(({ Icon, label, text, barColor, iconColor }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-5 py-6 first:pt-0 last:pb-0"
              >
                {/* Thin accent bar */}
                <div className={`mt-1.5 w-0.5 h-10 rounded-full shrink-0 ${barColor}`} />

                {/* Text */}
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium text-foreground/85">{label}</p>
                  <p className="text-sm text-muted-foreground/50 font-light leading-relaxed">
                    {text}
                  </p>
                </div>

                {/* Icon */}
                <Icon
                  className={`size-4 shrink-0 mt-1 ${iconColor}`}
                  strokeWidth={1.5}
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
