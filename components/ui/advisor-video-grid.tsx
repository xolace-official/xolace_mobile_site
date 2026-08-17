"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Founder } from "@/components/ui/founder-carousel"

/* ------------------------------------------------------------------ */
/*  Row of full-bleed portrait cards with a tag overlay and a          */
/*  name/avatar overlay — matches the verilyme.com video-row reference. */
/*  Advisors have no video, so the photo (or gradient+initials) fills   */
/*  the frame the same way a video thumbnail would. On mobile exactly   */
/*  one card is visible, centered; on wider screens several show at     */
/*  once. The row scrolls natively (drag/swipe) and Prev/Next step      */
/*  exactly one card at a time, always in sync with the dots.           */
/* ------------------------------------------------------------------ */

// One link per advisor — whichever of these is set first wins.
function primaryLink(advisor: Founder) {
  return advisor.linkedin ?? advisor.x ?? advisor.website
}

function AdvisorPortraitCard({ advisor }: { advisor: Founder }) {
  const href = primaryLink(advisor)
  return (
    <div className="relative h-[380px] w-[240px] shrink-0 overflow-hidden rounded-2xl border border-xo-outline-variant/15 md:h-[420px] md:w-[260px] lg:w-[calc((100%-3.75rem)/4)]">
      {/* Background — photo or gradient with large centered initials */}
      {advisor.image ? (
        <Image
          src={advisor.image}
          alt={advisor.name}
          fill
          className="object-cover"
        />
      ) : (
        <>
          <div className={cn("absolute inset-0", advisor.gradient)} />
          <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6rem] leading-none font-semibold text-foreground/10 select-none">
            {advisor.initials}
          </span>
        </>
      )}

      {/* Expertise tag — top-left, mirrors the reference's "#sponsored" chip */}
      {advisor.expertise && (
        <span className="absolute top-3 left-3 rounded-md border border-xo-outline-variant/15 bg-background/70 px-2 py-1 font-mono text-[9px] tracking-[0.12em] text-foreground/80 uppercase backdrop-blur-sm">
          {advisor.expertise}
        </span>
      )}

      {/* Bottom scrim + avatar/name overlay — mirrors the reference's @handle row */}
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 bg-gradient-to-t from-background/85 via-background/50 to-transparent px-3 pt-10 pb-3">
        <div
          className={cn(
            "flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-xo-outline-variant/25",
            !advisor.image && advisor.gradient
          )}
        >
          {advisor.image ? (
            <Image
              src={advisor.image}
              alt={advisor.name}
              width={32}
              height={32}
              className="size-full object-cover"
            />
          ) : (
            <span className="text-[10px] font-semibold text-foreground/80">
              {advisor.initials}
            </span>
          )}
        </div>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="truncate text-sm font-semibold text-foreground underline underline-offset-2 hover:opacity-80"
          >
            {advisor.name}
          </a>
        ) : (
          <span className="truncate text-sm font-semibold text-foreground">
            {advisor.name}
          </span>
        )}
      </div>
    </div>
  )
}

const navButton =
  "flex size-10 shrink-0 items-center justify-center rounded-full border border-xo-outline-variant/15 bg-xo-surface-low transition-all duration-300 hover:bg-xo-surface-bright disabled:cursor-not-allowed disabled:opacity-30"

type Layout = {
  step: number // one card's width + the gap after it, in px
  visibleCount: number // how many full cards actually fit in the track
  centerPadding: number // track's left/right padding, in px (0 unless one card is visible)
}

export function AdvisorVideoGrid({ advisors }: { advisors: Founder[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [layout, setLayout] = useState<Layout>({
    step: 0,
    visibleCount: 1,
    centerPadding: 0,
  })
  const [activeIndex, setActiveIndex] = useState(0)
  const total = advisors.length

  // Number of distinct scroll positions ("stops"). When several cards are
  // already visible at once (desktop), there are fewer meaningful stops
  // than advisors — e.g. 5 advisors with 4 visible only has 2 stops (the
  // start, and the one step that reveals the 5th card). One dot per
  // advisor would be misleading there, so dots track stops, not advisors.
  const numStops = Math.max(1, total - layout.visibleCount + 1)
  const lastStop = numStops - 1
  // Derived at render time, not stored — if a resize shrinks numStops
  // (e.g. rotating from mobile's 5 stops to desktop's 2), the stale
  // activeIndex is clamped here on the next render rather than corrected
  // via a state-setting effect, which would cost an extra render pass.
  const clampedActiveIndex = Math.max(0, Math.min(activeIndex, lastStop))

  // Measure the real card width, gap, and how many cards fit in the track.
  // When only one card fits (mobile), add matching left/right padding so
  // that card can sit centered instead of flush against the left edge —
  // symmetric padding means scrollLeft 0 centers the first card and
  // maxScroll centers the last one, so stop*step (below) needs no special
  // case for the centered vs. edge-aligned cases; the padding does that
  // work by shifting the coordinate system, not the index math.
  useEffect(() => {
    const track = scrollRef.current
    if (!track) return

    const measure = () => {
      const first = track.children[0] as HTMLElement | undefined
      if (!first) return
      const cardWidth = first.getBoundingClientRect().width
      const gap =
        parseFloat(getComputedStyle(track).columnGap || "0") || 0
      const step = cardWidth + gap
      if (step <= 0) return
      const clientWidth = track.clientWidth
      // +0.5px epsilon guards against subpixel rounding (e.g. a card
      // measuring 289.0005px instead of exactly 289px) pushing an exact
      // fit like 4.0 cards just under the line to 3.9998, which floor()
      // would otherwise under-count as 3.
      const visibleCount = Math.max(
        1,
        Math.floor((clientWidth + gap) / step + 0.005)
      )
      const centerPadding =
        visibleCount <= 1 ? Math.max(0, (clientWidth - cardWidth) / 2) : 0
      setLayout({ step, visibleCount, centerPadding })
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(track)
    return () => ro.disconnect()
  }, [])

  // Scrolls only the track itself (via its own scrollLeft), never the page —
  // scrollIntoView was bubbling up to the window because the card wasn't
  // fully visible vertically, so it dragged the whole section into view too.
  const scrollToIndex = (index: number) => {
    const track = scrollRef.current
    if (!track || layout.step <= 0) return
    const clamped = Math.max(0, Math.min(index, lastStop))
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth)
    const target = Math.max(
      0,
      Math.min(clamped * layout.step, maxScroll)
    )
    track.scrollTo({ left: target, behavior: "smooth" })
    setActiveIndex(clamped)
  }

  // Keep activeIndex synced with native drag/swipe scrolling — without this,
  // the dots, the disabled prev/next state, and clicks after a manual swipe
  // all act on a stale index instead of whatever card is actually in view.
  useEffect(() => {
    const track = scrollRef.current
    if (!track || layout.step <= 0) return

    const handleScroll = () => {
      const index = Math.round(track.scrollLeft / layout.step)
      setActiveIndex(Math.max(0, Math.min(index, lastStop)))
    }

    track.addEventListener("scroll", handleScroll, { passive: true })
    return () => track.removeEventListener("scroll", handleScroll)
  }, [layout.step, lastStop])

  return (
    <div className="section-container-wide">
      <div className="mb-8 flex items-center justify-between">
        {/* Dot pagination — one dot per stop, not per advisor */}
        <div className="flex gap-2">
          {Array.from({ length: numStops }, (_, i) => (
            <button
              key={advisors[i]?.name ?? i}
              type="button"
              onClick={() => scrollToIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === clampedActiveIndex
                  ? "w-6 bg-foreground"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to ${advisors[i]?.name ?? `slide ${i + 1}`}`}
            />
          ))}
        </div>

        {/* Prev/Next — the row also scrolls natively via drag/swipe */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollToIndex(clampedActiveIndex - 1)}
            disabled={clampedActiveIndex === 0}
            className={navButton}
            aria-label="Previous advisor"
          >
            <ChevronLeft className="size-4 text-foreground/70" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(clampedActiveIndex + 1)}
            disabled={clampedActiveIndex === lastStop}
            className={navButton}
            aria-label="Next advisor"
          >
            <ChevronRight className="size-4 text-foreground/70" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={
            layout.centerPadding > 0
              ? {
                  paddingLeft: layout.centerPadding,
                  paddingRight: layout.centerPadding,
                }
              : undefined
          }
        >
          {advisors.map((advisor) => (
            <AdvisorPortraitCard key={advisor.name} advisor={advisor} />
          ))}
        </div>

        {/* Edge fades — keep the row from reading as visually cut off */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-background to-transparent" />
      </div>
    </div>
  )
}
