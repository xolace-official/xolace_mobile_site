"use client"

import { motion } from "motion/react"
import { Sparkles, Mic2, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type PathItem = {
  number: string
  Icon: LucideIcon
  tag: string
  headline: string
  body: string
}

const paths: PathItem[] = [
  {
    number: "01",
    Icon: Sparkles,
    tag: "Mirror",
    headline: "Name what you're carrying.",
    body: "You express — through words, texture words, or body sensation. The AI mirrors it back with more precision than you found yourself. One moment: \"Yes. That's exactly what I'm feeling.\" Then you choose what comes next.",
  },
  {
    number: "02",
    Icon: Mic2,
    tag: "Vent",
    headline: "Release it and have it gone.",
    body: "You speak. An affirming presence listens — no advice, no diagnosis, no reflection back. When you stop, a beat of silence. Then: \"Gone.\" Nothing stored. No transcript. Just release.",
  },
  {
    number: "03",
    Icon: Users,
    tag: "Glimpses",
    headline: "Find others who came through.",
    body: "After your session, a 60-second video surfaces: a real person who felt something close to what you just processed. Not advice. Not a testimonial. Just: \"I felt this. I'm still here.\"",
  },
]

type PathRowProps = PathItem & { index: number }

function PathRow({ number, Icon, tag, headline, body, index }: PathRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-6 md:gap-16 py-12 border-t border-border/15 first:border-t-0"
    >
      {/* Ghost number — visual weight without taking focus */}
      <div className="hidden md:flex items-start pt-1">
        <span className="text-[4.5rem] font-light leading-none text-foreground/[0.05] select-none tabular-nums">
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <Icon className="size-4 text-primary/50" strokeWidth={1.5} />
          <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground/50">
            {tag}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl text-foreground font-light leading-snug">
          {headline}
        </h3>

        <p className="text-base text-muted-foreground/70 leading-relaxed max-w-xl font-light">
          {body}
        </p>
      </div>
    </motion.div>
  )
}

export function PathsSection() {
  return (
    <section id="paths" className="py-32 px-8">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 space-y-3"
        >
          <h2 className="text-4xl md:text-5xl text-foreground font-light leading-tight">
            However you need to process.
          </h2>
          <p className="text-lg text-muted-foreground/70 font-light leading-relaxed">
            Three paths. Each complete in itself. No session leaves you unresolved.
          </p>
        </motion.div>

        <div>
          {paths.map((path, i) => (
            <PathRow key={path.tag} {...path} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="pt-12 border-t border-border/15"
        >
          <p className="text-base text-muted-foreground/40 font-serif italic leading-relaxed">
            Not therapy. Not a chatbot. Not a social platform.
            <br className="hidden md:block" />
            The space before, between, and outside all of those.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
