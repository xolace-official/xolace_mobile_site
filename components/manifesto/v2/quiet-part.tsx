"use client"

import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"

// docs/xolace.md §4: the two habits behind the vision
const habits = [
  {
    title: "Daily maintenance",
    body: "Checking in when nothing is wrong. This is where we want everyone to end up.",
  },
  {
    title: "Reaching early",
    body: "Opening Xolace the moment something feels slightly off, not once it’s grown. This is usually how people start.",
  },
]

export function QuietPart() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-gentle-pulse absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[140px]" />
        <div className="animate-gentle-pulse absolute right-1/4 bottom-0 h-[350px] w-[350px] rounded-full bg-accent/[0.04] blur-[120px] [animation-delay:3s]" />
      </div>

      <div className="section-container-wide relative z-10">
        <ScrollReveal duration={1.0}>
          <div className="max-w-2xl space-y-6">
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              We don&apos;t talk about this much, but it&apos;s the reason
              we&apos;re building this.
            </p>
            <p className="font-serif text-2xl leading-snug font-medium text-foreground md:text-3xl">
              We want mental health care to become as ordinary as skincare.
            </p>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              Nobody waits for their skin to get bad before they look after it.
              It&apos;s a small routine, done whether or not anything is wrong.
              We want caring for your mind to work the same way: a few minutes,
              most days, part of normal life.
            </p>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              Two habits make that real.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid max-w-3xl grid-cols-1 gap-5 md:grid-cols-2">
          {habits.map((habit, i) => (
            <ScrollReveal key={habit.title} delay={0.1 + i * 0.1}>
              <div className="h-full space-y-3 rounded-2xl border border-border/60 bg-background/40 p-7">
                <h3 className="font-serif text-xl font-medium text-foreground">
                  {habit.title}
                </h3>
                <p className="font-serif text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  {habit.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal duration={1.0} className="mt-16 max-w-2xl space-y-6">
          <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
            In ten years, we want someone lying in bed at night with that weight
            on their chest to have an instinct that isn&apos;t
            &ldquo;scroll&rdquo; or &ldquo;push it down.&rdquo; We want it to
            be:{" "}
            <em className="font-serif text-foreground italic">
              &ldquo;Let me go to Xolace.&rdquo;
            </em>
          </p>
          <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
            Not to be diagnosed. To find the words, catch it while it&apos;s
            small, and know they&apos;re not the only one.
          </p>
          <p className="font-serif text-lg leading-loose text-foreground md:text-xl">
            Skincare for your mind. That&apos;s the whole thing.
          </p>
        </ScrollReveal>

        <ScrollReveal
          delay={0.3}
          duration={1.0}
          className="mt-20 max-w-3xl md:mt-28"
        >
          <div className="mb-10 h-px w-16 bg-primary/20" />
          <p className="font-serif text-4xl leading-[1.1] font-semibold text-foreground md:text-6xl lg:text-[4.25rem]">
            We built this because we needed it.
          </p>
          <p className="mt-3 font-serif text-4xl leading-[1.1] font-semibold text-foreground/50 md:text-6xl lg:text-[4.25rem]">
            We keep building it because you might need it too.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
