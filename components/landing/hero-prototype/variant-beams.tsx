"use client"

// PROTOTYPE (ticket #23) variant I: one scene, not two halves. The flow starts inside the copy
// column (the visitor's words), beams across into the Fire, and fans out to today's Kindlings.
import {
  createRef,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type RefObject,
} from "react"
import { m as motion } from "motion/react"
import { Flame, Sparkles, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { HeroCopy, PlusNote } from "./hero-copy"
import { KINDLINGS } from "./kindlings"
import { COLOR, INK, inkVar, scenarioFor } from "./scenarios"
import { Beam, useBeamPaths, type Edge } from "./beams"
import { SUPPORTS_STAGE, type PipelineState } from "./use-pipeline-loop"

const ease = [0.16, 1, 0.3, 1] as const
const HOLD_STAGE = 5

const lgQuery = "(min-width: 1024px)"
function useIsDesktop() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(lgQuery)
      mq.addEventListener("change", cb)
      return () => mq.removeEventListener("change", cb)
    },
    () => window.matchMedia(lgQuery).matches,
    () => true
  )
}

export function VariantBeams({ state }: { state: PipelineState }) {
  const { stage, pass, still } = state
  const scenario = scenarioFor(pass)
  const chosen = scenario.picks.map((p) => p.kindling.id)
  const axis = useIsDesktop() ? "x" : "y"

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

  const live = !still
  const hold = live && stage === HOLD_STAGE
  const once = (at: number) => (live && stage >= at ? `p${pass}` : null)

  return (
    <div
      ref={containerRef}
      className="relative grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-14"
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
        <Beam d={paths.no} lit={false} color="var(--muted-foreground)" faint />
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
              color={COLOR[k.id]}
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
          align="start"
          compact
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
        How Xolace works: you say what&apos;s true in your own words. The Fire
        reflects back what it hears underneath. If you need support right now,
        Kindling picks four supports for today from a fixed shelf of five: Sit
        with this, Vessa, Xolacers, Lantern and Trusted Bridge. Kindling is part
        of Xolace Plus, one set a day.
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

          <div ref={forkRef} className="relative">
            <motion.div
              initial={false}
              animate={{ opacity: stage >= 2 ? 1 : 0.4 }}
              transition={{ duration: 0.7, ease }}
              className={cn(
                "size-5 rotate-45 rounded-[5px] border transition-colors duration-700",
                stage >= 2
                  ? "border-primary bg-primary/20"
                  : "border-xo-outline-variant bg-xo-surface-low"
              )}
            />
            <p className="absolute top-1/2 left-full ml-4 w-max -translate-y-1/2 text-xs text-muted-foreground lg:top-auto lg:bottom-full lg:left-1/2 lg:mb-4 lg:ml-0 lg:translate-x-[-50%] lg:translate-y-0">
              Need support right now?
            </p>
            <div
              ref={noRef}
              className="absolute top-1/2 right-full mr-16 w-max -translate-y-1/2 text-xs text-muted-foreground/70 lg:top-full lg:right-auto lg:left-1/2 lg:mt-20 lg:mr-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              If not, you keep talking
            </div>
          </div>

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
  )
}

function ShareLine({
  ref,
  text,
  still,
}: {
  ref: RefObject<HTMLDivElement | null>
  text: string
  still: boolean
}) {
  const [shown, setShown] = useState(still ? text.length : 0)
  useEffect(() => {
    if (still) return
    const id = setInterval(() => {
      setShown((n) => {
        if (n >= text.length) clearInterval(id)
        return Math.min(text.length, n + 2)
      })
    }, 28)
    return () => clearInterval(id)
  }, [still, text])
  const typing = shown < text.length

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.35, ease }}
      className="mx-auto mt-10 w-full max-w-md lg:mx-0 lg:mt-9"
    >
      <div
        ref={ref}
        className="flex items-start gap-3 rounded-2xl border border-xo-outline-variant/70 bg-xo-surface-low/70 px-4 py-3 text-left backdrop-blur-sm"
      >
        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-xo-surface-bright text-muted-foreground">
          <User className="size-3.5" />
        </span>
        <p className="min-h-[2.75rem] text-sm leading-relaxed text-foreground lg:min-h-0">
          {text.slice(0, shown)}
          {typing && (
            <span className="ml-px inline-block h-[1.05em] w-px translate-y-[0.15em] animate-pulse bg-primary" />
          )}
        </p>
      </div>
    </motion.div>
  )
}

function FireNode({
  ref,
  lit,
  mirror,
  pass,
}: {
  ref: RefObject<HTMLDivElement | null>
  lit: boolean
  mirror: string
  pass: number
}) {
  return (
    // The ref wraps orb and caption so on phones the outgoing beam leaves below the caption
    <div ref={ref} className="relative flex flex-col items-center">
      {/* Bleeds back under the headline so both columns sit in the same light */}
      <motion.div
        initial={false}
        animate={{ opacity: lit ? 1 : 0.35, scale: lit ? 1 : 0.85 }}
        transition={{ duration: 1.4, ease }}
        className="pointer-events-none absolute top-10 left-1/2 -z-10 size-[30rem] -translate-1/2 rounded-full bg-primary/12 blur-[110px]"
      />
      <div className="relative flex size-18 items-center justify-center lg:size-20">
        <motion.div
          initial={false}
          animate={{ opacity: lit ? 1 : 0 }}
          transition={{ duration: 0.9, ease }}
          className="animate-gentle-pulse absolute inset-0 rounded-full bg-primary/25 blur-md"
        />
        <div
          className={cn(
            "relative flex size-full items-center justify-center rounded-full border transition-colors duration-700",
            lit
              ? "border-primary/60 bg-xo-surface-low text-primary"
              : "border-xo-outline-variant bg-xo-surface-low text-muted-foreground"
          )}
        >
          <Flame className="size-7" strokeWidth={1.5} />
        </div>
      </div>
      <p className="mt-3 text-xs font-medium text-foreground">The Fire</p>
      <motion.p
        key={pass}
        initial={{ opacity: 0 }}
        animate={{ opacity: lit ? 1 : 0 }}
        transition={{ duration: 0.9, delay: lit ? 0.5 : 0, ease }}
        className="mt-2 min-h-[3.75rem] max-w-[14rem] text-center text-[13px] leading-snug text-balance text-muted-foreground italic lg:absolute lg:top-full lg:mt-2 lg:w-[11.5rem]"
      >
        {mirror}
      </motion.p>
    </div>
  )
}

function KindlingNode({
  ref,
  lit,
}: {
  ref: RefObject<HTMLDivElement | null>
  lit: boolean
}) {
  return (
    <div ref={ref} className="relative" style={inkVar("var(--accent)")}>
      <div
        className={cn(
          "flex size-12 items-center justify-center rounded-full border transition-colors duration-700",
          lit
            ? cn(INK.border, INK.bg, INK.text)
            : "border-xo-outline-variant bg-xo-surface-low text-muted-foreground"
        )}
      >
        <Sparkles className="size-5" strokeWidth={1.5} />
      </div>
      <div className="absolute top-1/2 left-full ml-4 w-max -translate-y-1/2 text-left lg:top-full lg:left-1/2 lg:mt-3 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0 lg:text-center">
        <p className="text-xs font-medium text-foreground">
          Kindling{" "}
          <span
            className={cn(
              "ml-1 rounded-full border px-1.5 py-px text-[10px] font-medium",
              INK.border,
              INK.bg,
              INK.label
            )}
          >
            Plus
          </span>
        </p>
        <p className="mt-1 text-[11px] text-muted-foreground">
          picks 4 for today
        </p>
      </div>
    </div>
  )
}

function KindlingChip({
  ref,
  kindling,
  lit,
  delay,
}: {
  ref: RefObject<HTMLDivElement | null>
  kindling: (typeof KINDLINGS)[number]
  lit: boolean
  delay: number
}) {
  const Icon = kindling.icon
  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{ opacity: lit ? 1 : 0.45 }}
      transition={{ duration: 0.7, delay: lit ? delay : 0, ease }}
      style={inkVar(COLOR[kindling.id])}
      className={cn(
        "flex flex-col items-center gap-1.5 lg:flex-row lg:gap-2.5 lg:rounded-full lg:border lg:bg-xo-surface-low/60 lg:py-1 lg:pr-4 lg:pl-1",
        // Border colour is harmless below lg, where the chip has no border width
        lit ? INK.border : "border-xo-outline-variant/60"
      )}
    >
      <span
        className={cn(
          "flex size-9 items-center justify-center rounded-full lg:size-7",
          INK.bg
        )}
      >
        <Icon className={cn("size-4 lg:size-3.5", INK.text)} />
      </span>
      <span className="text-center text-[10px] leading-tight text-foreground lg:text-left lg:text-[13px]">
        {kindling.name}
      </span>
    </motion.div>
  )
}
