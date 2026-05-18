"use client"

import { Iphone } from "@/components/ui/iphone"
import { motion } from "motion/react"

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
    <section className="py-32 md:py-48">
      <div className="asymmetric-layout mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-foreground font-light 2xl:text-center"
        >
          How it works.
        </motion.h2>
      </div>

      <div className="space-y-32 md:space-y-48 max-w-screen-2xl mx-auto">
        {steps.map((step, i) => {
          const isReversed = i % 2 === 1
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col items-center gap-12 md:gap-20 px-8 md:px-0 ${
                isReversed
                  ? "md:flex-row-reverse md:pr-[clamp(2rem,10vw,8rem)] md:pl-[clamp(2rem,15vw,12rem)]"
                  : "md:flex-row md:pl-[clamp(2rem,10vw,8rem)] md:pr-[clamp(2rem,15vw,12rem)]"
              }`}
            >
              <div className="w-full md:w-1/2 space-y-5">
                <span className="text-primary text-sm tracking-[0.05em] font-light">
                  {step.number}
                </span>
                <h3 className="text-3xl md:text-4xl text-foreground font-light">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>

              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-[240px] md:w-[280px]">
                  <Iphone src={step.image} />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
