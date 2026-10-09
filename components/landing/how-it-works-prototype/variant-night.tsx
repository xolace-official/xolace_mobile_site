"use client"

// PROTOTYPE (ticket #24) variant B: one person's night as a timeline. An ember fills the line as
// you scroll, picking up the hero's beam; safety is a fork off the line, not a footnote.
import { useRef } from "react"
import { m as motion, useScroll, useSpring } from "motion/react"
import { cn } from "@/lib/utils"
import { PLUS_NOTE, SAFETY_NOTE, STEPS } from "./steps"
import { StepPhone } from "./step-phone"

export function VariantNight() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 60%"],
  })
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <section className="section-spacing bg-xo-surface-lowest">
      <div className="section-container">
        <div className="mx-auto max-w-xl space-y-4 text-center">
          <h2 className="text-4xl leading-tight font-semibold tracking-tight text-foreground md:text-5xl">
            One night, four minutes.
          </h2>
          <p className="text-lg text-muted-foreground/60">
            Here&apos;s what using Xolace looks like, from the first word to
            what helps.
          </p>
        </div>

        <div ref={ref} className="relative mt-20">
          {/* the line sits left on phones, centred from md up */}
          <div className="absolute top-0 bottom-0 left-3 w-px bg-foreground/10 md:left-1/2" />
          <motion.div
            style={{ scaleY: fill }}
            className="absolute top-0 bottom-0 left-3 w-px origin-top bg-primary md:left-1/2"
          />

          {STEPS.map((step, i) => {
            const flip = i % 2 === 1
            return (
              <div key={step.key}>
                <div className="relative grid gap-8 pb-20 pl-10 md:grid-cols-2 md:gap-20 md:pl-0">
                  <span className="absolute top-1.5 left-3 size-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-xo-surface-lowest md:left-1/2" />
                  <div
                    className={cn(
                      "space-y-3 md:pt-0",
                      flip ? "md:order-2" : "md:text-right"
                    )}
                  >
                    <p className="text-sm text-primary tabular-nums">
                      {step.time}
                    </p>
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                      {step.title}
                    </h3>
                    <p
                      className={cn(
                        "max-w-sm leading-relaxed text-muted-foreground/70",
                        !flip && "md:ml-auto"
                      )}
                    >
                      {step.body}
                    </p>
                    {step.key === "support" && (
                      <p
                        className={cn(
                          "max-w-sm text-sm text-muted-foreground/60",
                          !flip && "md:ml-auto"
                        )}
                      >
                        {PLUS_NOTE.body}
                      </p>
                    )}
                  </div>
                  <div
                    className={cn(flip ? "md:order-1 md:justify-self-end" : "")}
                  >
                    <StepPhone step={step} className="max-w-52" />
                  </div>
                </div>

                {step.key === "say" && (
                  <div className="relative -mt-8 pb-20 pl-10 md:pl-0">
                    {/* the fork: a dashed branch leaving the line */}
                    <div className="absolute top-4 left-3 h-px w-6 border-t border-dashed border-accent md:left-1/2 md:w-16" />
                    <div className="max-w-xs rounded-xl border border-dashed border-accent/50 p-4 md:ml-[calc(50%+4.5rem)]">
                      <p className="text-sm font-medium text-foreground">
                        {SAFETY_NOTE.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground/70">
                        {SAFETY_NOTE.body}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
