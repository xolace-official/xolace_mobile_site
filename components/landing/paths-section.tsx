"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Sparkles, ShieldCheck, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Path = {
  number: string
  Icon: LucideIcon
  tag: string
  headline: string
  body: string
  image: string
  alt: string
  imageClass: string
  orbBg: string
  orbBorder: string
  glow: string
  tagColor: string
  numberColor: string
  flip: boolean
}

const paths: Path[] = [
  {
    number: "01",
    Icon: Sparkles,
    tag: "Mirror",
    headline: "Words for what you couldn't say.",
    body: "You arrive with a feeling that has no shape. Tap a word, type a fragment, or just speak. Mirror gives it back to you, named.",
    image:
      "/flux-images/ChatGPT_Image_Oct_20__2025__10_36_52_PM-removebg-preview.png",
    alt: "Flux holding a question mark — the feeling before it has a name",
    imageClass: "w-[85%] h-[85%] object-contain",
    orbBg: "bg-primary/[0.12]",
    orbBorder: "border-primary/15",
    glow: "bg-primary/20",
    tagColor: "text-primary/70",
    numberColor: "text-primary/[0.07]",
    flip: false,
  },
  {
    number: "02",
    Icon: Users,
    tag: "Echo",
    headline: "Someone else carried this too.",
    body: "After your session, an anonymous moment surfaces — shared by someone who felt the same shape. Not advice. Just: you're not alone in it tonight.",
    image:
      "/flux-images/ChatGPT_Image_Oct_20__2025__10_36_42_PM-removebg-preview.png",
    alt: "Flux holding a paper plane",
    imageClass: "w-[78%] h-[78%] object-contain drop-shadow-xl",
    orbBg: "bg-accent/[0.10]",
    orbBorder: "border-accent/10",
    glow: "bg-accent/15",
    tagColor: "text-accent/70",
    numberColor: "text-accent/[0.06]",
    flip: true,
  },
  {
    number: "03",
    Icon: ShieldCheck,
    tag: "Safety",
    headline: "Held, even when it's heavier.",
    body: "If what you write suggests real danger, Mirror responds differently — gently, with real help nearby. A safe place doesn't leave you alone.",
    image:
      "/flux-images/ChatGPT_Image_Oct_20__2025__10_39_59_PM-removebg-preview.png",
    alt: "Flux cradling a pink heart",
    imageClass: "w-[90%] h-[90%] object-contain",
    orbBg: "bg-chart-2/[0.10]",
    orbBorder: "border-chart-2/15",
    glow: "bg-chart-2/20",
    tagColor: "text-chart-2/70",
    numberColor: "text-chart-2/[0.06]",
    flip: false,
  },
]

function PathRow({ p, index }: { p: Path; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${p.flip ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-20 py-16 lg:py-20 ${index > 0 ? "border-t border-border/10" : ""}`}
    >
      {/* Image orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.3, delay: index * 0.08 + 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full lg:w-[44%] shrink-0 flex items-center justify-center"
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 1.2 }}
          className={`absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full ${p.glow} blur-[80px]`}
        />
        <div className={`relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full ${p.orbBg} border ${p.orbBorder} flex items-center justify-center overflow-hidden`}>
          <Image
            src={p.image}
            alt={p.alt}
            width={280}
            height={300}
            className={p.imageClass}
          />
        </div>
      </motion.div>

      {/* Text */}
      <div className="relative flex-1 text-center lg:text-left">
        <span
          aria-hidden
          className={`absolute -top-2 ${p.flip ? "lg:right-0" : "lg:-left-3"} text-[7rem] md:text-[9rem] lg:text-[11rem] font-light leading-none select-none pointer-events-none tabular-nums ${p.numberColor}`}
        >
          {p.number}
        </span>

        <div className="relative space-y-4">
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <p.Icon className={`size-4 ${p.tagColor}`} strokeWidth={1.5} />
            <span className={`text-[11px] font-mono uppercase tracking-[0.2em] ${p.tagColor}`}>
              {p.tag}
            </span>
          </div>

          <h3 className="text-2xl md:text-[1.875rem] lg:text-[2.25rem] font-light text-foreground leading-[1.25] tracking-tight">
            {p.headline}
          </h3>

          <p className="text-base text-muted-foreground/55 leading-relaxed font-light max-w-md mx-auto lg:mx-0">
            {p.body}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function PathsSection() {
  return (
    <section id="paths" className="section-spacing bg-muted overflow-hidden relative">

      <div aria-hidden className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[160px] top-1/4 -left-60 animate-gentle-pulse" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[140px] top-1/2 -right-40 animate-gentle-pulse [animation-delay:2s]" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-chart-2/[0.03] blur-[150px] bottom-1/4 left-1/3 animate-gentle-pulse [animation-delay:4s]" />
      </div>

      <div className="section-container relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 space-y-4"
        >
          <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground/30">
            How it works
          </p>
          <h2 className="font-serif italic font-light text-foreground leading-[1.1] text-5xl md:text-6xl lg:text-[4.25rem]">
            Three quiet things.
          </h2>
          <p className="text-lg leading-relaxed font-light text-muted-foreground/55 max-w-lg">
            You don&apos;t have to know what you&apos;re feeling to begin.
          </p>
        </motion.div>

        <div>
          {paths.map((p, i) => (
            <PathRow key={p.tag} p={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-border/10 pt-8 mt-4"
        >
          <p className="font-serif text-sm leading-relaxed text-muted-foreground/35 italic">
            Not therapy. Not a chatbot. Not a social platform.
            <br className="hidden md:block" />
            The space before, between, and outside all of those.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
