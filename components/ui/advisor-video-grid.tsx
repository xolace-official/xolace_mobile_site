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
/*  the frame the same way a video thumbnail would. Sized so exactly    */
/*  four cards are visible on large screens. The row scrolls natively    */
/*  (drag/swipe) and Prev/Next buttons are also available.              */
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

export function AdvisorVideoGrid({ advisors }: { advisors: Founder[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const total = advisors.length
  const lastIndex = total - 1

  // Index <-> scrollLeft is mapped proportionally across the track's actual
  // scrollable range (scrollWidth - clientWidth), not by literal card
  // position. This matters because several cards are visible at once on
  // wide screens, so the browser physically can't scroll as far as
  // "card index * card width" would suggest — index 0 and lastIndex always
  // land exactly on the real start/end of the scrollable range, and every
  // index in between divides it evenly. scrollToIndex and the scroll
  // listener below both use this same mapping, so they can't disagree.
  const maxScrollOf = (track: HTMLDivElement) =>
    Math.max(0, track.scrollWidth - track.clientWidth)

  // Scrolls only the track itself (via its own scrollLeft), never the page —
  // scrollIntoView was bubbling up to the window because the card wasn't
  // fully visible vertically, so it dragged the whole section into view too.
  const scrollToIndex = (index: number) => {
    const track = scrollRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(index, lastIndex))
    const maxScroll = maxScrollOf(track)
    const target = lastIndex > 0 ? (clamped / lastIndex) * maxScroll : 0
    track.scrollTo({ left: target, behavior: "smooth" })
    setActiveIndex(clamped)
  }

  // Keep activeIndex synced with native drag/swipe scrolling — without this,
  // the dots, the disabled prev/next state, and clicks after a manual swipe
  // all act on a stale index instead of whatever card is actually in view.
  useEffect(() => {
    const track = scrollRef.current
    if (!track) return

    const handleScroll = () => {
      const maxScroll = maxScrollOf(track)
      const index =
        maxScroll > 0
          ? Math.round((track.scrollLeft / maxScroll) * lastIndex)
          : 0
      setActiveIndex(Math.max(0, Math.min(index, lastIndex)))
    }

    track.addEventListener("scroll", handleScroll, { passive: true })
    return () => track.removeEventListener("scroll", handleScroll)
  }, [lastIndex])

  return (
    <div className="section-container-wide">
      <div className="mb-8 flex items-center justify-between">
        {/* Dot pagination — one dot per advisor, matches the small total */}
        <div className="flex gap-2">
          {advisors.map((advisor, i) => (
            <button
              key={advisor.name}
              type="button"
              onClick={() => scrollToIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === activeIndex
                  ? "w-6 bg-foreground"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to ${advisor.name}`}
            />
          ))}
        </div>

        {/* Prev/Next — the row also scrolls natively via drag/swipe */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            className={navButton}
            aria-label="Previous advisor"
          >
            <ChevronLeft className="size-4 text-foreground/70" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === lastIndex}
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
