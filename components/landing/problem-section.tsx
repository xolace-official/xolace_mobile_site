"use client"

import type { ReactNode } from "react"
import { motion } from "motion/react"
import { Moon, Smartphone } from "lucide-react"

type Moment = {
  Icon: typeof Moon
  time: string
  orbBg: string
  orbBorder: string
  orbGlow: string
  iconColor: string
  text: ReactNode
}

const moments: Moment[] = [
  {
    Icon: Moon,
    time: "Monday · 11:00 PM",
    orbBg: "bg-primary/[0.08]",
    orbBorder: "border-primary/20",
    orbGlow: "bg-primary/25",
    iconColor: "text-primary/80",
    text: (
      <>
        Chest tight.
        <br />
        Don&apos;t know why.
        <br />
        Not &lsquo;therapy bad&rsquo; -{" "}
        <span className="text-primary/70 font-extralight italic">just heavy.</span>
      </>
    ),
  },
  {
    Icon: Smartphone,
    time: "Friday · 10:30 PM",
    orbBg: "bg-accent/[0.07]",
    orbBorder: "border-accent/15",
    orbGlow: "bg-accent/20",
    iconColor: "text-accent/80",
    text: (
      <>
        Scrolling.
        <br />
        Not depressed -{" "}
        <span className="text-accent/70 font-extralight italic">just hollow.</span>
      </>
    ),
  },
]

export function ProblemSection() {
  return (
    <section className="section-spacing bg-xo-surface-lowest overflow-hidden relative">

      <div aria-hidden className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute w-[650px] h-[650px] rounded-full bg-primary/[0.06] blur-[150px] -top-40 -left-20 animate-gentle-pulse" />
        <div className="absolute w-[550px] h-[550px] rounded-full bg-accent/[0.05] blur-[130px] -bottom-20 -right-10 animate-gentle-pulse [animation-delay:2.5s]" />
      </div>

      <div className="section-container relative z-10">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground/30 mb-16"
        >
          You&apos;ve felt this.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-14 md:gap-16 mb-16">
          {moments.map((m, i) => (
            <motion.div
              key={m.time}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.0, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-row items-start gap-4 text-left sm:flex-col sm:gap-6"
            >
              <div className="relative shrink-0">
                <div className={`absolute inset-0 ${m.orbGlow} blur-3xl rounded-full scale-[3]`} />
                <div className={`relative size-14 sm:size-16 rounded-full ${m.orbBg} border ${m.orbBorder} flex items-center justify-center`}>
                  <m.Icon className={`size-6 sm:size-7 ${m.iconColor}`} strokeWidth={1.25} />
                </div>
              </div>

              <div className="pt-1 sm:pt-0">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/30 mb-4 sm:mb-5">
                  {m.time}
                </p>

                <p className="text-2xl md:text-[1.875rem] font-serif font-light text-foreground leading-[1.5]">
                  {m.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-14"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 h-px bg-gradient-to-r from-transparent to-border/20 origin-left"
          />
          <div className="size-1.5 rounded-full bg-primary/40 shrink-0" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 h-px bg-gradient-to-l from-transparent to-border/20 origin-right"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-xl md:text-2xl text-muted-foreground/50 font-serif italic font-light"
        >
          That space. That&apos;s where Xolace lives.
        </motion.p>

      </div>
    </section>
  )
}
