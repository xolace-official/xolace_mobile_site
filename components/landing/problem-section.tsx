"use client"

import type { ReactNode } from "react"
import { m as motion } from "motion/react"
import { Moon, Smartphone } from "lucide-react"
import { Iphone } from "@/components/ui/iphone"

type Moment = {
  Icon: typeof Moon
  time: string
  orbBg: string
  orbBorder: string
  iconColor: string
  blob: string
  text: ReactNode
}

const moments: Moment[] = [
  {
    Icon: Moon,
    time: "Monday · 11:00 PM",
    orbBg: "bg-gradient-to-br from-primary/35 to-primary/10",
    orbBorder: "border-primary/25",
    iconColor: "text-primary",
    blob: "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
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
    orbBg: "bg-gradient-to-br from-accent/35 to-accent/10",
    orbBorder: "border-accent/25",
    iconColor: "text-accent",
    blob: "rounded-[30%_70%_60%_40%/40%_60%_30%_70%]",
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

// Small pill tag with a pointer tail, mirroring the "You" / "Care team" callouts
function BlobTag({ label, className }: { label: string; className: string }) {
  return (
    <div
      className={`absolute z-20 flex items-center gap-1.5 rounded-full border border-xo-outline-variant/20 bg-xo-surface-low px-3 py-1.5 shadow-sm ${className}`}
    >
      <span className="text-xs font-semibold text-foreground">{label}</span>
      <span className="absolute -bottom-1 left-4 size-2 rotate-45 border-r border-b border-xo-outline-variant/20 bg-xo-surface-low" />
    </div>
  )
}

// Layered visual — two tilted colour blobs behind an overlapping phone mockup
function MomentComposition() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto h-[480px] w-full max-w-lg md:h-[560px]"
    >
      {/* Monday blob — top-left */}
      <div
        className={`absolute top-2 left-0 flex size-52 -rotate-6 items-center justify-center border md:size-64 ${moments[0].orbBg} ${moments[0].orbBorder} ${moments[0].blob}`}
      >
        <Moon
          className={`size-14 ${moments[0].iconColor}`}
          strokeWidth={1.25}
        />
      </div>
      <BlobTag label="Monday" className="top-0 left-4" />

      {/* Friday blob — bottom-right */}
      <div
        className={`absolute right-0 bottom-4 flex size-48 rotate-6 items-center justify-center border md:size-60 ${moments[1].orbBg} ${moments[1].orbBorder} ${moments[1].blob}`}
      >
        <Smartphone
          className={`size-13 ${moments[1].iconColor}`}
          strokeWidth={1.25}
        />
      </div>
      <BlobTag label="Friday" className="right-4 bottom-2" />

      {/* Phone mockup — overlaps both blobs */}
      <div className="absolute top-1/2 left-1/2 z-10 w-[220px] -translate-x-1/2 -translate-y-1/2 -rotate-3 md:w-[260px]">
        <Iphone src="/app-images/reflection-ui.jpeg" />
      </div>
    </motion.div>
  )
}

export function ProblemSection() {
  return (
    <section className="section-spacing relative overflow-hidden bg-xo-surface-lowest">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 select-none"
      >
        <div className="animate-gentle-pulse absolute -top-40 -left-20 h-[650px] w-[650px] rounded-full bg-primary/[0.06] blur-[150px]" />
        <div className="animate-gentle-pulse absolute -right-10 -bottom-20 h-[550px] w-[550px] rounded-full bg-accent/[0.05] blur-[130px] [animation-delay:2.5s]" />

        {/* Signature flourish — smooth meandering curve, bottom-left to top-right */}
        <svg
          viewBox="0 0 300 300"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          className="absolute top-1/2 left-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
        >
          <path
            d="M20 280 C74 282 109 247 107 193 C105 139 139 105 193 107 C247 109 282 74 280 20"
            stroke="url(#problem-signature-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="problem-signature-gradient"
              x1="0"
              y1="300"
              x2="300"
              y2="0"
            >
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="var(--accent)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="font-serif text-5xl leading-[1.1] font-semibold text-foreground md:text-6xl lg:text-[4.25rem]">
            You&apos;ve{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              felt this.
            </span>
          </h2>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <MomentComposition />

          <div className="space-y-14">
            {moments.map((m, i) => (
              <motion.div
                key={m.time}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.14,
                  ease: "easeOut",
                }}
              >
                <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-foreground/30 uppercase">
                  {m.time}
                </p>
                <p className="font-serif text-3xl leading-[1.4] font-light text-foreground md:text-[2.25rem]">
                  {m.text}
                </p>
              </motion.div>
            ))}
          </div>
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center font-serif text-xl font-light text-muted-foreground/50 italic md:text-2xl"
        >
          That space. That&apos;s where Xolace lives.
        </motion.p>
      </div>
    </section>
  )
}
