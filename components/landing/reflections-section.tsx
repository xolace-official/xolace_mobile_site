"use client"

import { useState, useEffect } from "react"
import { m as motion } from "motion/react"
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
  {
    border: "border-rose-400/50",
    bg: "bg-rose-400/[0.14]",
    dot: "bg-rose-400/60",
    rule: "bg-rose-400/25",
    hover: "hover:border-rose-400/65 hover:bg-rose-400/[0.20]",
  },
  {
    border: "border-pink-400/50",
    bg: "bg-pink-400/[0.14]",
    dot: "bg-pink-400/60",
    rule: "bg-pink-400/25",
    hover: "hover:border-pink-400/65 hover:bg-pink-400/[0.20]",
  },
  {
    border: "border-fuchsia-400/50",
    bg: "bg-fuchsia-400/[0.14]",
    dot: "bg-fuchsia-400/60",
    rule: "bg-fuchsia-400/25",
    hover: "hover:border-fuchsia-400/65 hover:bg-fuchsia-400/[0.20]",
  },
  {
    border: "border-purple-400/50",
    bg: "bg-purple-400/[0.14]",
    dot: "bg-purple-400/60",
    rule: "bg-purple-400/25",
    hover: "hover:border-purple-400/65 hover:bg-purple-400/[0.20]",
  },
  {
    border: "border-violet-400/50",
    bg: "bg-violet-400/[0.14]",
    dot: "bg-violet-400/60",
    rule: "bg-violet-400/25",
    hover: "hover:border-violet-400/65 hover:bg-violet-400/[0.20]",
  },
  {
    border: "border-indigo-400/50",
    bg: "bg-indigo-400/[0.14]",
    dot: "bg-indigo-400/60",
    rule: "bg-indigo-400/25",
    hover: "hover:border-indigo-400/65 hover:bg-indigo-400/[0.20]",
  },
  {
    border: "border-blue-400/50",
    bg: "bg-blue-400/[0.14]",
    dot: "bg-blue-400/60",
    rule: "bg-blue-400/25",
    hover: "hover:border-blue-400/65 hover:bg-blue-400/[0.20]",
  },
  {
    border: "border-sky-400/50",
    bg: "bg-sky-400/[0.14]",
    dot: "bg-sky-400/60",
    rule: "bg-sky-400/25",
    hover: "hover:border-sky-400/65 hover:bg-sky-400/[0.20]",
  },
  {
    border: "border-cyan-400/50",
    bg: "bg-cyan-400/[0.14]",
    dot: "bg-cyan-400/60",
    rule: "bg-cyan-400/25",
    hover: "hover:border-cyan-400/65 hover:bg-cyan-400/[0.20]",
  },
  {
    border: "border-teal-400/50",
    bg: "bg-teal-400/[0.14]",
    dot: "bg-teal-400/60",
    rule: "bg-teal-400/25",
    hover: "hover:border-teal-400/65 hover:bg-teal-400/[0.20]",
  },
  {
    border: "border-emerald-400/50",
    bg: "bg-emerald-400/[0.14]",
    dot: "bg-emerald-400/60",
    rule: "bg-emerald-400/25",
    hover: "hover:border-emerald-400/65 hover:bg-emerald-400/[0.20]",
  },
  {
    border: "border-green-400/50",
    bg: "bg-green-400/[0.14]",
    dot: "bg-green-400/60",
    rule: "bg-green-400/25",
    hover: "hover:border-green-400/65 hover:bg-green-400/[0.20]",
  },
  {
    border: "border-lime-500/50",
    bg: "bg-lime-500/[0.14]",
    dot: "bg-lime-500/60",
    rule: "bg-lime-500/25",
    hover: "hover:border-lime-500/65 hover:bg-lime-500/[0.20]",
  },
  {
    border: "border-yellow-400/50",
    bg: "bg-yellow-400/[0.14]",
    dot: "bg-yellow-400/60",
    rule: "bg-yellow-400/25",
    hover: "hover:border-yellow-400/65 hover:bg-yellow-400/[0.20]",
  },
  {
    border: "border-amber-400/50",
    bg: "bg-amber-400/[0.14]",
    dot: "bg-amber-400/60",
    rule: "bg-amber-400/25",
    hover: "hover:border-amber-400/65 hover:bg-amber-400/[0.20]",
  },
  {
    border: "border-orange-400/50",
    bg: "bg-orange-400/[0.14]",
    dot: "bg-orange-400/60",
    rule: "bg-orange-400/25",
    hover: "hover:border-orange-400/65 hover:bg-orange-400/[0.20]",
  },
  {
    border: "border-red-400/50",
    bg: "bg-red-400/[0.14]",
    dot: "bg-red-400/60",
    rule: "bg-red-400/25",
    hover: "hover:border-red-400/65 hover:bg-red-400/[0.20]",
  },
  {
    border: "border-rose-300/50",
    bg: "bg-rose-300/[0.14]",
    dot: "bg-rose-300/60",
    rule: "bg-rose-300/25",
    hover: "hover:border-rose-300/65 hover:bg-rose-300/[0.20]",
  },
  {
    border: "border-purple-300/50",
    bg: "bg-purple-300/[0.14]",
    dot: "bg-purple-300/60",
    rule: "bg-purple-300/25",
    hover: "hover:border-purple-300/65 hover:bg-purple-300/[0.20]",
  },
  {
    border: "border-slate-400/50",
    bg: "bg-slate-400/[0.14]",
    dot: "bg-slate-400/60",
    rule: "bg-slate-400/25",
    hover: "hover:border-slate-400/65 hover:bg-slate-400/[0.20]",
  },
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
  {
    quote:
      "I'm happy for my best friend, I really am, but there's this pin poking feeling that I'm falling behind, and I can't shake it even though I tell myself I have no right to feel this way.",
    time: "11:38 PM",
  },
  {
    quote:
      "it really hurts when someone you trust disappoints you, like I had high hopes and now I don't know what they're doing, and I end up wondering if maybe my expectations were just too high.",
    time: "10:29 PM",
  },
  {
    quote:
      "I've poured everything into this dream, and it's the only thing that matters—either this succeeds or nothing else. But doing it all myself while my co-founders are here fills me with so much anger sometimes.",
    time: "8:44 PM",
  },
  {
    quote:
      "something feels off today. a remark from my supervisor hit different, made the whole day go blank, and now i'm sitting with the fact that i know i can do more and i got myself into this.",
    time: "5:51 PM",
  },
  {
    quote:
      "I'm supposed to be the example. My younger siblings look up to me, so how can I tell them I'm lost? I have to stay strong even when I feel like breaking.",
    time: "1:22 AM",
  },
  {
    quote:
      "I keep thinking I'll wake up and this nightmare will be over. But every morning I open my eyes and it's the same world without you.",
    time: "6:03 AM",
  },
  {
    quote:
      "My chest aches when I walk past the empty playground where we used to be. I wish I had the courage to tell you how much I miss you, but I'm too afraid of the silence that would follow.",
    time: "3:47 PM",
  },
  {
    quote:
      "I told myself I'd deal with it tomorrow and tomorrow has been going on for about three months now.",
    time: "9:04 PM",
  },
  {
    quote:
      "People who have no idea what's actually going on behind the scenes love to tell me what I should be doing, and it's so annoying.",
    time: "2:33 PM",
  },
  {
    quote:
      "Been sick and it's like I can't carry what I'm supposed to be carrying, and that hit home—knowing everything falls apart if I can't get back to it.",
    time: "7:15 AM",
  },
]

function ReflectionCard({
  quote,
  time,
  color,
}: {
  quote: string
  time: string
  color: ColorConfig
}) {
  return (
    <figure
      className={cn(
        "relative w-72 cursor-default overflow-hidden rounded-2xl p-8 shadow-sm md:w-80",
        "border-l-2 ring-1 ring-xo-outline-variant/[0.08]",
        "transition-all duration-500",
        color.border,
        color.bg,
        color.hover
      )}
    >
      <blockquote className="font-serif text-[0.9rem] leading-[1.85] text-foreground/80 italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center gap-2.5">
        <div className={`h-px flex-1 ${color.rule}`} />
        <div className={`size-1.5 shrink-0 rounded-full ${color.dot}`} />
        <p className="text-[10px] tracking-[0.15em] whitespace-nowrap text-muted-foreground/45 uppercase">
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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 select-none"
      >
        <div className="dot-grid absolute inset-0 opacity-25" />
        <div className="animate-gentle-pulse absolute top-1/2 -left-40 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-primary/[0.08] blur-[160px]" />
        <div className="animate-gentle-pulse absolute top-1/2 -right-20 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[150px] [animation-delay:2.5s]" />
        <div className="animate-gentle-pulse absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-chart-2/[0.06] blur-[130px] [animation-delay:5s]" />
      </div>

      <div className="relative z-10 space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-container space-y-4 text-center"
        >
          <p className="font-mono text-[11px] tracking-[0.24em] text-muted-foreground/30 uppercase">
            Anonymous · Collective
          </p>
          <h2 className="font-serif text-5xl leading-[1.1] font-semibold text-foreground md:text-6xl lg:text-[4.25rem]">
            You&apos;re not the only one
            <br className="hidden md:block" /> carrying this.
          </h2>
          <p className="mx-auto max-w-sm text-base leading-relaxed font-light text-muted-foreground/50">
            From real Xolace sessions. Shared anonymously, with permission.
          </p>
        </motion.div>

        <div className="relative">
          <Marquee pauseOnHover className="[--duration:60s] [--gap:1.25rem]">
            {firstRow.map((r, i) => (
              <ReflectionCard key={i} {...r} color={getColor(i)} />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            className="mt-4 [--duration:52s] [--gap:1.25rem]"
          >
            {secondRow.map((r, i) => (
              <ReflectionCard
                key={i}
                {...r}
                color={getColor(i + firstRow.length)}
              />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-background" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-container flex flex-col items-center gap-5"
        >
          <div className="flex w-full max-w-xs items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border/20" />
            <div className="size-1.5 shrink-0 rounded-full bg-primary/30" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border/20" />
          </div>
          <p className="text-center font-serif text-sm text-muted-foreground/30 italic">
            Every feeling here has already been felt by someone, somewhere, at
            2am.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
