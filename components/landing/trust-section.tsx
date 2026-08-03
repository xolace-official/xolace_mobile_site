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
    <section className="section-spacing relative overflow-hidden bg-muted">
      {/* single quiet atmospheric wash — replaces the busy concentric rings + multi-orb backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-gentle-pulse absolute -top-40 -right-20 h-[700px] w-[700px] rounded-full bg-primary/[0.04] blur-[140px]" />
        <div className="animate-gentle-pulse absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-accent/[0.03] blur-[120px] [animation-delay:3s]" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:sticky lg:top-32 lg:col-span-5"
          >
            <p className="mb-7 flex items-center gap-2.5 font-mono text-[11px] tracking-[0.24em] text-muted-foreground/60 uppercase">
              <span className="inline-block size-1 rounded-full bg-primary" />
              Built on trust
            </p>

            <h2 className="mb-7 font-serif text-5xl leading-[1.1] font-semibold text-foreground md:text-6xl lg:text-[4.25rem]">
              When you&apos;re
              <br /> at your most honest,
              <br /> you deserve to feel safe.
            </h2>

            <p className="mb-10 max-w-md text-base leading-relaxed font-light text-muted-foreground/80">
              We built Xolace for ourselves first. We know what it feels like to
              need a space that won&apos;t sell you out.
            </p>

            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-foreground/25" />
              <span className="font-serif text-sm text-muted-foreground/70 italic">
                The Xolace team
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-background/40 backdrop-blur-sm">
              {/* corner mark — gives the panel a "stamped" quality */}
              <div className="absolute top-5 right-6 flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] text-muted-foreground/40 uppercase">
                <ShieldCheck className="size-3" strokeWidth={1.5} />
                Sealed
              </div>

              <div className="px-7 pt-12 pb-2">
                <p className="mb-1 font-serif text-sm text-muted-foreground/70 italic">
                  Our promises to you
                </p>
              </div>

              <ul>
                {promises.map(({ Icon, label, text }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + i * 0.08,
                      ease: "easeOut",
                    }}
                    className="group relative grid grid-cols-[auto_auto_1fr] items-start gap-x-5 border-t border-border/40 px-7 py-6 transition-colors duration-500 hover:bg-foreground/[0.02]"
                  >
                    <span className="pt-1.5 font-mono text-[11px] tracking-[0.15em] text-muted-foreground/40 tabular-nums">
                      0{i + 1}
                    </span>

                    <div className="mt-0.5 flex size-9 items-center justify-center rounded-full border border-border/60 bg-background/60 transition-colors duration-500 group-hover:border-foreground/30">
                      <Icon
                        className="size-[15px] text-foreground/70"
                        strokeWidth={1.5}
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="mb-1 text-[15px] leading-snug font-medium text-foreground">
                        {label}
                      </p>
                      <p className="text-sm leading-relaxed font-light text-muted-foreground/80">
                        {text}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-center justify-between border-t border-border/40 px-7 py-5">
                <span className="font-serif text-xs text-muted-foreground/60 italic">
                  Signed, in good faith.
                </span>
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/40 uppercase">
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
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border/30" />
          <div className="flex shrink-0 items-center gap-2">
            <ShieldCheck
              className="size-4 shrink-0 text-accent"
              strokeWidth={1.5}
            />
            <p className="font-serif text-sm whitespace-nowrap text-muted-foreground/70 italic">
              The foundation, not a feature.
            </p>
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border/30" />
        </motion.div>
      </div>
    </section>
  )
}
