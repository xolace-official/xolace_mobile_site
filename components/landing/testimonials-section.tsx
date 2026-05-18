"use client"

import { motion } from "motion/react"

type Review = {
  quote: string
  author: string
  platform: "App Store" | "Google Play" | null
}

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

function Attribution({ author, platform }: Pick<Review, "author" | "platform">) {
  return (
    <p className="text-xs text-muted-foreground/40 tracking-wide font-light">
      — {author}
      {platform && (
        <span className="ml-2 font-mono uppercase tracking-[0.12em] text-primary/40 text-[10px]">
          · {platform}
        </span>
      )}
    </p>
  )
}

type TestimonialsSectionProps = {
  reviews?: Review[]
}

export function TestimonialsSection({ reviews }: TestimonialsSectionProps) {
  const display = reviews && reviews.length >= 3 ? reviews : fallbackReviews
  const [featured, second, third] = display

  return (
    <section className="py-32 px-8">
      <div className="max-w-5xl mx-auto space-y-20">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/40"
        >
          What people are saying
        </motion.p>

        {/* Featured — large pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 border-t border-border/15 pt-12"
        >
          <blockquote className="text-3xl md:text-4xl lg:text-5xl text-foreground font-serif italic font-light leading-[1.25]">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <Attribution author={featured.author} platform={featured.platform} />
        </motion.div>

        {/* Two secondary quotes side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-border/15">
          {[second, third].map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`space-y-5 py-10 ${i === 0 ? "md:pr-12" : "md:pl-12"}`}
            >
              <blockquote className="text-xl md:text-2xl text-foreground/80 font-serif italic font-light leading-relaxed">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <Attribution author={review.author} platform={review.platform} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
