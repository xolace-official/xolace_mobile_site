"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Globe } from "lucide-react"
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6"
import { cn } from "@/lib/utils"
import type { Founder } from "@/components/ui/founder-carousel"

const socialLink =
  "flex size-8 items-center justify-center rounded-full border border-xo-outline-variant/15 bg-xo-surface-bright/60 text-muted-foreground/60 transition-colors duration-300 hover:bg-xo-surface-bright hover:text-foreground"

/* ------------------------------------------------------------------ */
/*  Testimonial-style fanned-deck carousel for advisors — bold, non-    */
/*  italic quote treatment, matching the reference screenshot exactly.  */
/* ------------------------------------------------------------------ */

function getCardStyle(index: number, currentIndex: number, total: number) {
  const diff = (index - currentIndex + total) % total

  if (diff === 0) {
    return {
      transform: "translateX(0%) translateY(0%) scale(1) rotate(0deg)",
      opacity: 1,
      zIndex: 30,
    }
  }
  if (diff === 1) {
    return {
      transform: "translateX(55%) translateY(12%) scale(0.93) rotate(6deg)",
      opacity: 0.5,
      zIndex: 20,
    }
  }
  if (diff === total - 1) {
    return {
      transform: "translateX(-55%) translateY(12%) scale(0.93) rotate(-6deg)",
      opacity: 0.5,
      zIndex: 20,
    }
  }
  return {
    transform: "translateX(0%) translateY(18%) scale(0.86)",
    opacity: 0,
    zIndex: 10,
  }
}

function AdvisorTestimonialCard({
  advisor,
  isActive,
}: {
  advisor: Founder
  isActive: boolean
}) {
  return (
    <div
      className={cn(
        "flex h-[380px] flex-col gap-5 rounded-2xl bg-xo-surface-low px-8 py-8 md:px-10 md:py-10",
        "border-t border-l border-t-xo-outline-variant/35 border-l-xo-outline-variant/35",
        isActive
          ? "border-r-4 border-b-4 border-r-primary border-b-primary"
          : "border-r-4 border-b-4 border-r-primary border-b-primary"
      )}
    >
      {advisor.expertise && (
        <span className="inline-block w-fit rounded-full border border-primary/40 px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-primary uppercase dark:border-primary/30 dark:text-primary/80">
          {advisor.expertise}
        </span>
      )}

      {/* flex-1 + line-clamp keeps every card the same height regardless of bio length */}
      <blockquote className="min-h-0 flex-1">
        <p className="line-clamp-5 text-xl leading-relaxed font-semibold text-foreground md:text-2xl">
          {advisor.bio}
        </p>
      </blockquote>

      <div className="flex items-center justify-between gap-3 border-t border-xo-outline-variant/10">
        <div className="flex items-center gap-3">
          <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-xo-outline-variant/25">
            {advisor.image ? (
              <Image
                src={advisor.image}
                alt={advisor.name}
                width={64}
                height={64}
                className="size-full object-cover"
              />
            ) : (
              <span className="text-lg font-medium text-foreground/70">
                {advisor.initials}
              </span>
            )}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              {advisor.name}
            </p>
            <p className="text-xs text-muted-foreground/50">{advisor.role}</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {advisor.linkedin && (
            <a
              href={advisor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${advisor.name} on LinkedIn`}
              className={socialLink}
            >
              <FaLinkedinIn size={13} />
            </a>
          )}
          {advisor.x && (
            <a
              href={advisor.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${advisor.name} on X`}
              className={socialLink}
            >
              <FaXTwitter size={13} />
            </a>
          )}
          {advisor.website && (
            <a
              href={advisor.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${advisor.name}'s website`}
              className={socialLink}
            >
              <Globe className="size-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function AdvisorTestimonialCarousel({
  advisors,
}: {
  advisors: Founder[]
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const total = advisors.length

  const next = () => setCurrentIndex((prev) => (prev + 1) % total)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + total) % total)

  return (
    <div className="section-container-wide">
      <div className="relative flex h-[440px] items-center justify-center overflow-hidden md:h-[400px]">
        <button
          onClick={prev}
          type="button"
          className="absolute left-0 z-40 flex size-10 items-center justify-center rounded-full border-t border-r-2 border-b-2 border-l border-t-xo-outline-variant/15 border-r-primary/70 border-b-primary/70 border-l-xo-outline-variant/15 bg-xo-surface-low transition-all duration-300 hover:bg-xo-surface-bright md:left-2"
          aria-label="Previous advisor"
        >
          <ChevronLeft className="size-4 text-foreground/70" />
        </button>

        <button
          onClick={next}
          type="button"
          className="absolute right-0 z-40 flex size-10 items-center justify-center rounded-full border-t border-r-2 border-b-2 border-l border-t-xo-outline-variant/15 border-r-primary/70 border-b-primary/70 border-l-xo-outline-variant/15 bg-xo-surface-low transition-all duration-300 hover:bg-xo-surface-bright md:right-2"
          aria-label="Next advisor"
        >
          <ChevronRight className="size-4 text-foreground/70" />
        </button>

        <div className="relative flex h-full w-full max-w-xl items-center justify-center">
          {advisors.map((advisor, index) => (
            <div
              key={advisor.name}
              className="absolute w-full max-w-xl transition-all duration-700 ease-out"
              style={getCardStyle(index, currentIndex, total)}
            >
              <AdvisorTestimonialCard
                advisor={advisor}
                isActive={index === currentIndex}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 flex justify-center gap-2">
        {advisors.map((advisor, index) => (
          <button
            key={advisor.name}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            aria-label={`Go to ${advisor.name}`}
          />
        ))}
      </div>
    </div>
  )
}
