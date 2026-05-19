"use client"

import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect, useCallback, useRef } from "react"

type Review = {
  name: string
  quote: string
  platform: "App Store" | "Google Play"
  date: string
}

const fallbackReviews: Review[] = [
  {
    name: "Abena K.",
    quote: "I didn't have words for what I was carrying. Xolace gave them to me.",
    platform: "App Store",
    date: "May 2025",
  },
  {
    name: "Marcus O.",
    quote: "It's not therapy. It's the thing I needed before therapy.",
    platform: "Google Play",
    date: "Apr 2025",
  },
  {
    name: "Priya R.",
    quote: "I've never felt understood by an app before. This was different.",
    platform: "App Store",
    date: "Mar 2025",
  },
  {
    name: "Kwame B.",
    quote: "Finally an app that doesn't try to fix me. It just helps me hear myself.",
    platform: "Google Play",
    date: "Feb 2025",
  },
]

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

type Center = { x: number; y: number }

// Smooth bezier that curves toward each avatar center
function buildPath(pts: Center[]): string {
  const [p0, p1, p2] = pts
  const m01 = (p0.y + p1.y) / 2
  const m12 = (p1.y + p2.y) / 2
  return [
    `M ${p0.x} ${p0.y}`,
    `C ${p0.x} ${m01}, ${p1.x} ${m01}, ${p1.x} ${p1.y}`,
    `C ${p1.x} ${m12}, ${p2.x} ${m12}, ${p2.x} ${p2.y}`,
  ].join(" ")
}

type TestimonialsSectionProps = {
  reviews?: Review[]
}

export function TestimonialsSection({ reviews }: TestimonialsSectionProps) {
  const data = reviews && reviews.length >= 3 ? reviews : fallbackReviews
  const [activeIndex, setActiveIndex] = useState(0)

  const advance = useCallback(() => {
    setActiveIndex((i) => (i + 1) % data.length)
  }, [data.length])

  useEffect(() => {
    const id = setInterval(advance, 10_000)
    return () => clearInterval(id)
  }, [advance])

  const prevIdx = (activeIndex - 1 + data.length) % data.length
  const nextIdx = (activeIndex + 1) % data.length

  // next at top so incoming user descends into the active slot (top-to-down flow)
  const slots = [
    { reviewIdx: nextIdx, isActive: false },
    { reviewIdx: activeIndex, isActive: true },
    { reviewIdx: prevIdx, isActive: false },
  ]

  // Measure the center of each avatar to draw the SVG connector through them
  const containerRef = useRef<HTMLDivElement>(null)
  const avatarRefs = useRef<(HTMLDivElement | null)[]>([null, null, null])
  const [centers, setCenters] = useState<Center[]>([])

  const measure = useCallback(() => {
    const container = containerRef.current
    if (!container) return
    const cr = container.getBoundingClientRect()
    const pts = avatarRefs.current.map((el) => {
      if (!el) return null
      const r = el.getBoundingClientRect()
      return { x: r.left + r.width / 2 - cr.left, y: r.top + r.height / 2 - cr.top }
    })
    if (pts.some((p) => !p)) return
    setCenters(pts as Center[])
  }, [])

  // Follow the avatar animation for 700ms after each rotation
  useEffect(() => {
    let raf: number
    const end = performance.now() + 700
    const tick = (now: number) => {
      measure()
      if (now < end) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [activeIndex, measure])

  // Initial measurement and resize handler
  useEffect(() => {
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [measure])

  const hasCenters = centers.length === 3

  return (
    <section className="section-spacing border-t border-border/15">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-16 md:gap-28 items-center">

          {/* Left — user column */}
          <div className="w-full md:w-64 shrink-0 space-y-2">

            {/* Section header */}
            <div className="mb-18 space-y-3">
              <div className="h-1 w-24 bg-accent rounded-full" />
              <p className="text-2xl font-light text-foreground">
                Customer Reviews
              </p>
            </div>

            <div className="relative" ref={containerRef}>
              {hasCenters && (
                <svg
                  aria-hidden
                  className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                  style={{ zIndex: 0 }}
                >
                  {/* Faded extension above the first avatar — implies more reviews above */}
                  <line
                    x1={centers[0].x} y1={centers[0].y - 48}
                    x2={centers[0].x} y2={centers[0].y}
                    stroke="currentColor" strokeWidth="1.5"
                    className="text-border"
                  />
                  {/* Bezier curve that meanders through all three avatar centres */}
                  <path
                    d={buildPath(centers)}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-border"
                  />
                  {/* Faded extension below the last avatar — implies more reviews below */}
                  <line
                    x1={centers[2].x} y1={centers[2].y}
                    x2={centers[2].x} y2={centers[2].y + 48}
                    stroke="currentColor" strokeWidth="1.5"
                    className="text-border"
                  />
                </svg>
              )}

              <div className="flex flex-col space-y-12 md:space-y-24">
                {slots.map(({ reviewIdx, isActive }, position) => {
                  const review = data[reviewIdx]
                  return (
                    <button
                      key={position}
                      onClick={() => setActiveIndex(reviewIdx)}
                      className={`relative z-10 flex w-full items-center text-left ${
                        isActive ? "ms-6 px-4 md:ms-12 md:px-8" : ""
                      }`}
                    >
                      <div className="relative w-14 shrink-0 flex justify-center items-center">
                        <motion.div
                          ref={(el: HTMLDivElement | null) => {
                            avatarRefs.current[position] = el
                          }}
                          animate={{
                            width: isActive ? 56 : 36,
                            height: isActive ? 56 : 36,
                          }}
                          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                          className={`flex items-center justify-center overflow-hidden rounded-full ring-1 ${
                            isActive
                              ? "bg-primary/10 ring-primary/25"
                              : "bg-muted ring-border/40"
                          }`}
                        >
                          <motion.span
                            key={reviewIdx}
                            initial={{ opacity: 0, y: -6 }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              fontSize: isActive ? "0.85rem" : "0.58rem",
                            }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className={`leading-none font-light select-none ${
                              isActive ? "text-primary" : "text-foreground"
                            }`}
                          >
                            {initials(review.name)}
                          </motion.span>
                        </motion.div>
                      </div>

                      <motion.div
                        key={reviewIdx}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                        className={isActive ? "ms-2" : ""}
                      >
                        <p
                          className={`leading-tight text-foreground ${
                            isActive ? "text-base" : "text-sm font-light"
                          }`}
                        >
                          {review.name}
                        </p>
                        <p className="mt-1 flex flex-row gap-2 font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase">
                          {review.date} · {review.platform}
                        </p>
                      </motion.div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right — quote rotates in from top */}
          <div className="flex-1 relative flex items-center min-h-55 pl-6 md:pl-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: -22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 22 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="w-full space-y-5"
              >
                <p className="font-bold text-7xl leading-none text-primary/20 select-none">
                  &ldquo;
                </p>
                <blockquote className="-mt-4 font-serif italic font-light text-foreground/85 text-2xl md:text-3xl leading-[1.38]">
                  {data[activeIndex].quote}
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
