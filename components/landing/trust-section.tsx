"use client"

import { m as motion } from "motion/react"
import { Lock, EyeOff, UserX, Ban, ShieldCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Promise = {
  Icon: LucideIcon
  label: string
  text: string
}

const promises: Promise[] = [
  {
    Icon: Lock,
    label: "Private by design",
    text: "Encrypted in transit and at rest. No human at Xolace reviews what you write.",
  },
  {
    Icon: EyeOff,
    label: "Anonymous, always",
    text: "Your name is never attached to anything. You are not a profile.",
  },
  {
    Icon: UserX,
    label: "No followers, no feed",
    text: "There is nothing to perform here.",
  },
  {
    Icon: Ban,
    label: "No ads, no data sold",
    text: "Ever. The trust is the product.",
  },
]

export function TrustSection() {
  return (
    <section className="section-spacing bg-muted overflow-hidden relative">

      {/* single quiet atmospheric wash — replaces the busy concentric rings + multi-orb backdrop */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[700px] h-[700px] rounded-full bg-primary/[0.04] blur-[140px] -top-40 -right-20 animate-gentle-pulse" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[120px] -bottom-20 -left-20 animate-gentle-pulse [animation-delay:3s]" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-12 items-start">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground/60 mb-7 flex items-center gap-2.5">
              <span className="inline-block size-1 rounded-full bg-primary" />
              Built on trust
            </p>

            <h2 className="font-serif italic font-light text-foreground text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] mb-7">
              When you&apos;re at your most honest,<br className="hidden md:block" /> you deserve to feel safe.
            </h2>

            <p className="text-base text-muted-foreground/80 font-light leading-relaxed max-w-md mb-10">
              We built Xolace for ourselves first. We know what it feels like to need a space that won&apos;t sell you out.
            </p>

            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-foreground/25" />
              <span className="font-serif italic text-sm text-muted-foreground/70">
                The Xolace team
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-2xl border border-border/60 bg-background/40 backdrop-blur-sm overflow-hidden">

              {/* corner mark — gives the panel a "stamped" quality */}
              <div className="absolute top-5 right-6 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/40">
                <ShieldCheck className="size-3" strokeWidth={1.5} />
                Sealed
              </div>

              <div className="px-7 pt-12 pb-2">
                <p className="font-serif italic text-sm text-muted-foreground/70 mb-1">
                  Our promises to you
                </p>
              </div>

              <ul>
                {promises.map(({ Icon, label, text }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative grid grid-cols-[auto_auto_1fr] items-start gap-x-5 px-7 py-6 border-t border-border/40 transition-colors duration-500 hover:bg-foreground/[0.02]"
                  >
                    <span className="font-mono text-[11px] tracking-[0.15em] text-muted-foreground/40 pt-1.5 tabular-nums">
                      0{i + 1}
                    </span>

                    <div className="size-9 rounded-full border border-border/60 bg-background/60 flex items-center justify-center mt-0.5 transition-colors duration-500 group-hover:border-foreground/30">
                      <Icon className="size-[15px] text-foreground/70" strokeWidth={1.5} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[15px] font-medium text-foreground leading-snug mb-1">
                        {label}
                      </p>
                      <p className="text-sm text-muted-foreground/80 font-light leading-relaxed">
                        {text}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <div className="border-t border-border/40 px-7 py-5 flex items-center justify-between">
                <span className="font-serif italic text-xs text-muted-foreground/60">
                  Signed, in good faith.
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
                  v 1.0
                </span>
              </div>

            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 flex items-center gap-5"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border/30" />
          <div className="flex items-center gap-2 shrink-0">
            <ShieldCheck className="size-4 text-accent shrink-0" strokeWidth={1.5} />
            <p className="font-serif italic text-sm text-muted-foreground/70 whitespace-nowrap">
              The foundation, not a feature.
            </p>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border/30" />
        </motion.div>

      </div>
    </section>
  )
}
