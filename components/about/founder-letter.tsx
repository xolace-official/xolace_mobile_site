"use client"

import { m as motion } from "motion/react"
import { founders } from "@/lib/team"

const ceo = founders.find((f) => f.role.startsWith("CEO"))!

const attribution = (founder: (typeof founders)[number]) =>
  `${founder.name.split(" ")[0]}, ${founder.role}`

const letter = [
  "We never set out to build anything in health. Anything but that. We were building social products, and Xolace started as a side project: an anonymous social space, one idea among many.",
  "We kept looking outward for ideas and ignored what was right in front of us. School and life were weighing on us too, just never badly enough to take seriously, so it was easy to brush off. And health felt off-limits: too hard, especially where we live, where mental health barely gets talked about.",
  "Then you watch someone you care about go through it. You look for something, anything, to help them, and nothing fits. You feel powerless. That changes you. It changed us.",
  "After that, hard stopped mattering. We weren't going to feel that helpless again, for ourselves or for the people closest to us. So we built it for them first. Our own campfire.",
  "Somewhere along the way we realised this was a different way to look after your mind, and it shouldn't stay ours.",
  "So here it is. We're sharing that campfire with you, and we're glad you're here.",
]

export function FounderLetter() {
  return (
    <section className="section-spacing relative overflow-hidden bg-xo-surface-lowest">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-gentle-pulse absolute top-0 right-0 size-[30rem] rounded-full bg-primary/[0.05] blur-[140px]" />
      </div>

      <div className="section-container-wide relative z-10">
        <div className="grid gap-14 lg:grid-cols-[18rem_1fr] lg:gap-24">
          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="section-label">A note from our founder</p>
            <h2 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">
              It started with not wanting to feel helpless again.
            </h2>
            <div className="mt-8 h-px w-12 bg-primary/50" />
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground/50">
              {attribution(ceo)}
            </p>
          </motion.aside>

          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl border-l-2 border-primary/40 pl-6 font-serif text-2xl leading-[1.3] text-foreground md:text-4xl"
            >
              Just hear me rant for a bit.
            </motion.p>

            <div className="mt-12 space-y-8">
              {letter.map((paragraph, index) => (
                <motion.p
                  key={paragraph}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-base leading-[1.9] text-muted-foreground/70 md:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <div className="mt-12 border-t border-border/25 pt-5">
              <p className="text-sm text-muted-foreground/50">{attribution(ceo)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
