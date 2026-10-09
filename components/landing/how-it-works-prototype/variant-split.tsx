"use client"

// PROTOTYPE (ticket #24) variant F: A's pinned phone on large screens, D's stories player below lg.
// Type does the heavy lifting: step titles are display-sized and light up as they become active.
import { useEffect, useRef, useState } from "react"
import {
  m as motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "motion/react"
import { ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { PLUS_NOTE, SAFETY_NOTE, STEPS, type Step } from "./steps"
import { StepPhone } from "./step-phone"

const EASE = [0.16, 1, 0.3, 1] as const
const DURATION = 6000

function Heading({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-3", className)}>
      <p className="text-sm text-primary">How it works</p>
      <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] font-semibold tracking-tight text-balance text-foreground">
        You don&apos;t have to know what you&apos;re feeling to begin.
      </h2>
    </div>
  )
}

function PlusLine({ className }: { className?: string }) {
  return (
    <p className={cn("text-muted-foreground/70", className)}>
      <span className="font-medium text-primary">{PLUS_NOTE.title}.</span>{" "}
      {PLUS_NOTE.body}
    </p>
  )
}

function DesktopStep({
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

function Desktop() {
  const [active, setActive] = useState(0)

  return (
    <div className="hidden lg:block">
      <Heading className="max-w-3xl" />
      <div className="grid grid-cols-[1fr_17rem] gap-16">
        <div>
          {STEPS.map((step, i) => (
            <div key={step.key}>
              <DesktopStep
                step={step}
                index={i}
                active={active === i}
                onActive={setActive}
              />
              {step.key === "say" && (
                // a quiet interlude between saying and being named: this is where the safety check runs
                <div className="flex max-w-2xl gap-5 py-10">
                  <ShieldCheck
                    className="mt-2 size-6 shrink-0 text-accent"
                    strokeWidth={1.5}
                  />
                  <p className="text-2xl leading-snug text-muted-foreground/50">
                    <span className="text-foreground">
                      {SAFETY_NOTE.title},
                    </span>{" "}
                    {SAFETY_NOTE.body.charAt(0).toLowerCase() +
                      SAFETY_NOTE.body.slice(1)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div>
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
                  transition={{ duration: 0.45, ease: EASE }}
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
  )
}

function Mobile() {
  const ref = useRef<HTMLDivElement>(null)
  // only plays while on screen, so it never runs hidden on large screens
  const inView = useInView(ref, { amount: 0.5 })
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const [held, setHeld] = useState(false)
  const playing = inView && !reduce && !held

  useEffect(() => {
    if (!playing) return
    const t = setTimeout(
      () => setActive((a) => (a + 1) % STEPS.length),
      DURATION
    )
    return () => clearTimeout(t)
  }, [active, playing])

  const go = (dir: 1 | -1) =>
    setActive((a) => (a + dir + STEPS.length) % STEPS.length)
  const step = STEPS[active]

  const fade = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.4, ease: EASE },
  }

  return (
    <div ref={ref} className="lg:hidden">
      <Heading />

      <div className="mt-12 flex gap-1.5">
        {STEPS.map((s, i) => (
          <button
            key={s.key}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Step ${i + 1}: ${s.title}`}
            className="h-5 flex-1"
          >
            <span className="block h-0.5 overflow-hidden rounded-full bg-foreground/10">
              {i < active && <span className="block h-full bg-primary" />}
              {i === active && (
                <motion.span
                  key={`${active}-${playing}`}
                  className="block h-full bg-primary"
                  initial={{ width: playing ? "0%" : "100%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: playing ? DURATION / 1000 : 0,
                    ease: "linear",
                  }}
                />
              )}
            </span>
          </button>
        ))}
      </div>

      {/* title sits above the phone so the step and its screen read together on one screen */}
      <div className="mt-4" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={step.key} {...fade}>
            <p className="text-sm text-primary tabular-nums">
              {active + 1} of {STEPS.length}
            </p>
            {/* two lines reserved so the phone below never jumps */}
            <h3 className="mt-2 min-h-[1.9em] text-[clamp(2.5rem,11vw,4.5rem)] leading-[0.95] font-semibold tracking-[-0.03em] text-foreground">
              {step.title}
            </h3>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative mx-auto mt-6 w-full max-w-52">
        {/* all four stay mounted and cross-fade, so the next screen is already loaded */}
        <div className="grid">
          {STEPS.map((s, i) => (
            <div
              key={s.key}
              aria-hidden={i !== active}
              className={cn(
                "col-start-1 row-start-1 transition-opacity duration-500",
                i === active ? "opacity-100" : "opacity-0"
              )}
            >
              <StepPhone step={s} eager />
            </div>
          ))}
        </div>

        {/* stories-style tap zones; press and hold pauses */}
        <div
          className="absolute inset-0 grid grid-cols-[1fr_2fr]"
          onPointerDown={() => setHeld(true)}
          onPointerUp={() => setHeld(false)}
          onPointerLeave={() => setHeld(false)}
        >
          <button
            type="button"
            aria-label="Previous step"
            onClick={() => go(-1)}
          />
          <button type="button" aria-label="Next step" onClick={() => go(1)} />
        </div>
      </div>

      <div className="mt-8 min-h-56">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={step.key} {...fade}>
            <p className="text-lg leading-relaxed text-muted-foreground/75">
              {step.body}
            </p>
            {step.key === "named" && (
              <p className="mt-6 flex gap-3 text-sm leading-relaxed text-muted-foreground/60">
                <ShieldCheck
                  className="mt-0.5 size-4 shrink-0 text-accent"
                  strokeWidth={1.5}
                />
                {SAFETY_NOTE.body}
              </p>
            )}
            {step.key === "support" && <PlusLine className="mt-6 text-sm" />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export function VariantSplit() {
  return (
    <section className="section-spacing bg-muted">
      <div className="section-container">
        <Desktop />
        <Mobile />
      </div>
    </section>
  )
}
