"use client"

// PROTOTYPE (ticket #23) variant F: the product's own metaphor, literally. Kindling lays four
// sticks over the Fire, each one a support, and a different four each pass.
import { AnimatePresence, m as motion } from "motion/react"
import { cn } from "@/lib/utils"
import { HeroCopy, PlusNote } from "./hero-copy"
import { STROKE, scenarioFor } from "./scenarios"
import { SUPPORTS_STAGE, type PipelineState } from "./use-pipeline-loop"

const ease = [0.16, 1, 0.3, 1] as const
const APEX = { x: 200, y: 105 }
const BASE_Y = 296
// Laid alternately left, right, left, right, like building a real teepee
const BASE_X = [70, 330, 140, 260]

function stickPath(baseX: number) {
  const end = {
    x: APEX.x + (APEX.x - baseX) * 0.24,
    y: APEX.y + (APEX.y - BASE_Y) * 0.24,
  }
  // Right-hand sticks run end→base so their label never reads upside down
  return baseX < APEX.x
    ? `M ${baseX} ${BASE_Y} L ${end.x} ${end.y}`
    : `M ${end.x} ${end.y} L ${baseX} ${BASE_Y}`
}

export function VariantSticks({ state }: { state: PipelineState }) {
  const { stage, pass, still } = state
  const scenario = scenarioFor(pass)
  const laid = stage >= SUPPORTS_STAGE
  const lit = stage >= 1

  return (
    <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:gap-12">
      <div className="flex-1">
        <HeroCopy align="start" />
      </div>

      <div aria-hidden className="w-full max-w-md shrink-0">
        <div className="h-28 text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={`${pass}-${lit}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6, ease }}
              className={cn(
                "text-xl leading-snug text-balance md:text-2xl",
                lit
                  ? "font-medium text-foreground"
                  : "text-muted-foreground italic"
              )}
            >
              {lit ? scenario.mirror : scenario.share}
            </motion.p>
          </AnimatePresence>
          <motion.p
            className="mt-3 text-sm text-muted-foreground"
            animate={{ opacity: stage >= 2 ? 1 : 0 }}
            transition={{ duration: 0.6, ease }}
          >
            {stage >= 3
              ? "Kindling lays four for today"
              : "Would some support help right now?"}
          </motion.p>
        </div>

        <div className="relative">
          <svg viewBox="0 0 400 330" className="w-full overflow-visible">
            <ellipse
              cx={200}
              cy={306}
              rx={150}
              ry={9}
              className="fill-xo-surface-bright/60"
            />
            {scenario.picks.map(({ kindling }, i) => {
              const d = stickPath(BASE_X[i])
              const id = `stick-${pass}-${i}`
              const delay = laid && !still ? i * 0.15 : 0
              return (
                <g key={id}>
                  <motion.path
                    id={id}
                    d={d}
                    strokeWidth={16}
                    strokeLinecap="round"
                    fill="none"
                    className={STROKE[kindling.id]}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: laid ? 1 : 0,
                      opacity: laid ? 0.45 : 0,
                    }}
                    transition={{ duration: 0.8, delay, ease }}
                  />
                  <motion.text
                    className="fill-foreground text-[12px] font-medium"
                    dy={4}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: laid ? 1 : 0 }}
                    transition={{
                      duration: 0.5,
                      delay: laid && !still ? delay + 0.6 : 0,
                    }}
                  >
                    <textPath
                      href={`#${id}`}
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      {kindling.name}
                    </textPath>
                  </motion.text>
                </g>
              )
            })}
          </svg>

          <div className="absolute top-[86%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="relative flex items-center justify-center"
              animate={{ opacity: lit ? 1 : 0.3, scale: lit ? 1 : 0.7 }}
              transition={{ duration: 1, ease }}
            >
              <motion.div
                className="absolute size-40 rounded-full bg-primary/30 blur-3xl"
                animate={still ? undefined : { scale: [1, 1.1, 0.95, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute size-16 rounded-full bg-primary/60 blur-xl" />
              <motion.div
                className="size-6 rounded-full bg-chart-5/90 blur-md"
                animate={still ? undefined : { scale: [1, 1.3, 0.9, 1.15, 1] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
        <PlusNote className="mt-2 text-center" />
      </div>
    </div>
  )
}
