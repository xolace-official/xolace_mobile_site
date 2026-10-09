"use client"

// PROTOTYPE (ticket #23) variant B: horizontal strip below a centred headline, ending in the sandbox shelf.
// The whole shelf is visible so the visitor sees Kindling choosing 4 of the 5, not inventing support.
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
import { KINDLINGS } from "./kindlings"
import { SUPPORTS_STAGE, type PipelineState } from "./use-pipeline-loop"

const NODES: {
  at: number
  icon: LucideIcon
  label: string
  diamond?: boolean
}[] = [
  { at: 0, icon: User, label: "You" },
  { at: 1, icon: Flame, label: "The Fire" },
  { at: 2, icon: HelpCircle, label: "Needs support?", diamond: true },
  { at: 3, icon: Sparkles, label: "Kindling" },
]

const ease = [0.16, 1, 0.3, 1] as const

export function VariantStrip({ state }: { state: PipelineState }) {
  const { stage, set } = state
  const supporting = stage >= SUPPORTS_STAGE
  return (
    <div className="flex w-full flex-col items-center gap-16">
      <div className="max-w-3xl">
        <HeroCopy align="center" />
      </div>

      <div
        aria-hidden
        className="flex w-full flex-col items-center gap-3 md:flex-row md:gap-0"
      >
        {NODES.map((node) => {
          const lit = stage >= node.at
          const Icon = node.icon
          return (
            <div key={node.label} className="contents">
              <motion.div
                animate={{ opacity: lit ? 1 : 0.3 }}
                transition={{ duration: 0.6, ease }}
                className="flex shrink-0 flex-col items-center gap-2"
              >
                <div
                  className={cn(
                    "flex size-12 items-center justify-center border transition-colors duration-500",
                    node.diamond ? "rotate-45 rounded-lg" : "rounded-full",
                    stage === node.at
                      ? "border-primary bg-primary/15 text-primary"
                      : "border-xo-outline-variant bg-xo-surface-low text-muted-foreground"
                  )}
                >
                  <Icon
                    className={cn("size-5", node.diamond && "-rotate-45")}
                  />
                </div>
                <span className="text-xs font-medium text-foreground">
                  {node.label}
                </span>
              </motion.div>
              <Link filled={stage > node.at} />
            </div>
          )
        })}

        <div className="w-full max-w-xs shrink-0 rounded-2xl border border-dashed border-xo-outline-variant p-3 md:w-56">
          <p className="mb-2 text-[11px] tracking-wide text-muted-foreground uppercase">
            Kindlings
          </p>
          <div className="grid grid-cols-2 gap-1.5 md:grid-cols-1">
            {KINDLINGS.map((k) => {
              const rank = set.findIndex((s) => s.id === k.id)
              const chosen = supporting && rank !== -1
              const Icon = k.icon
              return (
                <motion.div
                  key={k.id}
                  animate={{ opacity: chosen ? 1 : supporting ? 0.25 : 0.5 }}
                  transition={{
                    duration: 0.5,
                    delay: chosen ? rank * 0.12 : 0,
                    ease,
                  }}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-2.5 py-1.5 transition-colors duration-500",
                    chosen ? k.bg : "bg-xo-surface-low"
                  )}
                >
                  <Icon className={cn("size-3.5 shrink-0", k.tone)} />
                  <span className="flex-1 text-left text-xs text-foreground">
                    {k.name}
                  </span>
                  {chosen && (
                    <span className="text-[10px] text-muted-foreground">
                      {rank + 1}
                    </span>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
      <PlusNote className="-mt-10 text-center" />
    </div>
  )
}

function Link({ filled }: { filled: boolean }) {
  return (
    <div className="relative h-6 w-px shrink-0 bg-xo-outline-variant md:mx-2 md:mb-6 md:h-px md:w-auto md:flex-1">
      <motion.div
        className="absolute inset-0 origin-top bg-primary md:origin-left"
        initial={false}
        animate={{ scale: filled ? 1 : 0 }}
        transition={{ duration: 0.5, ease }}
      />
    </div>
  )
}
