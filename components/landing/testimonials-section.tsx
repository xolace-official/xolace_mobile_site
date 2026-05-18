"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { Star } from "lucide-react"

type Review = {
  quote: string
  author: string
  // null means no platform badge — used for beta user fallbacks
  platform: "App Store" | "Google Play" | null
}

// Fallback until we have enough real App Store / Play Store reviews
const fallbackReviews: Review[] = [
  {
    quote: "I didn't have words for what I was carrying. Xolace gave them to me.",
    author: "Beta user",
    platform: null,
  },
  {
    quote: "It's not therapy. It's the thing I needed before therapy.",
    author: "Beta user",
    platform: null,
  },
  {
    quote: "I've never felt understood by an app before. This was different.",
    author: "Beta user",
    platform: null,
  },
]

function StarRating() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-3 fill-primary text-primary" />
      ))}
    </div>
  )
}

function ReviewCard({ quote, author, platform }: Review) {
  return (
    <figure className={cn(
      "flex flex-col gap-5 rounded-2xl p-7",
      "bg-xo-surface-low border border-xo-outline-variant/10",
      "ring-1 ring-xo-outline-variant/[0.06]",
    )}>
      <StarRating />
      <blockquote className="flex-1 font-serif italic text-foreground/80 leading-relaxed text-sm md:text-base">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">{author}</span>
        {platform && (
          <>
            <span className="text-xo-outline-variant/40 text-xs">·</span>
            <span className="text-[10px] tracking-[0.08em] uppercase text-primary/60 font-mono">
              {platform}
            </span>
          </>
        )}
      </figcaption>
    </figure>
  )
}

type TestimonialsSectionProps = {
  reviews?: Review[]
}

export function TestimonialsSection({ reviews }: TestimonialsSectionProps) {
  // Never show fewer than 3 — fallback keeps the section alive before real reviews arrive
  const display = reviews && reviews.length >= 3 ? reviews : fallbackReviews

  return (
    <section className="py-32 px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3"
        >
          <h2 className="text-4xl md:text-5xl text-foreground font-light">
            What it&apos;s like inside.
          </h2>
          <p className="text-muted-foreground font-serif italic max-w-sm mx-auto">
            From people who needed this before they knew it existed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {display.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
