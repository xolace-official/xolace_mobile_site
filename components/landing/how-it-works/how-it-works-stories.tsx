"use client"

// Below lg: a stories player. Tap the left third of the phone to go back, the rest to go forward,
// press and hold to pause.
import { useEffect, useRef, useState } from "react"
import { m as motion, AnimatePresence, useInView } from "motion/react"
import { ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePrefersReducedMotion } from "@/hooks/use-media-query"
import { HowItWorksHeading, PlusLine } from "./how-it-works-heading"
import { SAFETY_NOTE, STEPS } from "./steps"
import { StepPhone } from "./step-phone"

const DURATION = 6000

const fade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
}

export function HowItWorksStories() {
  const ref = useRef<HTMLDivElement>(null)
  // Only plays while on screen, so it never runs hidden on large screens
  const inView = useInView(ref, { amount: 0.5 })
  const reduce = usePrefersReducedMotion()
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

  return (
    <div ref={ref} className="lg:hidden">
      <HowItWorksHeading />

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

      {/* Title sits above the phone so the step and its screen read together */}
      <div className="mt-4" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={step.key} {...fade}>
            <p className="text-sm text-primary tabular-nums">
              {active + 1} of {STEPS.length}
            </p>
            {/* Two lines reserved so the phone below never jumps */}
            <h3 className="mt-2 min-h-[1.9em] text-[clamp(2.5rem,11vw,4.5rem)] leading-[0.95] font-semibold tracking-[-0.03em] text-foreground">
              {step.title}
            </h3>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative mx-auto mt-6 w-full max-w-52">
        {/* All four stay mounted and cross-fade, so the next screen is already loaded */}
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
