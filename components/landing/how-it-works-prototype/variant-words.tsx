"use client"

// PROTOTYPE (ticket #24) variant E: the session's own words carry the journey; screens are
// small proof in the margin. Each step's text is set the way the app sets it.
import { m as motion } from "motion/react"
import { KINDLINGS } from "@/components/landing/hero-prototype/kindlings"
import { PLUS_NOTE, SAFETY_NOTE, STEPS, type Step } from "./steps"
import { StepPhone } from "./step-phone"

function Said({ step }: { step: Step }) {
  switch (step.key) {
    case "say":
      return (
        <p className="text-3xl leading-snug text-foreground md:text-4xl">
          {step.quote}
          <span className="ml-1 inline-block h-[0.9em] w-0.5 translate-y-1 animate-pulse bg-primary" />
        </p>
      )
    case "named":
      return (
        <blockquote className="border-l-2 border-primary/50 pl-6 text-3xl leading-snug text-foreground md:text-4xl">
          {step.quote}
        </blockquote>
      )
    case "choose":
      return (
        <div className="space-y-6">
          <p className="text-3xl leading-snug text-foreground md:text-4xl">
            {step.quote}
          </p>
          <ul className="space-y-3 text-xl text-muted-foreground/70">
            <li>Sit with this</li>
            <li>You&apos;re not alone</li>
            <li>I just needed to say it</li>
          </ul>
        </div>
      )
    case "support":
      return (
        <ul className="divide-y divide-foreground/10">
          {KINDLINGS.slice(0, 4).map((k) => (
            <li key={k.id} className="grid gap-1 py-4 md:grid-cols-[12rem_1fr]">
              <span className="text-2xl text-foreground">{k.name}</span>
              <span className="text-muted-foreground/70 md:pt-1.5">
                {k.why}
              </span>
            </li>
          ))}
        </ul>
      )
  }
}

export function VariantWords() {
  return (
    <section className="section-spacing bg-xo-surface-lowest">
      <div className="section-container">
        <h2 className="max-w-2xl text-4xl leading-tight font-semibold tracking-tight text-foreground md:text-5xl">
          What a few minutes in Xolace sounds like.
        </h2>

        <div className="mt-20 space-y-24">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-8 md:grid-cols-[11rem_1fr_6rem] md:gap-12"
            >
              <div className="space-y-2">
                <p className="text-sm text-primary tabular-nums">
                  Step {i + 1}
                </p>
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground/60">
                  {step.body}
                </p>
              </div>
              <div className="self-center">
                <Said step={step} />
                {step.key === "say" && (
                  <p className="mt-10 max-w-md text-sm leading-relaxed text-muted-foreground/60 italic">
                    {SAFETY_NOTE.body}
                  </p>
                )}
                {step.key === "support" && (
                  <p className="mt-6 text-sm text-muted-foreground/60">
                    {PLUS_NOTE.body}
                  </p>
                )}
              </div>
              <StepPhone
                step={step}
                className="hidden max-w-24 self-start opacity-80 transition-transform duration-500 hover:scale-[2] hover:opacity-100 md:block md:origin-top-right"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
