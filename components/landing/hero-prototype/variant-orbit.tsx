"use client"

// PROTOTYPE (ticket #23) variant C: campfire orbit. The Fire sits in the middle, Kindlings ring it,
// four ignite per pass. Square, so it scales down to a phone without re-layout.
import { m as motion } from "motion/react"
import { Flame, Sparkles, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { HeroCopy, PlusNote } from "./hero-copy"
import { KINDLINGS } from "./kindlings"
import { SUPPORTS_STAGE, type PipelineState } from "./use-pipeline-loop"

const C = 200
const R = 150
// Gap on the left is where the person comes in
const ANGLES = [-120, -60, 0, 60, 120]
const SLOTS = KINDLINGS.map((k, i) => {
  const a = (ANGLES[i] * Math.PI) / 180
  return { k, x: C + R * Math.cos(a), y: C + R * Math.sin(a) }
})
const HUMAN = { x: 22, y: C }

const ease = [0.16, 1, 0.3, 1] as const
const pct = (v: number) => `${(v / 400) * 100}%`

export function VariantOrbit({ state }: { state: PipelineState }) {
  const { stage, set, pass } = state
  const supporting = stage >= SUPPORTS_STAGE
  return (
    <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:gap-10">
      <div className="flex-1">
        <HeroCopy align="start" />
      </div>

      <div className="w-full max-w-[22rem] shrink-0 md:max-w-md" aria-hidden>
        <div className="relative aspect-square w-full">
          <svg viewBox="0 0 400 400" className="absolute inset-0 size-full">
            <motion.circle
              cx={C}
              cy={C}
              r={R}
              fill="none"
              strokeDasharray="3 6"
              className="stroke-xo-outline-variant"
              animate={{ opacity: stage >= 2 ? 1 : 0.25 }}
              transition={{ duration: 0.8, ease }}
            />
            <motion.line
              x1={HUMAN.x + 18}
              y1={C}
              x2={C - 34}
              y2={C}
              strokeWidth={1.5}
              className="stroke-primary"
              initial={false}
              animate={{
                pathLength: stage >= 1 ? 1 : 0,
                opacity: stage >= 1 ? 1 : 0,
              }}
              transition={{ duration: 0.8, ease }}
            />
            {SLOTS.map(({ k, x, y }) => {
              const rank = set.findIndex((s) => s.id === k.id)
              const on = supporting && rank !== -1
              return (
                <motion.line
                  key={`${pass}-${k.id}`}
                  x1={C}
                  y1={C}
                  x2={x}
                  y2={y}
                  strokeWidth={1.5}
                  className="stroke-accent"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: on ? 1 : 0, opacity: on ? 0.8 : 0 }}
                  transition={{
                    duration: 0.7,
                    delay: on ? rank * 0.12 : 0,
                    ease,
                  }}
                />
              )
            })}
          </svg>

          <Positioned x={HUMAN.x} y={HUMAN.y}>
            <motion.div
              animate={{ opacity: 1, scale: stage === 0 ? 1.1 : 1 }}
              transition={{ duration: 0.6, ease }}
              className="flex size-9 items-center justify-center rounded-full border border-xo-outline-variant bg-xo-surface-low text-foreground"
            >
              <User className="size-4" />
            </motion.div>
          </Positioned>

          <Positioned x={C} y={C}>
            <div className="relative flex flex-col items-center">
              <motion.div
                className="absolute top-1/2 left-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-2xl"
                animate={{
                  opacity: stage >= 1 ? 1 : 0.2,
                  scale: stage === 1 ? 1.2 : 1,
                }}
                transition={{ duration: 0.9, ease }}
              />
              <div
                className={cn(
                  "relative flex size-16 items-center justify-center rounded-full border transition-colors duration-500",
                  stage >= 1
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-xo-outline-variant bg-xo-surface-low text-muted-foreground"
                )}
              >
                <Flame className="size-7" />
              </div>
              <div className="absolute top-full mt-2 w-40 text-center">
                <Caption show={stage === 1}>The Fire reflects it back</Caption>
                <Caption show={stage === 2}>Needs support right now?</Caption>
                <Caption show={stage >= 3}>
                  <Sparkles className="mr-1 inline size-3 text-accent" />
                  Kindling picks four
                </Caption>
              </div>
            </div>
          </Positioned>

          {SLOTS.map(({ k, x, y }) => {
            const rank = set.findIndex((s) => s.id === k.id)
            const on = supporting && rank !== -1
            const Icon = k.icon
            return (
              <Positioned key={k.id} x={x} y={y}>
                <motion.div
                  className="flex flex-col items-center gap-1"
                  animate={{
                    opacity: on ? 1 : stage >= 2 ? 0.35 : 0.2,
                    scale: on ? 1.08 : 1,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: on ? rank * 0.12 : 0,
                    ease,
                  }}
                >
                  <div
                    className={cn(
                      "flex size-10 items-center justify-center rounded-full transition-colors duration-500",
                      on ? k.bg : "bg-xo-surface-low"
                    )}
                  >
                    <Icon className={cn("size-4", k.tone)} />
                  </div>
                  <span className="text-[11px] whitespace-nowrap text-foreground">
                    {k.name}
                  </span>
                </motion.div>
              </Positioned>
            )
          })}

          <Positioned x={HUMAN.x} y={HUMAN.y + 34}>
            <span className="text-[11px] text-muted-foreground">You</span>
          </Positioned>
        </div>
        <PlusNote className="mt-2 text-center" />
      </div>
    </div>
  )
}

function Positioned({
  x,
  y,
  children,
}: {
  x: number
  y: number
  children: React.ReactNode
}) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: pct(x), top: pct(y) }}
    >
      {children}
    </div>
  )
}

function Caption({
  show,
  children,
}: {
  show: boolean
  children: React.ReactNode
}) {
  return (
    <motion.p
      className="absolute inset-x-0 text-xs text-muted-foreground"
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 4 }}
      transition={{ duration: 0.5, ease }}
    >
      {children}
    </motion.p>
  )
}
