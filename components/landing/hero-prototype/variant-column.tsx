"use client"

// PROTOTYPE (ticket #23) variant A: vertical rail beside the headline, stacks under it on phones.
import { m as motion } from "motion/react"
import {
  Flame,
  HelpCircle,
  Sparkles,
  User,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { HeroCopy, PlusNote } from "./hero-copy"
import { SUPPORTS_STAGE, type PipelineState } from "./use-pipeline-loop"

const STEPS: { at: number; icon: LucideIcon; title: string; sub: string }[] = [
  {
    at: 0,
    icon: User,
    title: "You say what's true",
    sub: "In your own words, typed or spoken",
  },
  {
    at: 1,
    icon: Flame,
    title: "The Fire reflects it back",
    sub: "What it hears underneath",
  },
  { at: 2, icon: HelpCircle, title: "Need support right now?", sub: "If yes…" },
  {
    at: 3,
    icon: Sparkles,
    title: "Kindling picks four for today",
    sub: "From a fixed shelf of supports",
  },
]

const ease = [0.16, 1, 0.3, 1] as const

export function VariantColumn({ state }: { state: PipelineState }) {
  const { stage, set, pass } = state
  return (
    <div className="flex w-full flex-col items-center gap-14 lg:flex-row lg:gap-16">
      <div className="flex-1">
        <HeroCopy align="start" />
      </div>

      <div className="w-full max-w-sm shrink-0" aria-hidden>
        {STEPS.map((step, i) => {
          const lit = stage >= step.at
          const Icon = step.icon
          return (
            <div key={step.title}>
              <motion.div
                animate={{ opacity: lit ? 1 : 0.3 }}
                transition={{ duration: 0.6, ease }}
                className="flex items-center gap-4"
              >
                <div
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-500",
                    lit && stage === step.at
                      ? "border-primary bg-primary/15 text-primary"
                      : "border-xo-outline-variant bg-xo-surface-low text-muted-foreground"
                  )}
                >
                  <Icon className="size-4" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">
                    {step.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{step.sub}</p>
                </div>
              </motion.div>
              {i < STEPS.length - 1 && <Connector filled={stage > step.at} />}
            </div>
          )
        })}

        <Connector filled={stage >= SUPPORTS_STAGE} />
        <div className="grid grid-cols-2 gap-2">
          {set.map((k, i) => {
            const Icon = k.icon
            return (
              <motion.div
                key={`${pass}-${k.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{
                  opacity: stage >= SUPPORTS_STAGE ? 1 : 0,
                  y: stage >= SUPPORTS_STAGE ? 0 : 8,
                }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className={cn(
                  "flex items-center gap-2 rounded-xl px-3 py-2.5",
                  k.bg
                )}
              >
                <Icon className={cn("size-4 shrink-0", k.tone)} />
                <span className="text-xs font-medium text-foreground">
                  {k.name}
                </span>
              </motion.div>
            )
          })}
        </div>
        <PlusNote className="mt-4 text-left" />
      </div>
    </div>
  )
}

function Connector({ filled }: { filled: boolean }) {
  return (
    <div className="relative ml-5 h-7 w-px bg-xo-outline-variant">
      <motion.div
        className="absolute inset-0 origin-top bg-primary"
        animate={{ scaleY: filled ? 1 : 0 }}
        transition={{ duration: 0.5, ease }}
      />
    </div>
  )
}
