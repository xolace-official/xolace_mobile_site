"use client"

import type { ReactNode } from "react"
import { motion } from "motion/react"
import { Wind, Smartphone, type LucideIcon } from "lucide-react"

type Vignette = {
  Icon: LucideIcon
  time: string
  lineClass: string
  glowClass: string
  align: "left" | "right"
  body: ReactNode
}

const vignettes: Vignette[] = [
  {
    Icon: Wind,
    time: "Monday · 11:00 PM",
    lineClass: "bg-primary/40",
    glowClass: "bg-primary/[0.08]",
    align: "left",
    body: (
      <>
        Chest tight.
        <br />
        Don&apos;t know why.
        <br />
        Not &lsquo;therapy bad&rsquo; -{" "}
        <em className="text-primary/50 not-italic font-extralight">just heavy.</em>
      </>
    ),
  },
  {
    Icon: Smartphone,
    time: "Friday · 10:30 PM",
    lineClass: "bg-accent/40",
    glowClass: "bg-accent/[0.07]",
    align: "right",
    body: (
      <>
        Scrolling.
        <br />
        Not depressed -{" "}
        <em className="text-primary/50 not-italic font-extralight">just hollow.</em>
      </>
    ),
  },
]

export function ProblemSection() {
  return (
    <section className="section-spacing bg-xo-surface-lowest overflow-hidden relative">

      {/* Atmospheric background — two offset blooms that breathe */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute w-[650px] h-[650px] rounded-full bg-primary/[0.06] blur-[130px] -top-40 -left-40 animate-gentle-pulse" />
        <div className="absolute w-[550px] h-[550px] rounded-full bg-accent/[0.05] blur-[110px] -bottom-20 -right-20 animate-gentle-pulse [animation-delay:2.5s]" />
      </div>

      <div className="section-container relative z-10">

        {/* Vignettes */}
        <div className="space-y-24">
          {vignettes.map((v, i) => (
            <motion.div
              key={v.time}
              initial={{ opacity: 0, x: v.align === "left" ? -28 : 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`relative max-w-2xl${v.align === "right" ? " md:ml-auto text-left md:text-right" : ""}`}
            >
              {/* Per-vignette ambient glow */}
              <div
                aria-hidden
                className={`absolute -inset-10 rounded-3xl ${v.glowClass} blur-3xl opacity-70 pointer-events-none`}
              />

              {/* Time label row */}
              <div className={`relative flex items-center gap-3 mb-8${v.align === "right" ? " md:justify-end" : ""}`}>
                <div className={`h-px w-8 shrink-0 ${v.lineClass}${v.align === "right" ? " md:order-last" : ""}`} />
                <p className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/35">
                  <v.Icon className="size-3 shrink-0" strokeWidth={1.5} />
                  {v.time}
                </p>
              </div>

              {/* Vignette copy */}
              <p className="relative text-3xl md:text-[2.75rem] text-foreground font-light leading-[1.3] tracking-tight">
                {v.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider — animated rule with centre dot */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 my-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 h-px bg-gradient-to-r from-transparent to-border/20 origin-left"
          />
          <div className="size-1 rounded-full bg-primary/50 shrink-0" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 h-px bg-gradient-to-l from-transparent to-border/20 origin-right"
          />
        </motion.div>

        {/* Bridge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-muted-foreground/55 font-serif italic font-light leading-relaxed">
            That space. That&apos;s where Xolace lives.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
