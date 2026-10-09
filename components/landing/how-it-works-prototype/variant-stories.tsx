"use client"

// PROTOTYPE (ticket #24) variant D: one phone plays the journey like stories, auto-advancing.
// Hover or focus pauses it; reduced motion turns autoplay off.
import { useEffect, useState } from "react"
import { m as motion, AnimatePresence, useReducedMotion } from "motion/react"
import { Pause, Play, ShieldCheck, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { PLUS_NOTE, SAFETY_NOTE, STEPS } from "./steps"
import { StepPhone } from "./step-phone"

const DURATION = 6000

export function VariantStories() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const playing = !reduce && !paused && !userPaused

  useEffect(() => {
    if (!playing) return
    const t = setTimeout(
      () => setActive((a) => (a + 1) % STEPS.length),
      DURATION
    )
    return () => clearTimeout(t)
  }, [active, playing])

  const step = STEPS[active]

  return (
    <section className="section-spacing bg-background">
      <div className="section-container">
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="grid items-center gap-12 md:grid-cols-[1fr_18rem] lg:grid-cols-[1fr_20rem_1fr]"
        >
          <div className="space-y-8">
            <h2 className="text-4xl leading-tight font-semibold tracking-tight text-foreground md:text-5xl">
              How it works
            </h2>
            <ol className="space-y-1">
              {STEPS.map((s, i) => (
                <li key={s.key}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={i === active ? "step" : undefined}
                    className="w-full rounded-lg py-2 text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    <span
                      className={cn(
                        "flex items-baseline gap-3 text-xl font-medium transition-colors",
                        i === active
                          ? "text-foreground"
                          : "text-muted-foreground/35 hover:text-muted-foreground/60"
                      )}
                    >
                      <span className="w-4 text-sm tabular-nums">{i + 1}</span>
                      {s.title}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {i === active && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden pl-7 leading-relaxed text-muted-foreground/70"
                      >
                        <span className="block pb-3">{s.body}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative mx-auto w-full max-w-72">
            <div className="mb-4 flex gap-1.5">
              {STEPS.map((s, i) => (
                <div
                  key={s.key}
                  className="h-0.5 flex-1 overflow-hidden rounded-full bg-foreground/10"
                >
                  {i < active && <div className="h-full bg-primary" />}
                  {i === active && (
                    <motion.div
                      key={`${active}-${playing}`}
                      className="h-full bg-primary"
                      initial={{ width: playing ? "0%" : "100%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: playing ? DURATION / 1000 : 0,
                        ease: "linear",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={step.key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <StepPhone step={step} />
              </motion.div>
            </AnimatePresence>
            <button
              type="button"
              onClick={() => setUserPaused((p) => !p)}
              aria-label={userPaused ? "Play" : "Pause"}
              className="absolute -right-12 bottom-4 rounded-full p-2 text-muted-foreground/50 hover:text-foreground"
            >
              {userPaused ? (
                <Play className="size-4" />
              ) : (
                <Pause className="size-4" />
              )}
            </button>
          </div>

          {/* the note changes with the step, so safety and Plus show up where they apply */}
          <div className="md:col-span-2 lg:col-span-1">
            <AnimatePresence mode="wait">
              {(step.key === "named" || step.key === "support") && (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="max-w-xs space-y-2"
                >
                  {step.key === "named" ? (
                    <ShieldCheck
                      className="size-5 text-accent"
                      strokeWidth={1.5}
                    />
                  ) : (
                    <Sparkles
                      className="size-5 text-primary"
                      strokeWidth={1.5}
                    />
                  )}
                  <p className="font-medium text-foreground">
                    {step.key === "named" ? SAFETY_NOTE.title : PLUS_NOTE.title}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground/70">
                    {step.key === "named" ? SAFETY_NOTE.body : PLUS_NOTE.body}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
