"use client"

import { Iphone } from "@/components/ui/iphone"
import { motion } from "motion/react"

const steps = [
  {
    number: "01",
    title: "Say what\u2019s true.",
    description:
      "Type what\u2019s real \u2014 or tap words that feel close. There\u2019s no pressure to be profound, just honest.",
  },
  {
    number: "02",
    title: "See it clearly.",
    description:
      "An AI mirrors your feeling back with precision. Not to solve it, but to let you see it for what it really is.",
  },
  {
    number: "03",
    title: "Choose what\u2019s next.",
    description:
      "A guided moment, peer reflections, or just closing knowing you said it. You\u2019re in control of the quiet.",
  },
]

/* ------------------------------------------------------------------ */
/*  Screen mockups — stylised app UI inside each phone                 */
/* ------------------------------------------------------------------ */

function ScreenSayWhatsTrue() {
  const emotionWords = [
    "anxious",
    "heavy",
    "numb",
    "restless",
    "lost",
    "overwhelmed",
    "hollow",
    "tender",
  ]
  return (
    <div className="flex size-full flex-col bg-background">
      {/* Status bar area */}
      <div className="h-16 shrink-0" />

      {/* App header */}
      <div className="px-6 pt-4 pb-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
          how are you feeling?
        </p>
      </div>

      {/* Text input area */}
      <div className="flex-1 px-6">
        <div className="rounded-xl border border-border/50 bg-xo-surface-low p-4">
          <p className="font-serif text-sm leading-relaxed text-foreground/80 italic">
            I don&apos;t even know why I feel this way. Everything
            is fine on paper but something feels...
          </p>
          <div className="mt-3 h-px w-8 animate-pulse bg-primary/60" />
        </div>

        {/* Emotion word chips */}
        <div className="mt-6">
          <p className="mb-3 text-[9px] uppercase tracking-[0.2em] text-muted-foreground/40">
            or tap what feels close
          </p>
          <div className="flex flex-wrap gap-2">
            {emotionWords.map((word, i) => (
              <span
                key={word}
                className={`rounded-full border px-3 py-1.5 text-[11px] transition-colors ${
                  i === 2
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-border/30 text-muted-foreground/60"
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom action */}
      <div className="shrink-0 px-6 pb-8">
        <div className="flex h-11 items-center justify-center rounded-xl bg-primary/90">
          <span className="text-[11px] font-medium tracking-widest text-primary-foreground uppercase">
            Say it
          </span>
        </div>
      </div>
    </div>
  )
}

function ScreenSeeItClearly() {
  return (
    <div className="flex size-full flex-col bg-background">
      {/* Status bar area */}
      <div className="h-16 shrink-0" />

      {/* What you said */}
      <div className="px-6 pt-4 pb-2">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
          you said
        </p>
        <p className="mt-2 font-serif text-xs leading-relaxed text-foreground/60 italic">
          &ldquo;I don&apos;t even know why I feel this way.&rdquo;
        </p>
      </div>

      {/* Mirror response */}
      <div className="flex-1 px-6 pt-6">
        <div className="border-l-2 border-primary/30 pl-5">
          <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-primary/50">
            the mirror
          </p>
          <p className="font-serif text-base leading-relaxed text-foreground/90 italic">
            Something&apos;s there but it doesn&apos;t have a shape yet.
            Like fog you&apos;re trying to walk through.
          </p>
        </div>

        {/* Gentle pulse — the "mirror" visualised */}
        <div className="mt-10 flex justify-center">
          <div className="relative flex items-center justify-center">
            <div className="absolute size-20 rounded-full bg-primary/5 animate-gentle-pulse" />
            <div className="absolute size-12 rounded-full bg-primary/10 animate-gentle-pulse [animation-delay:0.5s]" />
            <div className="size-5 rounded-full bg-primary/25" />
          </div>
        </div>
      </div>

      {/* Emotion tag */}
      <div className="shrink-0 px-6 pb-8">
        <div className="flex items-center justify-center gap-2">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-[10px] text-primary/70">
            unnamed weight
          </span>
          <span className="rounded-full bg-accent/10 px-4 py-1.5 text-[10px] text-accent-foreground/50">
            seeking clarity
          </span>
        </div>
      </div>
    </div>
  )
}

function ScreenChooseWhatsNext() {
  const paths = [
    {
      label: "Guided moment",
      sublabel: "A 2-minute breathing exercise",
      icon: (
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
          <div className="size-3 rounded-full border-2 border-primary/40" />
        </div>
      ),
    },
    {
      label: "Peer reflections",
      sublabel: "Others who felt something similar",
      icon: (
        <div className="flex size-8 items-center justify-center rounded-lg bg-accent/15">
          <div className="flex -space-x-1">
            <div className="size-2 rounded-full bg-accent/50" />
            <div className="size-2 rounded-full bg-accent/35" />
            <div className="size-2 rounded-full bg-accent/20" />
          </div>
        </div>
      ),
    },
    {
      label: "Just close",
      sublabel: "You said it. That\u2019s enough.",
      icon: (
        <div className="flex size-8 items-center justify-center rounded-lg bg-muted">
          <div className="size-2.5 rounded-sm bg-muted-foreground/30" />
        </div>
      ),
    },
  ]

  return (
    <div className="flex size-full flex-col bg-background">
      {/* Status bar area */}
      <div className="h-16 shrink-0" />

      <div className="px-6 pt-4">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
          what would you like to do?
        </p>
        <p className="mt-2 font-serif text-sm leading-relaxed text-foreground/60 italic">
          You&apos;ve been heard. Now choose your path.
        </p>
      </div>

      {/* Path options */}
      <div className="flex-1 px-6 pt-8">
        <div className="space-y-3">
          {paths.map((path, i) => (
            <div
              key={path.label}
              className={`flex items-center gap-4 rounded-xl border p-4 transition-colors ${
                i === 0
                  ? "border-primary/25 bg-primary/[0.04]"
                  : "border-border/30 bg-xo-surface-low/50"
              }`}
            >
              {path.icon}
              <div>
                <p className="text-[12px] font-medium text-foreground/80">
                  {path.label}
                </p>
                <p className="text-[10px] text-muted-foreground/50">
                  {path.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reassurance */}
      <div className="shrink-0 px-6 pb-8 text-center">
        <p className="text-[9px] text-muted-foreground/30">
          no data leaves this moment
        </p>
      </div>
    </div>
  )
}

const screens = [
  <ScreenSayWhatsTrue key="s1" />,
  <ScreenSeeItClearly key="s2" />,
  <ScreenChooseWhatsNext key="s3" />,
]

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

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
              {/* Text content */}
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

              {/* Phone mockup */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-[240px] md:w-[280px]">
                  <Iphone>{screens[i]}</Iphone>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
