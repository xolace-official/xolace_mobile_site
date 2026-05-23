"use client"

import { motion } from "motion/react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { AppleIcon } from "@/components/socials/apple-icon"
import { GooglePlayIcon } from "@/components/socials/google-play-icon"

type Review = {
  name: string
  quote: string
  platform: "App Store" | "Google Play"
  rating: number
}

const reviews: Review[] = [
  { name: "Abena K.",  quote: "I didn't have words for what I was carrying. Xolace gave them to me.",             platform: "App Store",   rating: 5   },
  { name: "Marcus O.", quote: "It's not therapy. It's the thing I needed before therapy.",                       platform: "Google Play", rating: 5   },
  { name: "Priya R.",  quote: "I've never felt understood by an app before. This was different.",                 platform: "App Store",   rating: 4.5 },
  { name: "Kwame B.",  quote: "Finally something that doesn't try to fix me. It just helps me hear myself.",     platform: "Google Play", rating: 5   },
  { name: "Leila S.",  quote: "I opened it at 2am not knowing what I needed. It knew.",                          platform: "App Store",   rating: 5   },
  { name: "Tomás V.",  quote: "I used to scroll for an hour just to feel something. Now I actually do.",         platform: "Google Play", rating: 4.5 },
  { name: "Nadia F.",  quote: "It doesn't feel like an app. It feels like a pause.",                             platform: "App Store",   rating: 5   },
  { name: "James M.",  quote: "The anonymity changes everything. I said things I couldn't say out loud.",        platform: "Google Play", rating: 4.5 },
  { name: "Esi A.",    quote: "The gentlest thing I've found for the moments that have no name.",                platform: "App Store",   rating: 5   },
  { name: "Riku T.",   quote: "It validated something I'd been carrying quietly for months.",                    platform: "Google Play", rating: 4   },
  { name: "Sara M.",   quote: "No sign-up, no judgment, no agenda. Just space. That's rare.",                   platform: "App Store",   rating: 5   },
  { name: "David O.",  quote: "I showed up hollow and left feeling like something had shifted.",                 platform: "Google Play", rating: 4.5 },
]

const avatarColors = [
  "bg-primary/[0.12] text-primary/70 border-primary/20",
  "bg-accent/[0.12] text-accent/70 border-accent/20",
  "bg-chart-2/[0.12] text-chart-2/70 border-chart-2/20",
  "bg-chart-3/[0.10] text-chart-3/70 border-chart-3/15",
  "bg-rose-300/[0.15] text-rose-400/70 border-rose-300/20",
  "bg-violet-400/[0.10] text-violet-400/70 border-violet-400/15",
  "bg-sky-400/[0.10] text-sky-400/70 border-sky-400/15",
  "bg-teal-400/[0.10] text-teal-400/70 border-teal-400/15",
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const delta = rating - i
        if (delta >= 1) {
          return <Star key={i} className="size-3 fill-primary text-primary" />
        }
        if (delta >= 0.5) {
          return (
            <span key={i} className="relative inline-block size-3">
              <Star className="absolute inset-0 size-3 text-primary/25" strokeWidth={1.5} />
              <span className="absolute inset-0 w-[50%] overflow-hidden">
                <Star className="size-3 fill-primary text-primary" />
              </span>
            </span>
          )
        }
        return <Star key={i} className="size-3 text-primary/25" strokeWidth={1.5} />
      })}
    </div>
  )
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const initials = review.name.split(" ").map(n => n[0]).join("")
  const avatarColor = avatarColors[index % avatarColors.length]

  return (
    <figure className="relative w-72 md:w-80 flex flex-col justify-between gap-5 rounded-2xl border border-border/20 bg-card px-7 py-8">
      <blockquote>
        <p className="text-[0.9rem] font-serif italic text-foreground/75 leading-[1.85]">
          &ldquo;{review.quote}&rdquo;
        </p>
      </blockquote>
      <figcaption className="space-y-2.5">
        <StarRating rating={review.rating} />
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className={cn("size-7 rounded-full border flex items-center justify-center text-[10px] font-medium shrink-0", avatarColor)}>
              {initials}
            </div>
            <span className="text-sm font-light text-foreground/55">{review.name}</span>
          </div>
          {review.platform === "App Store"
            ? <AppleIcon className="size-4 text-muted-foreground/25 shrink-0" />
            : <GooglePlayIcon className="size-4 text-muted-foreground/25 shrink-0" />
          }
        </div>
      </figcaption>
    </figure>
  )
}

export function TestimonialsSection() {
  const firstRow  = reviews.slice(0, Math.ceil(reviews.length / 2))
  const secondRow = reviews.slice(Math.ceil(reviews.length / 2))

  return (
    <section className="section-spacing-y bg-xo-surface-lowest overflow-hidden relative">

      <div aria-hidden className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-[150px] -top-32 right-1/4 animate-gentle-pulse" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[130px] bottom-0 left-1/4 animate-gentle-pulse [animation-delay:3s]" />
      </div>

      <div className="relative z-10 space-y-14">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="section-container space-y-4"
        >
          <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground/30">
            Real voices
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-serif italic font-light text-foreground text-4xl md:text-5xl leading-[1.1]">
              What they found.
            </h2>
            <div className="flex items-center gap-3 pb-1 shrink-0">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground/65">4.9</span>
              <span className="text-sm text-muted-foreground/30">· App Store & Google Play</span>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <Marquee pauseOnHover className="[--duration:55s] [--gap:1rem]">
            {firstRow.map((review, i) => (
              <ReviewCard key={review.name} review={review} index={i} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:48s] [--gap:1rem] mt-4">
            {secondRow.map((review, i) => (
              <ReviewCard key={review.name} review={review} index={i + firstRow.length} />
            ))}
          </Marquee>

          <div className="from-xo-surface-lowest pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r" />
          <div className="from-xo-surface-lowest pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="section-container flex items-center gap-5"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border/15" />
          <p className="font-serif italic text-sm text-muted-foreground/30 text-center whitespace-nowrap">
            Every word here is real.
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border/15" />
        </motion.div>

      </div>
    </section>
  )
}
