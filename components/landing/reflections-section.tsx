"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

type ColorConfig = {
  border: string
  bg: string
  dot: string
  rule: string
  hover: string
}

// 20 fully-spelled-out color configs — Tailwind requires no dynamic class construction
const colorPool: ColorConfig[] = [
  { border: "border-rose-400/50",     bg: "bg-rose-400/[0.14]",     dot: "bg-rose-400/60",     rule: "bg-rose-400/25",     hover: "hover:border-rose-400/65 hover:bg-rose-400/[0.20]" },
  { border: "border-pink-400/50",     bg: "bg-pink-400/[0.14]",     dot: "bg-pink-400/60",     rule: "bg-pink-400/25",     hover: "hover:border-pink-400/65 hover:bg-pink-400/[0.20]" },
  { border: "border-fuchsia-400/50",  bg: "bg-fuchsia-400/[0.14]",  dot: "bg-fuchsia-400/60",  rule: "bg-fuchsia-400/25",  hover: "hover:border-fuchsia-400/65 hover:bg-fuchsia-400/[0.20]" },
  { border: "border-purple-400/50",   bg: "bg-purple-400/[0.14]",   dot: "bg-purple-400/60",   rule: "bg-purple-400/25",   hover: "hover:border-purple-400/65 hover:bg-purple-400/[0.20]" },
  { border: "border-violet-400/50",   bg: "bg-violet-400/[0.14]",   dot: "bg-violet-400/60",   rule: "bg-violet-400/25",   hover: "hover:border-violet-400/65 hover:bg-violet-400/[0.20]" },
  { border: "border-indigo-400/50",   bg: "bg-indigo-400/[0.14]",   dot: "bg-indigo-400/60",   rule: "bg-indigo-400/25",   hover: "hover:border-indigo-400/65 hover:bg-indigo-400/[0.20]" },
  { border: "border-blue-400/50",     bg: "bg-blue-400/[0.14]",     dot: "bg-blue-400/60",     rule: "bg-blue-400/25",     hover: "hover:border-blue-400/65 hover:bg-blue-400/[0.20]" },
  { border: "border-sky-400/50",      bg: "bg-sky-400/[0.14]",      dot: "bg-sky-400/60",      rule: "bg-sky-400/25",      hover: "hover:border-sky-400/65 hover:bg-sky-400/[0.20]" },
  { border: "border-cyan-400/50",     bg: "bg-cyan-400/[0.14]",     dot: "bg-cyan-400/60",     rule: "bg-cyan-400/25",     hover: "hover:border-cyan-400/65 hover:bg-cyan-400/[0.20]" },
  { border: "border-teal-400/50",     bg: "bg-teal-400/[0.14]",     dot: "bg-teal-400/60",     rule: "bg-teal-400/25",     hover: "hover:border-teal-400/65 hover:bg-teal-400/[0.20]" },
  { border: "border-emerald-400/50",  bg: "bg-emerald-400/[0.14]",  dot: "bg-emerald-400/60",  rule: "bg-emerald-400/25",  hover: "hover:border-emerald-400/65 hover:bg-emerald-400/[0.20]" },
  { border: "border-green-400/50",    bg: "bg-green-400/[0.14]",    dot: "bg-green-400/60",    rule: "bg-green-400/25",    hover: "hover:border-green-400/65 hover:bg-green-400/[0.20]" },
  { border: "border-lime-500/50",     bg: "bg-lime-500/[0.14]",     dot: "bg-lime-500/60",     rule: "bg-lime-500/25",     hover: "hover:border-lime-500/65 hover:bg-lime-500/[0.20]" },
  { border: "border-yellow-400/50",   bg: "bg-yellow-400/[0.14]",   dot: "bg-yellow-400/60",   rule: "bg-yellow-400/25",   hover: "hover:border-yellow-400/65 hover:bg-yellow-400/[0.20]" },
  { border: "border-amber-400/50",    bg: "bg-amber-400/[0.14]",    dot: "bg-amber-400/60",    rule: "bg-amber-400/25",    hover: "hover:border-amber-400/65 hover:bg-amber-400/[0.20]" },
  { border: "border-orange-400/50",   bg: "bg-orange-400/[0.14]",   dot: "bg-orange-400/60",   rule: "bg-orange-400/25",   hover: "hover:border-orange-400/65 hover:bg-orange-400/[0.20]" },
  { border: "border-red-400/50",      bg: "bg-red-400/[0.14]",      dot: "bg-red-400/60",      rule: "bg-red-400/25",      hover: "hover:border-red-400/65 hover:bg-red-400/[0.20]" },
  { border: "border-rose-300/50",     bg: "bg-rose-300/[0.14]",     dot: "bg-rose-300/60",     rule: "bg-rose-300/25",     hover: "hover:border-rose-300/65 hover:bg-rose-300/[0.20]" },
  { border: "border-purple-300/50",   bg: "bg-purple-300/[0.14]",   dot: "bg-purple-300/60",   rule: "bg-purple-300/25",   hover: "hover:border-purple-300/65 hover:bg-purple-300/[0.20]" },
  { border: "border-slate-400/50",    bg: "bg-slate-400/[0.14]",    dot: "bg-slate-400/60",    rule: "bg-slate-400/25",    hover: "hover:border-slate-400/65 hover:bg-slate-400/[0.20]" },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const reflections = [
  { quote: "Thinking about how much of my life I spend waiting for the 'real' part to start.", time: "11:24 PM" },
  { quote: "Today felt like a performance I wasn't prepared for.", time: "4:12 PM" },
  { quote: "The silence in my apartment used to feel lonely. Tonight, it just feels like space.", time: "2:05 AM" },
  { quote: "I don't even know what I'm sad about. That's the worst part.", time: "6:41 PM" },
  { quote: "Nobody asks how I'm doing anymore. I think they assume I'm fine.", time: "1:17 AM" },
  { quote: "Deleted the whole message before sending. Some things are safer left unsaid.", time: "9:33 PM" },
  { quote: "I keep replaying that conversation. The version in my head always goes differently.", time: "3:48 AM" },
  { quote: "Felt something today for the first time in weeks. I don't even know what it was.", time: "7:22 PM" },
  { quote: "Everyone's moving forward and I'm just… here.", time: "12:09 AM" },
  { quote: "The hardest part isn't being sad. It's pretending you're not.", time: "10:55 PM" },
  { quote: "Woke up at 3am and couldn't explain why to anyone, including myself.", time: "3:02 AM" },
  { quote: "I've been okay for weeks. Sometimes that scares me more.", time: "8:14 PM" },
  { quote: "Told someone I was tired. Meant something completely different.", time: "6:05 PM" },
  { quote: "Some days the hardest thing is just starting.", time: "9:00 AM" },
]

function ReflectionCard({ quote, time, color }: { quote: string; time: string; color: ColorConfig }) {
  return (
    <figure
      className={cn(
        "relative w-72 md:w-80 cursor-default overflow-hidden rounded-2xl py-9 px-7",
        "border-l-2 ring-1 ring-xo-outline-variant/[0.08]",
        "transition-all duration-500",
        color.border, color.bg, color.hover
      )}
    >
      <blockquote className="text-foreground/80 font-serif italic text-[0.9rem] leading-[1.85]">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center gap-2.5">
        <div className={`h-px flex-1 ${color.rule}`} />
        <div className={`size-1.5 rounded-full shrink-0 ${color.dot}`} />
        <p className="text-[10px] text-muted-foreground/45 tracking-[0.15em] uppercase whitespace-nowrap">
          {time}
        </p>
      </div>
    </figure>
  )
}

export function ReflectionsSection() {
  // Start with sequential assignment (SSR-safe), shuffle after mount
  const [colors, setColors] = useState<ColorConfig[]>(colorPool)

  useEffect(() => {
    setColors(shuffle(colorPool))
  }, [])

  const getColor = (i: number) => colors[i % colors.length]

  const firstRow = reflections.slice(0, Math.ceil(reflections.length / 2))
  const secondRow = reflections.slice(Math.ceil(reflections.length / 2))

  return (
    <section className="section-spacing relative overflow-hidden">

      <div aria-hidden className="absolute inset-0 pointer-events-none select-none">
        <div className="dot-grid absolute inset-0 opacity-25" />
        <div className="absolute w-[700px] h-[700px] rounded-full bg-primary/[0.08] blur-[160px] top-1/2 -translate-y-1/2 -left-40 animate-gentle-pulse" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-accent/[0.07] blur-[150px] top-1/2 -translate-y-1/2 -right-20 animate-gentle-pulse [animation-delay:2.5s]" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-chart-2/[0.06] blur-[130px] bottom-0 left-1/3 animate-gentle-pulse [animation-delay:5s]" />
      </div>

      <div className="relative z-10 space-y-14">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-4 section-container"
        >
          <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground/30">
            Anonymous · Collective
          </p>
          <h2 className="font-serif italic font-light text-foreground text-4xl md:text-5xl leading-[1.1]">
            You&apos;re not the only one<br className="hidden md:block" /> carrying this.
          </h2>
          <p className="text-muted-foreground/50 font-light text-base max-w-sm mx-auto leading-relaxed">
            Real moments, shared anonymously. No names. No context. Just truth.
          </p>
        </motion.div>

        <div className="relative">
          <Marquee pauseOnHover className="[--duration:60s] [--gap:1.25rem]">
            {firstRow.map((r, i) => (
              <ReflectionCard key={i} {...r} color={getColor(i)} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:52s] [--gap:1.25rem] mt-4">
            {secondRow.map((r, i) => (
              <ReflectionCard key={i} {...r} color={getColor(i + firstRow.length)} />
            ))}
          </Marquee>

          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="section-container flex flex-col items-center gap-5"
        >
          <div className="flex items-center gap-4 w-full max-w-xs">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border/20" />
            <div className="size-1.5 rounded-full bg-primary/30 shrink-0" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border/20" />
          </div>
          <p className="font-serif italic text-muted-foreground/30 text-sm text-center">
            Every feeling here has already been felt by someone, somewhere, at 2am.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
