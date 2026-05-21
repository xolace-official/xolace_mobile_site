"use client"

import { useRef } from "react"
import { motion } from "motion/react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { AppleIcon } from "@/components/socials/apple-icon"
import { GooglePlayIcon } from "@/components/socials/google-play-icon"

type Review = {
  name: string
  quote: string
  platform: "App Store" | "Google Play"
}

const reviews: Review[] = [
  {
    name: "Abena K.",
    quote: "I didn't have words for what I was carrying. Xolace gave them to me.",
    platform: "App Store",
  },
  {
    name: "Marcus O.",
    quote: "It's not therapy. It's the thing I needed before therapy.",
    platform: "Google Play",
  },
  {
    name: "Priya R.",
    quote: "I've never felt understood by an app before. This was different.",
    platform: "App Store",
  },
  {
    name: "Kwame B.",
    quote: "Finally an app that doesn't try to fix me. It just helps me hear myself.",
    platform: "Google Play",
  },
  {
    name: "Leila S.",
    quote: "I opened it at 2am not knowing what I needed. It knew.",
    platform: "App Store",
  },
]

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-primary text-primary" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" })
  }

  return (
    <section className="section-spacing">

      {/* Centered header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="section-container text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-light text-foreground leading-tight mb-4">

          <span className="font-serif italic">Customer reviews.</span>
        </h2>

        <div className="flex items-center justify-center gap-4">
          <Stars />
          {/* Nav buttons sit beside the stars */}
        </div>
      </motion.div>

      {/* Card row — outer clips right edge, inner scrolls without a visible bar */}
      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none px-[var(--section-px)]"
        >
          {reviews.map((review) => (
            <div
              key={review.name}
              className="shrink-0 snap-start w-[78vw] sm:w-72 lg:w-[calc(25%-12px)] flex flex-col justify-between gap-6 rounded-2xl bg-card p-6"
            >
              {/* Quote mark + text */}
              <div>
                <p className="font-serif text-5xl leading-none text-foreground/15 select-none mb-2">
                  &ldquo;
                </p>
                <p className="font-serif italic text-sm md:text-base text-foreground/80 leading-relaxed">
                  {review.quote}
                </p>
              </div>

              {/* Footer */}
              <div className="space-y-2.5">
                <Stars />
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-light text-foreground/55">{review.name}</p>
                  {review.platform === "App Store" ? (
                    <AppleIcon className="size-4 text-muted-foreground/30 shrink-0" />
                  ) : (
                    <GooglePlayIcon className="size-4 text-muted-foreground/30 shrink-0" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        <div className="m-4 md:mx-8 md:mt-8 flex flex-end justify-end items-center gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Previous review"
            className="flex items-center bg-secondary justify-center w-8 h-8 rounded-full border border-border/30 text-muted-foreground/40 hover:text-foreground hover:border-border/70 transition-all duration-200"
          >
            <ChevronLeft className="size-4" strokeWidth={1.5} />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next review"
            className="flex items-center bg-secondary justify-center w-8 h-8 rounded-full border border-border/30 text-muted-foreground/40 hover:text-foreground hover:border-border/70 transition-all duration-200"
          >
            <ChevronRight className="size-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

    </section>
  )
}
