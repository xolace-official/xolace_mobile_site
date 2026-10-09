"use client"

// PROTOTYPE (ticket #23) variant D: no diagram. One card narrates a single person's pass, one beat at a time.
// Tests whether words beat boxes-and-arrows for a first-time visitor.
import { AnimatePresence, m as motion } from "motion/react"
import { cn } from "@/lib/utils"
import { HeroCopy, PlusNote } from "./hero-copy"
import { SAMPLE_MIRROR, SAMPLE_SHARE } from "./kindlings"
import { SUPPORTS_STAGE, type PipelineState } from "./use-pipeline-loop"

const ease = [0.16, 1, 0.3, 1] as const
const BEATS = 5

export function VariantStory({ state }: { state: PipelineState }) {
  const { stage, set, pass } = state
  const beat = Math.min(stage, SUPPORTS_STAGE)
  return (
    <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:gap-16">
      <div className="flex-1">
        <HeroCopy align="start" />
      </div>

      <div
        aria-hidden
        className="flex min-h-96 w-full max-w-sm shrink-0 flex-col rounded-3xl border border-xo-outline-variant bg-xo-surface-low/70 p-6 text-left backdrop-blur"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${pass}-${beat}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.5, ease }}
            className="flex-1"
          >
            {beat === 0 && (
              <Beat eyebrow="Someone says what's true">
                <Quote>&ldquo;{SAMPLE_SHARE}&rdquo;</Quote>
              </Beat>
            )}
            {beat === 1 && (
              <Beat eyebrow="The Fire reflects it back">
                <Quote className="text-primary">{SAMPLE_MIRROR}</Quote>
                <Note>Not quite? Say more, and it tries again.</Note>
              </Beat>
            )}
            {beat === 2 && (
              <Beat eyebrow="A quiet check">
                <Quote>Would some support help right now?</Quote>
                <Note>
                  If it looks like a crisis, crisis resources come first, not
                  suggestions.
                </Note>
              </Beat>
            )}
            {beat === 3 && (
              <Beat eyebrow="Kindling">
                <Quote>Four supports, picked for today.</Quote>
                <PlusNote className="mt-4" />
              </Beat>
            )}
            {beat === 4 && (
              <Beat eyebrow="For today">
                <ul className="space-y-3">
                  {set.map((k, i) => {
                    const Icon = k.icon
                    return (
                      <motion.li
                        key={k.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.12, ease }}
                        className="flex gap-3"
                      >
                        <div
                          className={cn(
                            "flex size-8 shrink-0 items-center justify-center rounded-lg",
                            k.bg
                          )}
                        >
                          <Icon className={cn("size-4", k.tone)} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {k.name}
                          </p>
                          <p className="text-xs leading-snug text-muted-foreground">
                            {k.why}
                          </p>
                        </div>
                      </motion.li>
                    )
                  })}
                </ul>
              </Beat>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex gap-1.5">
          {Array.from({ length: BEATS }, (_, i) => (
            <div
              key={i}
              className={cn(
                "h-1 flex-1 rounded-full transition-colors duration-500",
                i <= beat ? "bg-primary" : "bg-xo-outline-variant"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function Beat({
  eyebrow,
  children,
}: {
  eyebrow: string
  children: React.ReactNode
}) {
  return (
    <div>
      <p className="mb-4 text-[11px] tracking-wide text-muted-foreground uppercase">
        {eyebrow}
      </p>
      {children}
    </div>
  )
}

function Quote({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        "font-serif text-xl leading-snug text-foreground",
        className
      )}
    >
      {children}
    </p>
  )
}

function Note({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-xs text-muted-foreground">{children}</p>
}
