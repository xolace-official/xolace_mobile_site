"use client"

import React, { useRef, useState, useCallback, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"

const neverStatements = [
  {
    headline: "Never a chatbot therapist.",
    body: "We don\u2019t give advice. We don\u2019t diagnose. We don\u2019t pretend an algorithm understands your pain. The AI mirrors \u2014 and then it connects you to the humans who actually do.",
  },
  {
    headline: "Never a social feed.",
    body: "There are no profiles, no followers, no likes, no content to perform for. The things you share are yours. If they reach someone else, it\u2019s anonymously, and only with your explicit permission.",
  },
  {
    headline: "Never showing you ads.",
    body: "Not now. Not ever. Showing an ad to someone who just typed something honest would break everything this is supposed to be.",
  },
  {
    headline: "Never replacing a therapist.",
    body: "If you need professional care, we\u2019ll help you find it \u2014 not with a cold hotline number, but with warmth and context. We know what we are. And we know what we\u2019re not.",
  },
  {
    headline: "Never selling your data.",
    body: "Your emotional life is not a product. Your late-night honesty is not a data point for someone else\u2019s ad targeting model. We\u2019d rather shut down than cross that line.",
  },
  {
    headline: "Never trying to keep you.",
    body: "There are no streaks, no guilt notifications, no \u201Cyou haven\u2019t visited in 3 days.\u201D The app is designed for 3\u20138 minutes. It encourages you to leave. An app that respects your time earns something no engagement hack can manufacture: trust.",
  },
]

export function Never() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }, [])

  useEffect(() => {
    checkScrollability()
  }, [checkScrollability])

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = direction === "left" ? -460 : 460
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section className="py-20 md:py-48 mb-32 md:mb-32">
      {/* Header with navigation */}
      <div className="asymmetric-layout mb-4">
        <ScrollReveal>
          <div className="flex items-end justify-between">
            <h2 className="text-4xl md:text-5xl text-foreground font-light">
              What Xolace Will Never Be.
            </h2>
            <div className="hidden md:flex gap-3">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="flex size-10 items-center justify-center rounded-full bg-xo-surface-low ring-1 ring-xo-outline-variant/15 transition-all duration-300 hover:bg-xo-surface-bright disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Scroll left"
              >
                <ArrowLeft className="size-4 text-foreground/70" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="flex size-10 items-center justify-center rounded-full bg-xo-surface-low ring-1 ring-xo-outline-variant/15 transition-all duration-300 hover:bg-xo-surface-bright disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Scroll right"
              >
                <ArrowRight className="size-4 text-foreground/70" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Horizontally scrollable cards */}
      <div
        ref={scrollRef}
        onScroll={checkScrollability}
        className="flex w-full overflow-x-auto scroll-smooth py-6 md:py-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex gap-5 pl-[clamp(2rem,10vw,8rem)] pr-[clamp(2rem,15vw,12rem)]">
          {neverStatements.map((statement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: 0.1 * i,
                ease: "easeOut",
              }}
              className="shrink-0"
            >
              <NeverCard statement={statement} index={i} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile navigation arrows */}
      <div className="flex gap-3 pl-[clamp(2rem,10vw,8rem)] mt-2 md:hidden">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="flex size-10 items-center justify-center rounded-full bg-xo-surface-low ring-1 ring-xo-outline-variant/15 transition-all duration-300 hover:bg-xo-surface-bright disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Scroll left"
        >
          <ArrowLeft className="size-4 text-foreground/70" />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="flex size-10 items-center justify-center rounded-full bg-xo-surface-low ring-1 ring-xo-outline-variant/15 transition-all duration-300 hover:bg-xo-surface-bright disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Scroll right"
        >
          <ArrowRight className="size-4 text-foreground/70" />
        </button>
      </div>
    </section>
  )
}

function NeverCard({
  statement,
  index,
}: {
  statement: { headline: string; body: string }
  index: number
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative w-[22rem] md:w-[28rem] h-[16rem] md:h-[18rem] rounded-2xl bg-xo-surface-lowest ring-1 ring-xo-outline-variant/10 overflow-hidden transition-shadow duration-500 hover:ring-primary/15 hover:shadow-[0_0_40px_var(--primary)/0.05]"
    >
      {/* Large faded number in background */}
      <span className="absolute -bottom-6 -right-2 text-[10rem] md:text-[12rem] font-light leading-none text-foreground/[0.03] select-none pointer-events-none tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Thin accent bar at top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-7 md:p-9">
        <div>
          <p className="text-xs text-primary/50 tracking-widest uppercase mb-4">
            Never
          </p>
          <h3 className="text-xl md:text-2xl text-foreground font-light leading-snug">
            {statement.headline}
          </h3>
        </div>
        <p className="font-serif text-sm md:text-[15px] text-muted-foreground leading-relaxed line-clamp-4">
          {statement.body}
        </p>
      </div>
    </motion.div>
  )
}
