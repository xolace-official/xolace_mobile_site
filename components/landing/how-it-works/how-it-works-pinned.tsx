"use client"

// lg and up: steps scroll past one pinned phone. Display-sized titles light up as they become active.
import { useEffect, useRef, useState } from "react"
import { useInView } from "motion/react"
import { ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { HowItWorksHeading, PlusLine } from "./how-it-works-heading"
import { SAFETY_NOTE, STEPS, type Step } from "./steps"
import { StepPhone } from "./step-phone"

function PinnedStep({
  step,
  index,
  active,
  onActive,
}: {
  step: Step
  index: number
  active: boolean
  onActive: (i: number) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.6 })
  useEffect(() => {
    if (inView) onActive(index)
  }, [inView, index, onActive])

  return (
    <div ref={ref} className="flex min-h-[80vh] flex-col justify-center">
      <p
        className={cn(
          "mb-4 text-sm tabular-nums transition-colors duration-700",
          active ? "text-primary" : "text-muted-foreground/30"
        )}
      >
        {index + 1} of {STEPS.length}
      </p>
      <h3
        className={cn(
          "origin-left text-[clamp(3.5rem,6.5vw,6.5rem)] leading-[0.92] font-semibold tracking-[-0.035em] text-foreground transition-all duration-700",
          active ? "opacity-100" : "scale-[0.94] opacity-15"
        )}
      >
        {step.title}
      </h3>
      <div
        className={cn(
          "mt-8 max-w-lg space-y-5 transition-opacity duration-700",
          active ? "opacity-100" : "opacity-0"
        )}
      >
        <p className="text-xl leading-relaxed text-muted-foreground/75">
          {step.body}
        </p>
        {step.key === "support" && <PlusLine className="text-base" />}
      </div>
    </div>
  )
}

// Sits between saying and being named, because that's where the safety check runs
function SafetyInterlude() {
  return (
    <div className="flex max-w-2xl gap-5 py-10">
      <ShieldCheck
        className="mt-2 size-6 shrink-0 text-accent"
        strokeWidth={1.5}
      />
      <p className="text-2xl leading-snug text-muted-foreground/50">
        <span className="text-foreground">{SAFETY_NOTE.title},</span>{" "}
        {SAFETY_NOTE.body.charAt(0).toLowerCase() + SAFETY_NOTE.body.slice(1)}
      </p>
    </div>
  )
}

export function HowItWorksPinned() {
  const [active, setActive] = useState(0)

  return (
    <div className="hidden lg:block">
      <HowItWorksHeading className="max-w-3xl" />
      <div className="grid grid-cols-[1fr_17rem] gap-16">
        <div>
          {STEPS.map((step, i) => (
            <div key={step.key}>
              <PinnedStep
                step={step}
                index={i}
                active={active === i}
                onActive={setActive}
              />
              {step.key === "say" && <SafetyInterlude />}
            </div>
          ))}
        </div>

        <div>
          {/* Sticky needs every ancestor up to <main> to clip, not hide, its overflow */}
          <div className="sticky top-[14vh] py-[4vh]">
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-x-6 top-1/4 h-1/2 rounded-full bg-primary/15 blur-3xl"
              />
              {/* All four stay mounted and cross-fade, so no screen loads late */}
              <div className="grid">
                {STEPS.map((s, i) => (
                  <div
                    key={s.key}
                    aria-hidden={i !== active}
                    className={cn(
                      "col-start-1 row-start-1 transition-all duration-500",
                      i === active
                        ? "translate-y-0 opacity-100"
                        : i < active
                          ? "-translate-y-3 opacity-0"
                          : "translate-y-3 opacity-0"
                    )}
                  >
                    <StepPhone step={s} eager />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {STEPS.map((s, i) => (
                <span
                  key={s.key}
                  className={cn(
                    "h-1 rounded-full transition-all duration-500",
                    i === active ? "w-6 bg-primary" : "w-1.5 bg-foreground/15"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
