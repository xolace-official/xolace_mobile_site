"use client"

// One scene, not two halves: the flow starts in the copy column (the visitor's words), beams
// across into the Fire, and fans out to the day's four Kindlings from the shelf of five.
import { createRef, useRef, useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Spotlight } from "@/components/ui/spotlight"
import { KINDLINGS } from "@/lib/kindlings"
import { Beam, useBeamPaths, type Edge } from "./beams"
import { HeroCopy, PlusNote } from "./hero-copy"
import {
  FireNode,
  ForkNode,
  KindlingChip,
  KindlingNode,
  ShareLine,
} from "./pipeline-nodes"
import { scenarioFor } from "./scenarios"
import {
  HOLD_STAGE,
  SUPPORTS_STAGE,
  usePipelineLoop,
} from "./use-pipeline-loop"

const shelfNames = new Intl.ListFormat("en", { type: "conjunction" }).format(
  KINDLINGS.map((k) => k.name)
)

export function Hero() {
  const { stage, pass, still } = usePipelineLoop()
  const scenario = scenarioFor(pass)
  const chosen = scenario.lit
  // Server renders the desktop row; phones re-measure into a column after hydration
  const axis = useMediaQuery("(min-width: 1024px)", true) ? "x" : "y"

  const containerRef = useRef<HTMLDivElement>(null)
  const shareRef = useRef<HTMLDivElement>(null)
  const fireRef = useRef<HTMLDivElement>(null)
  const forkRef = useRef<HTMLDivElement>(null)
  const noRef = useRef<HTMLDivElement>(null)
  const kindlingRef = useRef<HTMLDivElement>(null)
  const [chipRefs] = useState(() =>
    KINDLINGS.map(() => createRef<HTMLDivElement>())
  )

  const edges: Edge[] = [
    { id: "share", from: shareRef, to: fireRef },
    { id: "fire", from: fireRef, to: forkRef },
    { id: "no", from: forkRef, to: noRef, cross: true },
    { id: "fork", from: forkRef, to: kindlingRef },
    ...KINDLINGS.map((k, i) => ({
      id: k.id,
      from: kindlingRef,
      to: chipRefs[i],
    })),
  ]
  const { paths, size } = useBeamPaths(containerRef, edges, axis)

  const hold = !still && stage === HOLD_STAGE
  const once = (at: number) => (!still && stage >= at ? `p${pass}` : null)

  return (
    <section className="section-spacing section-spacing-x relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <Spotlight duration={8} xOffset={80} />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div
          ref={containerRef}
          className="relative grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]"
        >
          <svg
            aria-hidden
            width={size.width}
            height={size.height}
            viewBox={`0 0 ${size.width} ${size.height}`}
            className="pointer-events-none absolute inset-0 overflow-visible"
          >
            <Beam
              d={paths.share}
              lit={stage >= 1}
              color="var(--primary)"
              pulseKey={once(1)}
              ambient={hold}
            />
            <Beam
              d={paths.fire}
              lit={stage >= 2}
              color="var(--primary)"
              pulseKey={once(2)}
              ambient={hold}
              pulseDelay={0.3}
            />
            <Beam
              d={paths.no}
              lit={false}
              color="var(--muted-foreground)"
              faint
            />
            <Beam
              d={paths.fork}
              lit={stage >= 3}
              color="var(--accent)"
              pulseKey={once(3)}
              ambient={hold}
              pulseDelay={0.6}
            />
            {KINDLINGS.map((k) => {
              const pick = chosen.includes(k.id)
              return (
                <Beam
                  key={k.id}
                  d={paths[k.id]}
                  lit={pick && stage >= SUPPORTS_STAGE}
                  color={k.color}
                  pulseKey={pick ? once(SUPPORTS_STAGE) : null}
                  pulseDelay={chosen.indexOf(k.id) * 0.12}
                  ambient={hold && pick}
                  faint={!pick}
                />
              )
            })}
          </svg>

          <div className="relative z-10">
            <HeroCopy
              slot={
                <ShareLine
                  ref={shareRef}
                  key={`share-${pass}`}
                  text={scenario.share}
                  still={still}
                />
              }
            />
          </div>

          <p className="sr-only">
            How Xolace works: you say what&apos;s true in your own words. The
            Fire reflects back what it hears underneath. If you need support
            right now, Kindling builds four supports for today from a shelf of{" "}
            {KINDLINGS.length}: {shelfNames}. Kindling is part of Xolace Plus,
            one set a day.
          </p>

          <div
            aria-hidden
            className="relative z-10 flex flex-col items-center lg:py-24"
          >
            <div className="flex w-full flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
              <FireNode
                ref={fireRef}
                lit={stage >= 1}
                mirror={scenario.mirror}
                pass={pass}
              />
              <ForkNode ref={forkRef} noRef={noRef} lit={stage >= 2} />
              <KindlingNode ref={kindlingRef} lit={stage >= 3} />
              <div className="grid w-full max-w-sm grid-cols-5 gap-1 lg:flex lg:w-auto lg:flex-col lg:gap-2.5">
                {KINDLINGS.map((k, i) => (
                  <KindlingChip
                    key={k.id}
                    ref={chipRefs[i]}
                    kindling={k}
                    lit={chosen.includes(k.id) && stage >= SUPPORTS_STAGE}
                    delay={Math.max(0, chosen.indexOf(k.id)) * 0.12 + 0.45}
                  />
                ))}
              </div>
            </div>
            <PlusNote className="mt-12 text-center lg:mt-14 lg:self-end lg:text-right" />
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 hidden h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/4 blur-[140px] md:block" />
        <div className="absolute right-1/3 bottom-0 hidden h-87.5 w-87.5 rounded-full bg-accent/4 blur-[100px] md:block" />
      </div>
    </section>
  )
}
