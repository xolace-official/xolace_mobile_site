"use client"

// PROTOTYPE (ticket #23) variant H: the visitor drives it. Picking a feeling word (like the app's
// word-cloud entry) plays a pass for that word; untouched, it cycles through the words by itself.
import { useState } from "react"
import { m as motion } from "motion/react"
import { cn } from "@/lib/utils"
import { HeroCopy, PlusNote } from "./hero-copy"
import { DOT, SCENARIOS } from "./scenarios"
import { SUPPORTS_STAGE, type PipelineState } from "./use-pipeline-loop"

const ease = [0.16, 1, 0.3, 1] as const

export function VariantTry({ state }: { state: PipelineState }) {
  const { stage, pass, still, restart } = state
  const [chosen, setChosen] = useState<number | null>(null)
  const index = chosen ?? (pass - 1) % SCENARIOS.length
  const scenario = SCENARIOS[index]

  const choose = (i: number) => {
    setChosen(i)
    restart()
  }

  return (
    <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:gap-14">
      <div className="flex-1">
        <HeroCopy align="start" />
      </div>

      <div className="w-full max-w-md shrink-0 text-left">
        <p className="text-sm text-muted-foreground">How does today feel?</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {SCENARIOS.map((s, i) => (
            <button
              key={s.feeling}
              type="button"
              aria-pressed={i === index}
              onClick={() => choose(i)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                i === index
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-xo-outline-variant text-foreground hover:border-primary/60"
              )}
            >
              {s.feeling}
            </button>
          ))}
        </div>

        {/* Announce only once the visitor has chosen; the autoplay would otherwise talk over everything */}
        <div
          className="mt-8 min-h-80"
          aria-live={chosen === null ? "off" : "polite"}
        >
          <motion.p
            key={`m-${pass}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: stage >= 1 ? 1 : 0, y: stage >= 1 ? 0 : 10 }}
            transition={{ duration: 0.8, ease }}
            className="text-2xl leading-snug font-medium text-balance text-foreground"
          >
            {scenario.mirror}
          </motion.p>

          <motion.p
            className="mt-4 text-sm text-muted-foreground"
            initial={false}
            animate={{ opacity: stage >= 2 ? 1 : 0 }}
            transition={{ duration: 0.6, ease }}
          >
            {stage >= 3
              ? "Kindling picked four for today:"
              : "Would some support help right now?"}
          </motion.p>

          <ul className="mt-4 space-y-3">
            {scenario.picks.map(({ kindling, why }, i) => (
              <motion.li
                key={`${pass}-${kindling.id}`}
                initial={{ opacity: 0, x: -6 }}
                animate={{
                  opacity: stage >= SUPPORTS_STAGE ? 1 : 0,
                  x: stage >= SUPPORTS_STAGE ? 0 : -6,
                }}
                transition={{
                  duration: 0.5,
                  delay: stage >= SUPPORTS_STAGE && !still ? i * 0.12 : 0,
                  ease,
                }}
                className="flex items-baseline gap-3"
              >
                <span
                  className={cn(
                    "size-2 shrink-0 -translate-y-px rounded-full",
                    DOT[kindling.id]
                  )}
                />
                <span className="text-sm">
                  <span className="font-medium text-foreground">
                    {kindling.name}
                  </span>{" "}
                  <span className="text-muted-foreground">{why}</span>
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          These are examples. In the app, the Fire responds to what you actually
          say.
        </p>
        <PlusNote className="mt-1" />
      </div>
    </div>
  )
}
