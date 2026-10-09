"use client"

// PROTOTYPE (ticket #24) variant C: all four screens at once, rising left to right like steps.
// Phones scroll sideways on small screens.
import { m as motion } from "motion/react"
import { Lock, ShieldCheck } from "lucide-react"
import { PLUS_NOTE, SAFETY_NOTE, STEPS } from "./steps"
import { StepPhone } from "./step-phone"

// lower steps sit further down, so the row climbs toward Kindling
const RISE = ["lg:mt-48", "lg:mt-32", "lg:mt-16", "lg:mt-0"]

export function VariantStaircase() {
  return (
    <section className="section-spacing-y overflow-hidden bg-muted">
      <div className="section-spacing-x section-container-wide">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="text-5xl leading-[1.05] font-semibold tracking-tight text-foreground md:text-6xl">
            From a feeling
            <br />
            to what helps.
          </h2>
          <p className="max-w-md text-lg text-muted-foreground/60 lg:justify-self-end">
            Four steps, a few minutes. You don&apos;t have to know what
            you&apos;re feeling to begin.
          </p>
        </div>
      </div>

      <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-4 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-4 lg:gap-8 lg:overflow-visible">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`w-[68vw] max-w-72 shrink-0 snap-center lg:w-auto lg:max-w-none ${RISE[i]}`}
          >
            <div className="mb-5 flex items-baseline gap-3">
              <span className="text-4xl font-light text-primary tabular-nums">
                {i + 1}
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
            </div>
            <StepPhone step={step} />
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground/70">
              {step.body}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="section-spacing-x section-container-wide mt-16 grid gap-6 md:grid-cols-2">
        {[
          { Icon: ShieldCheck, tone: "text-accent", ...SAFETY_NOTE },
          { Icon: Lock, tone: "text-primary", ...PLUS_NOTE },
        ].map(({ Icon, tone, title, body }) => (
          <div
            key={title}
            className="flex gap-4 border-t border-foreground/10 pt-6"
          >
            <Icon
              className={`mt-0.5 size-5 shrink-0 ${tone}`}
              strokeWidth={1.5}
            />
            <div>
              <p className="font-medium text-foreground">{title}</p>
              <p className="mt-1 leading-relaxed text-muted-foreground/70">
                {body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
