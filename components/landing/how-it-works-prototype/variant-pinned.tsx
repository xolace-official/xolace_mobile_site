"use client"

// PROTOTYPE (ticket #24) variant A: one phone stays pinned while the steps scroll past it.
import { useEffect, useRef, useState } from "react"
import { m as motion, AnimatePresence, useInView } from "motion/react"
import { ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { PLUS_NOTE, SAFETY_NOTE, STEPS, type Step } from "./steps"
import { StepPhone } from "./step-phone"

function StepBlock({
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
    <div
      ref={ref}
      className="flex flex-col justify-center gap-8 py-12 lg:min-h-[70vh] lg:py-0"
    >
      <div
        className={cn(
          "max-w-md space-y-4 transition-opacity duration-500",
          active ? "lg:opacity-100" : "lg:opacity-30"
        )}
      >
        <p className="text-5xl font-light text-primary tabular-nums">
          {index + 1}
        </p>
        <h3 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {step.title}
        </h3>
        <p className="text-lg leading-relaxed text-muted-foreground/70">
          {step.body}
        </p>
        {step.key === "support" && (
          <p className="border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-muted-foreground/70">
            <span className="font-medium text-foreground">
              {PLUS_NOTE.title}.
            </span>{" "}
            {PLUS_NOTE.body}
          </p>
        )}
      </div>
      <StepPhone step={step} className="mx-auto max-w-60 lg:hidden" />
    </div>
  )
}

export function VariantPinned() {
  const [active, setActive] = useState(0)

  return (
    <section className="section-spacing bg-muted">
      <div className="section-container">
        <div className="max-w-xl space-y-4">
          <h2 className="text-5xl leading-[1.05] font-semibold tracking-tight text-foreground md:text-6xl">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground/60">
            You don&apos;t have to know what you&apos;re feeling to begin.
          </p>
        </div>

        <div className="mt-8 grid gap-16 lg:mt-0 lg:grid-cols-[1fr_17rem]">
          <div>
            {STEPS.map((step, i) => (
              <div key={step.key}>
                <StepBlock
                  step={step}
                  index={i}
                  active={active === i}
                  onActive={setActive}
                />
                {step.key === "say" && (
                  <div className="flex max-w-md gap-3 rounded-xl bg-background/60 p-4 text-sm leading-relaxed text-muted-foreground/70">
                    <ShieldCheck
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      strokeWidth={1.5}
                    />
                    <p>
                      <span className="font-medium text-foreground">
                        {SAFETY_NOTE.title}.
                      </span>{" "}
                      {SAFETY_NOTE.body}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-[14vh] py-[4vh]">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute inset-x-6 top-1/4 h-1/2 rounded-full bg-primary/15 blur-3xl"
                />
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={STEPS[active].key}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <StepPhone step={STEPS[active]} />
                  </motion.div>
                </AnimatePresence>
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
    </section>
  )
}
