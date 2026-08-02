"use client"

import React, { useRef, useState, useCallback, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { m as motion } from "motion/react"
import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"

const neverStatements = [
  {
    headline: "Never a chatbot therapist.",
    body: "We don't give advice. We don't diagnose. We don't pretend an algorithm understands your pain. The AI mirrors then connects you to the humans who actually do.",
  },
  {
    headline: "Never a social feed.",
    body: "No profiles, no followers, no likes, no content to perform for. What you share is yours. If it reaches someone else, it's anonymously, and only with your explicit permission.",
  },
  {
    headline: "Never showing you ads.",
    body: "Not now. Not ever. Showing an ad to someone who just typed something honest would break everything this is supposed to be.",
  },
  {
    headline: "Never replacing a therapist.",
    body: "If you need professional care, we\u2019ll help you find it; not with a cold hotline number, but with warmth and context. We know what we are. We know what we\u2019re not.",
  },
  {
    headline: "Never selling your data.",
    body: "Your emotional life is not a product. Your late-night honesty is not a data point for someone else\u2019s ad targeting model. We\u2019d rather shut down than cross that line.",
  },
  {
    headline: "Never trying to keep you.",
    body: "No streaks. No guilt notifications. No 'you haven't visited in 3 days.' The app is designed for 3-8 minutes. It encourages you to leave. Respecting your time earns something no engagement hack can manufacture: trust.",
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
    <section className="section-spacing-y bg-xo-surface-lowest">
      {/* Header with navigation */}
      <div className="section-container-wide mb-4">
        <ScrollReveal>
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-4xl leading-[1.1] font-light text-foreground italic md:text-5xl">
              What Xolace Will Never Be.
            </h2>
            <div className="hidden gap-3 md:flex">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="flex size-10 items-center justify-center rounded-full bg-xo-surface-low ring-1 ring-xo-outline-variant/15 transition-all duration-300 hover:bg-xo-surface-bright disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Scroll left"
              >
                <ArrowLeft className="size-4 text-foreground/70" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="flex size-10 items-center justify-center rounded-full bg-xo-surface-low ring-1 ring-xo-outline-variant/15 transition-all duration-300 hover:bg-xo-surface-bright disabled:cursor-not-allowed disabled:opacity-30"
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
        className="flex w-full overflow-x-auto scroll-smooth py-6 [-ms-overflow-style:none] [scrollbar-width:none] md:py-10 [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex gap-5 pr-[clamp(2rem,15vw,12rem)] pl-[clamp(2rem,10vw,8rem)]">
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
      <div className="mt-2 flex gap-3 pl-[clamp(2rem,10vw,8rem)] md:hidden">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="flex size-10 items-center justify-center rounded-full bg-xo-surface-low ring-1 ring-xo-outline-variant/15 transition-all duration-300 hover:bg-xo-surface-bright disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Scroll left"
        >
          <ArrowLeft className="size-4 text-foreground/70" />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="flex size-10 items-center justify-center rounded-full bg-xo-surface-low ring-1 ring-xo-outline-variant/15 transition-all duration-300 hover:bg-xo-surface-bright disabled:cursor-not-allowed disabled:opacity-30"
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
      className="group relative h-64 w-88 overflow-hidden rounded-2xl bg-xo-surface-lowest ring-1 ring-xo-outline-variant/10 transition-shadow duration-500 hover:shadow-[0_0_40px_var(--primary)/0.05] hover:ring-primary/15 md:h-72 md:w-md"
    >
      {/* Large faded number in background */}
      <span className="pointer-events-none absolute -right-2 -bottom-6 text-[10rem] leading-none font-light text-foreground/3 tabular-nums select-none md:text-[12rem]">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Thin accent bar at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-primary/30 via-primary/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-7 md:p-9">
        <div>
          <p className="mb-4 text-xs tracking-widest text-primary/50 uppercase">
            Never
          </p>
          <h3 className="text-xl leading-snug font-light text-foreground md:text-2xl">
            {statement.headline}
          </h3>
        </div>
        <p className="line-clamp-4 font-serif text-sm leading-relaxed text-muted-foreground md:text-[15px]">
          {statement.body}
        </p>
      </div>
    </motion.div>
  )
}
