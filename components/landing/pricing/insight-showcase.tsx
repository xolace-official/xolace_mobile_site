"use client"

import { useState } from "react"
import Image from "next/image"
import { m as motion, AnimatePresence } from "motion/react"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Iphone } from "@/components/ui/iphone"
import { cn } from "@/lib/utils"
import { teasers, type Teaser } from "./pricing-data"

// A teaser advertises something true about you that you can't quite read yet —
// the opposite of a padlock row (strategy §6). The blur is the whole point.

function TeaserRow({
  teaser,
  index,
  isActive,
  onSelect,
}: {
  teaser: Teaser
  index: number
  isActive: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex w-full flex-col gap-1 rounded-xl border border-transparent px-4 py-3.5 text-left transition-all duration-300",
        isActive
          ? "border-accent/15 bg-accent/6 hover:bg-accent/10"
          : "hover:border-border/70 hover:bg-accent/4"
      )}
    >
      <span className="flex items-center gap-2.5">
        <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/25 tabular-nums">
          0{index + 1}
        </span>
        <span
          className={cn(
            "size-1.5 shrink-0 rounded-full transition-colors duration-300",
            isActive ? "bg-accent" : "bg-accent/30"
          )}
        />
        <span
          className={cn(
            "font-serif text-lg leading-none font-light transition-colors duration-300",
            isActive ? "text-foreground" : "text-foreground/70"
          )}
        >
          {teaser.stat}
        </span>
        {teaser.ready && (
          <span className="rounded-full border border-accent/40 px-2 py-0.5 font-mono text-[9px] tracking-[0.14em] text-muted-foreground/60 uppercase dark:border-accent/25 dark:text-accent/70">
            Live
          </span>
        )}
      </span>
      <span className="pl-4 text-xs leading-snug font-light text-muted-foreground/55">
        {teaser.statLabel}
      </span>
      <span
        className={cn(
          "pl-4 font-serif text-sm leading-snug italic transition-colors duration-300",
          isActive ? "text-muted-foreground/70" : "text-muted-foreground/40"
        )}
      >
        {teaser.caption}
      </span>
    </button>
  )
}

export function InsightShowcase({
  onSelect,
}: {
  onSelect: (teaser: Teaser) => void
}) {
  const [activeIdx, setActiveIdx] = useState(0)
  const activeTeaser = teasers[activeIdx]

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
      <div className="order-2 mt-10 flex-1 lg:order-1 lg:mt-0">
        <span className="mb-3 flex items-center gap-1.5 self-start font-mono text-[10px] tracking-[0.18em] text-muted-foreground/50 uppercase dark:text-accent/70">
          <Sparkles className="size-2.5" strokeWidth={2} />
          Xolace+ insight layer
          <span className="text-muted-foreground/25 dark:text-accent/30">
            · {teasers.length} preview{teasers.length === 1 ? "" : "s"}
          </span>
        </span>

        <div className="flex flex-col gap-1">
          {teasers.map((t, i) => (
            <TeaserRow
              key={t.id}
              teaser={t}
              index={i}
              isActive={activeIdx === i}
              onSelect={() => setActiveIdx(i)}
            />
          ))}
        </div>
      </div>

      <div className="order-1 mx-auto flex w-55 shrink-0 flex-col items-center gap-4 md:w-65 lg:order-2 lg:mx-0">
        <Iphone>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTeaser.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={activeTeaser.image}
                alt=""
                fill
                sizes="260px"
                className="mask-[linear-gradient(to_bottom,transparent,black_10%,black)] object-cover object-top blur-[3px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-card/0 via-card/10 to-card" />
            </motion.div>
          </AnimatePresence>
        </Iphone>

        <Button
          variant="outline"
          onClick={() => onSelect(activeTeaser)}
          className="w-full gap-1.5 rounded-full border-accent/40 text-foreground/75 hover:bg-accent/10 hover:text-foreground dark:border-accent/30 dark:text-accent dark:hover:text-accent"
        >
          See this for real
          <ArrowUpRight className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}
