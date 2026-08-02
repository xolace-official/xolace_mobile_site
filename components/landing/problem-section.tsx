"use client"

import type { ReactNode } from "react"
import { m as motion } from "motion/react"
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
        <span className="font-extralight text-primary/70 italic">
          just heavy.
        </span>
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
        <span className="font-extralight text-accent/70 italic">
          just hollow.
        </span>
      </>
    ),
  },
]

export function ProblemSection() {
  return (
    <section className="section-spacing relative overflow-hidden bg-xo-surface-lowest">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 select-none"
      >
        <div className="animate-gentle-pulse absolute -top-40 -left-20 h-[650px] w-[650px] rounded-full bg-primary/[0.06] blur-[150px]" />
        <div className="animate-gentle-pulse absolute -right-10 -bottom-20 h-[550px] w-[550px] rounded-full bg-accent/[0.05] blur-[130px] [animation-delay:2.5s]" />
      </div>

      <div className="section-container relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center font-mono text-[11px] tracking-[0.24em] text-muted-foreground/30 uppercase"
        >
          You&apos;ve felt this.
        </motion.p>

        <div className="mb-16 grid gap-14 sm:grid-cols-2 md:gap-16">
          {moments.map((m, i) => (
            <motion.div
              key={m.time}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 1.0,
                delay: i * 0.14,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-row items-start gap-4 text-left sm:flex-col sm:gap-6"
            >
              <div className="relative shrink-0">
                <div
                  className={`absolute inset-0 ${m.orbGlow} scale-[3] rounded-full blur-3xl`}
                />
                <div
                  className={`relative size-14 rounded-full sm:size-16 ${m.orbBg} border ${m.orbBorder} flex items-center justify-center`}
                >
                  <m.Icon
                    className={`size-6 sm:size-7 ${m.iconColor}`}
                    strokeWidth={1.25}
                  />
                </div>
              </div>

              <div className="pt-1 sm:pt-0">
                <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-muted-foreground/30 uppercase sm:mb-5">
                  {m.time}
                </p>

                <p className="font-serif text-2xl leading-[1.5] font-light text-foreground md:text-[1.875rem]">
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
          className="mb-14 flex items-center gap-4"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="h-px flex-1 origin-left bg-gradient-to-r from-transparent to-border/20"
          />
          <div className="size-1.5 shrink-0 rounded-full bg-primary/40" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="h-px flex-1 origin-right bg-gradient-to-l from-transparent to-border/20"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center font-serif text-xl font-light text-muted-foreground/50 italic md:text-2xl"
        >
          That space. That&apos;s where Xolace lives.
        </motion.p>
      </div>
    </section>
  )
}
