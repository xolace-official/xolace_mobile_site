"use client"

import { m as motion } from "motion/react"
import { Sparkles } from "lucide-react"
import {
  teasers,
  constellationStars,
  constellationLines,
  type Teaser,
  type TeaserId,
} from "./pricing-data"

// A teaser advertises something true about you that you can't quite read yet —
// the opposite of a padlock row (strategy §6). The blur is the whole point.

function ConstellationVisual() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full" aria-hidden>
      <g
        className="text-accent"
        stroke="currentColor"
        strokeWidth={0.5}
        opacity={0.35}
      >
        {constellationLines.map(([a, b], i) => (
          <line
            key={i}
            x1={constellationStars[a].cx}
            y1={constellationStars[a].cy}
            x2={constellationStars[b].cx}
            y2={constellationStars[b].cy}
          />
        ))}
      </g>
      {constellationStars.map((s, i) => (
        <circle
          key={i}
          cx={s.cx}
          cy={s.cy}
          r={s.r}
          className={s.accent ? "fill-accent" : "fill-foreground"}
          opacity={s.accent ? 0.8 : 0.4}
        />
      ))}
    </svg>
  )
}

function LanguageVisual() {
  // Two real words sit clear above the fold; the rest are fogged bars.
  const fogged = [44, 30, 52, 38, 46]
  return (
    <div className="flex h-full w-full flex-col justify-center gap-2.5 px-1">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full border border-accent/25 bg-accent/[0.06] px-3 py-1 font-serif text-sm text-foreground/80">
          trapped
        </span>
        <span className="rounded-full border border-accent/25 bg-accent/[0.06] px-3 py-1 font-serif text-sm text-foreground/80">
          invisible
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {fogged.map((w, i) => (
          <span
            key={i}
            className="h-7 rounded-full bg-muted-foreground/15"
            style={{ width: w }}
          />
        ))}
      </div>
    </div>
  )
}

function ClarityVisual() {
  // One sharp number; the trend that earned it stays fogged.
  const points =
    "4,46 24,40 44,42 64,32 84,34 104,24 124,26 144,16 164,18 184,8"
  return (
    <svg viewBox="0 0 188 56" className="h-full w-full" aria-hidden>
      <polyline
        points={points}
        fill="none"
        className="text-accent"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.55}
      />
      <polygon
        points={`${points} 184,56 4,56`}
        className="fill-accent"
        opacity={0.08}
      />
    </svg>
  )
}

const visuals: Record<TeaserId, () => React.ReactElement> = {
  constellation: ConstellationVisual,
  language: LanguageVisual,
  clarity: ClarityVisual,
}

function TeaserCard({
  teaser,
  index,
  onSelect,
}: {
  teaser: Teaser
  index: number
  onSelect: () => void
}) {
  const Visual = visuals[teaser.id]
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-xo-outline-variant/15 bg-card p-5 text-left transition-colors duration-500 hover:border-accent/30"
    >
      <span className="mb-4 flex items-center gap-1.5 self-start rounded-full border border-accent/20 px-2 py-0.5 font-mono text-[9px] tracking-[0.16em] text-accent/70 uppercase">
        <Sparkles className="size-2.5" strokeWidth={2} />
        Xolace+
      </span>

      <p className="font-serif text-2xl leading-none font-light text-foreground">
        {teaser.stat}
      </p>
      <p className="mt-1.5 text-xs leading-snug font-light text-muted-foreground/55">
        {teaser.statLabel}
      </p>

      <div className="relative my-5 h-24 w-full">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black)] blur-[5px]">
          <Visual />
        </div>
        <div className="screen-content-gradient pointer-events-none absolute inset-0" />
      </div>

      <p className="mt-auto font-serif text-sm leading-snug text-muted-foreground/45 italic transition-colors duration-500 group-hover:text-foreground/70">
        {teaser.caption}
      </p>
    </motion.button>
  )
}

export function InsightTeasers({ onSelect }: { onSelect: () => void }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {teasers.map((t, i) => (
        <TeaserCard key={t.id} teaser={t} index={i} onSelect={onSelect} />
      ))}
    </div>
  )
}
