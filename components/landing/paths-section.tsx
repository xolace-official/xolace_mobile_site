"use client"

import { motion } from "motion/react"
import { Sparkles, ShieldCheck, Users } from "lucide-react"
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
    headline: "Words for what you couldn't say.",
    body: "You arrive with a feeling that has no shape. Tap a word, type a fragment, or just speak. The Mirror gives it back to you, named.",
  },
  {
    number: "02",
    Icon: Users,
    tag: "Echo",
    headline: "Someone else carried this too.",
    body: "After your session, an anonymous moment surfaces — shared by someone who felt the same shape. Not advice. Just: you're not alone in it tonight.",
  },
  {
    number: "03",
    Icon: ShieldCheck,
    tag: "Safety",
    headline: "Held, even when it's heavier.",
    body: "If what you write suggests real danger, the Mirror responds differently — gently, with real help nearby. A safe place doesn't leave you alone.",
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
      <div className="space-y-3">
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
    <section id="paths" className="section-spacing">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 space-y-3"
        >
          <h2 className="text-4xl leading-tight font-light text-foreground md:text-5xl">
            Three quiet things.
          </h2>
          <p className="text-lg leading-relaxed font-light text-muted-foreground/70">
           {` You don't have to know what you're feeling to begin.`}
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
          className="border-t border-border/15 pt-8"
        >
          <p className="font-serif text-base leading-relaxed text-muted-foreground/40 italic">
            Not therapy. Not a chatbot. Not a social platform.
            <br className="hidden md:block" />
            The space before, between, and outside all of those.
          </p>
        </motion.div>
      </div>
    </section>
  )
}