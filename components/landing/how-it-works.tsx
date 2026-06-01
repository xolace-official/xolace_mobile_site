"use client"

import { Iphone } from "@/components/ui/iphone"
import { m as motion } from "motion/react"

const steps = [
  {
    number: "01",
    title: "Say what's true or let it out.",
    description:
      "Type what's real, tap words that feel close, or speak it out loud. No pressure to be profound, just honest.",
    image: "/app-images/say-whats-true.jpeg",
  },
  {
    number: "02",
    title: "See it clearly.",
    description:
      "An AI mirrors your feeling back with precision. Not to solve it, but to let you see it for what it really is.",
    image: "/app-images/see-it-clearly.jpeg",
  },
  {
    number: "03",
    title: "Choose what's next.",
    description:
      "A guided moment, peer reflections, or just closing knowing you said it. Every session ends complete, nothing left unresolved to pull you back.",
    image: "/app-images/choose-whats-next.jpeg",
  },
]

export function HowItWorks() {
  return (
    <section className="section-spacing bg-xo-surface-lowest">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-4xl leading-tight font-light text-foreground md:text-5xl"
        >
          How it works.
        </motion.h2>

        <div className="space-y-24 md:space-y-28">
          {steps.map((step, i) => {
            const isReversed = i % 2 === 1
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col items-center gap-12 md:gap-16 ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="w-full space-y-5 md:w-1/2">
                  <span className="text-sm font-light tracking-[0.05em] text-primary">
                    {step.number}
                  </span>
                  <h3 className="text-3xl font-light text-foreground md:text-4xl">
                    {step.title}
                  </h3>
                  <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                <div className="flex w-full justify-center md:w-1/2">
                  <div className="w-60 md:w-70">
                    <Iphone src={step.image} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
