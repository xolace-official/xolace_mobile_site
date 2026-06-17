"use client"

import Image from "next/image"
import { m as motion } from "motion/react"
import { Sparkles } from "lucide-react"
import { teasers, type Teaser } from "./pricing-data"

// A teaser advertises something true about you that you can't quite read yet —
// the opposite of a padlock row (strategy §6). The blur is the whole point.

function TeaserCard({
  teaser,
  index,
  onSelect,
}: {
  teaser: Teaser
  index: number
  onSelect: (teaser: Teaser) => void
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(teaser)}
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

      <div className="relative my-5 h-32 w-full overflow-hidden rounded-lg">
        <Image
          src={teaser.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="[mask-image:linear-gradient(to_bottom,transparent,black_30%,black)] object-cover blur-[8px]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-card/0 via-card/10 to-card" />
      </div>

      <p className="mt-auto font-serif text-sm leading-snug text-muted-foreground/45 italic transition-colors duration-500 group-hover:text-foreground/70">
        {teaser.caption}
      </p>
    </motion.button>
  )
}

export function InsightTeasers({
  onSelect,
}: {
  onSelect: (teaser: Teaser) => void
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {teasers.map((t, i) => (
        <TeaserCard key={t.id} teaser={t} index={i} onSelect={onSelect} />
      ))}
    </div>
  )
}
