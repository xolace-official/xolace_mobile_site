"use client"

import { motion } from "motion/react"
import { Lock, EyeOff, UserX, Ban, ShieldCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Pillar = {
  Icon: LucideIcon
  label: string
  text: string
  orbBg: string
  orbBorder: string
  orbGlow: string
  iconColor: string
  cardBorder: string
  cardBg: string
  hoverBorder: string
}

const pillars: Pillar[] = [
  {
    Icon: Lock,
    label: "Encrypted end-to-end",
    text: "Your words are yours alone. No one at Xolace reads them — not even us.",
    orbBg: "bg-primary/[0.12]",
    orbBorder: "border-primary/20",
    orbGlow: "bg-primary/20",
    iconColor: "text-primary/80",
    cardBorder: "border-primary/15",
    cardBg: "bg-primary/[0.05]",
    hoverBorder: "hover:border-primary/35",
  },
  {
    Icon: EyeOff,
    label: "Fully anonymous",
    text: "Your name is never attached to what you write. You are not a profile.",
    orbBg: "bg-accent/[0.10]",
    orbBorder: "border-accent/15",
    orbGlow: "bg-accent/15",
    iconColor: "text-accent/80",
    cardBorder: "border-accent/15",
    cardBg: "bg-accent/[0.04]",
    hoverBorder: "hover:border-accent/35",
  },
  {
    Icon: UserX,
    label: "No sign-up required",
    text: "Mirror and Vent work the moment you open the app. No barriers, no friction.",
    orbBg: "bg-chart-2/[0.10]",
    orbBorder: "border-chart-2/15",
    orbGlow: "bg-chart-2/15",
    iconColor: "text-chart-2/80",
    cardBorder: "border-chart-2/15",
    cardBg: "bg-chart-2/[0.04]",
    hoverBorder: "hover:border-chart-2/35",
  },
  {
    Icon: Ban,
    label: "No ads. No selling.",
    text: "We don't run ads. We don't sell your data. The trust is the product.",
    orbBg: "bg-chart-3/[0.10]",
    orbBorder: "border-chart-3/15",
    orbGlow: "bg-chart-3/15",
    iconColor: "text-chart-3/80",
    cardBorder: "border-chart-3/15",
    cardBg: "bg-chart-3/[0.04]",
    hoverBorder: "hover:border-chart-3/35",
  },
]

function TrustSealOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
      <div className="relative flex items-center justify-center w-[720px] h-[720px] lg:w-[900px] lg:h-[900px]">

        {/* Glow atmosphere */}
        <div className="absolute inset-0 rounded-full bg-primary/[0.07] blur-[100px] scale-[1.1]" />

        {/* Outer rotating dashed ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-dashed border-foreground/[0.14]"
        />

        {/* Second ring */}
        <div className="absolute inset-16 lg:inset-20 rounded-full border border-foreground/[0.09]" />

        {/* Third ring */}
        <div className="absolute inset-32 lg:inset-40 rounded-full border border-foreground/[0.07]" />

        {/* Innermost ring */}
        <div className="absolute inset-48 lg:inset-60 rounded-full border border-foreground/[0.05]" />

        {/* Center shield */}
        <ShieldCheck
          className="relative z-10 text-foreground/[0.10]"
          style={{ width: "6rem", height: "6rem" }}
          strokeWidth={0.7}
        />
      </div>
    </div>
  )
}

export function TrustSection() {
  return (
    <section className="section-spacing bg-muted overflow-hidden relative">

      <div aria-hidden className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute w-[650px] h-[650px] rounded-full bg-primary/[0.05] blur-[150px] -top-40 -left-20 animate-gentle-pulse" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[130px] -bottom-20 -right-10 animate-gentle-pulse [animation-delay:2.5s]" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-chart-2/[0.04] blur-[120px] bottom-1/3 left-1/2 -translate-x-1/2 animate-gentle-pulse [animation-delay:5s]" />
      </div>

      <TrustSealOverlay />

      <div className="section-container relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 space-y-5"
        >
          <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground/30">
            Built on trust
          </p>
          <h2 className="font-serif italic font-light text-foreground text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] max-w-2xl">
            When you&apos;re at your most honest,<br className="hidden md:block" /> you deserve to feel safe.
          </h2>
          <p className="text-base text-muted-foreground/50 font-light leading-relaxed max-w-md">
            We built Xolace for ourselves first. We know what it feels like to need a space that won&apos;t sell you out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map(({ Icon, label, text, orbBg, orbBorder, orbGlow, iconColor, cardBorder, cardBg, hoverBorder }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-2xl border p-7 transition-all duration-500 ${cardBorder} ${cardBg} ${hoverBorder}`}
              >
                <div className="relative mb-7">
                  <div className={`absolute inset-0 ${orbGlow} blur-2xl rounded-full scale-[3]`} />
                  <div className={`relative size-12 rounded-full ${orbBg} border ${orbBorder} flex items-center justify-center`}>
                    <Icon className={`size-5 ${iconColor}`} strokeWidth={1.5} />
                  </div>
                </div>

                <p className="text-sm font-medium text-foreground/85 mb-2 leading-snug">{label}</p>
                <p className="text-sm text-muted-foreground/50 font-light leading-relaxed">{text}</p>
              </motion.div>
            ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex items-center gap-5"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border/15" />
          <div className="flex items-center gap-2 shrink-0">
            <ShieldCheck className="size-4 text-emerald-500 shrink-0" strokeWidth={1.5} />
            <p className="font-serif italic text-sm text-muted-foreground/40 whitespace-nowrap">
              The trust is not a feature. It&apos;s the foundation.
            </p>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border/15" />
        </motion.div>

      </div>
    </section>
  )
}
