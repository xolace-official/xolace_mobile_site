"use client"

import { m as motion } from "motion/react"

import { founders } from "@/lib/team"

const ceo = founders.find((f) => f.role.startsWith("CEO"))!
const cmo = founders.find((f) => f.role.startsWith("CMO"))!

// The letter is signed informally — first name only, full record lives in lib/team.ts
const attribution = (founder: (typeof founders)[number]) =>
  `${founder.name.split(" ")[0]}, ${founder.role}`

const letter = [
  { type: "pull" as const, text: "Just hear me rant for a bit." },
  {
    type: "body" as const,
    text: "We never set out to build anything in health. Anything but that. We were building social products, and Xolace started as a side project: an anonymous social space, one idea among many.",
  },
  {
    type: "body" as const,
    text: "We kept looking outward for ideas and ignored what was right in front of us. School and life were weighing on us too, just never badly enough to take seriously, so it was easy to brush off. And health felt off-limits: too hard, especially where we live, where mental health barely gets talked about.",
  },
  {
    type: "body" as const,
    text: "Then you watch someone you care about go through it. You look for something, anything, to help them, and nothing fits. You feel powerless. That changes you. It changed us.",
  },
  {
    type: "body" as const,
    text: "After that, hard stopped mattering. We weren't going to feel that helpless again, for ourselves or for the people closest to us. So we built it for them first. Our own campfire.",
  },
  {
    type: "body" as const,
    text: "Somewhere along the way we realised this was a different way to look after your mind, and it shouldn't stay ours.",
  },
  {
    type: "body" as const,
    text: "So here it is. We're sharing that campfire with you, and we're glad you're here.",
  },
]

export function FounderLetter() {
  return (
    <section className="section-spacing relative overflow-hidden bg-xo-surface-lowest">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-gentle-pulse absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[130px]" />
        <div className="animate-gentle-pulse absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-accent/[0.04] blur-[110px] [animation-delay:3s]" />
      </div>

      <div className="section-container relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 font-mono text-[11px] tracking-[0.24em] text-muted-foreground/30 uppercase"
        >
          A note from our founder
        </motion.p>

        <div className="lg:grid lg:grid-cols-[1fr_420px] lg:gap-24 xl:gap-32">
          <div className="max-w-2xl space-y-7">
            {letter.map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={
                  item.type === "pull"
                    ? "border-l-2 border-primary/30 pl-6 font-serif text-2xl leading-[1.3] text-foreground italic md:text-3xl lg:text-4xl"
                    : "font-serif text-base leading-loose text-muted-foreground/65 md:text-lg"
                }
              >
                {item.text}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: letter.length * 0.05 + 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center gap-5 pt-6"
            >
              <div className="h-px w-8 bg-border/40" />
              <p className="font-serif text-sm text-foreground/40 italic">
                {attribution(ceo)}
              </p>
            </motion.div>
          </div>

          {/* Right — decorative pull-aside (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-32 hidden flex-col justify-center gap-8 self-start pt-2 lg:flex"
          >
            <div className="space-y-4 rounded-2xl border border-primary/15 bg-primary/[0.05] p-8">
              <div className="flex size-8 items-center justify-center rounded-full border border-primary/20 bg-primary/15">
                <div className="size-2 rounded-full bg-primary/60" />
              </div>
              <p className="font-serif text-lg leading-relaxed text-foreground/70 italic">
                &ldquo;We&apos;re building the room that doesn&apos;t have a
                name yet.&rdquo;
              </p>
              <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground/30 uppercase">
                {attribution(cmo)}
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-accent/15 bg-accent/[0.04] p-8">
              <p className="font-serif text-base leading-relaxed text-foreground/55 italic">
                &ldquo;Xolace is the room we couldn&apos;t find.&rdquo;
              </p>
              <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground/30 uppercase">
                {attribution(ceo)}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
