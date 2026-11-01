"use client"

import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"
import {
  Body,
  CardHeading,
  LedgerSection,
  Lead,
  SectionHeading,
} from "@/components/shared/ledger"

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
    <LedgerSection label="The Quiet Part">
      <ScrollReveal className="max-w-2xl space-y-6">
        <Body>
          We don&apos;t talk about this much, but it&apos;s the reason
          we&apos;re building this.
        </Body>
        <SectionHeading>
          We want mental health care to become as ordinary as skincare.
        </SectionHeading>
        <Body>
          Nobody waits for their skin to get bad before they look after it.
          It&apos;s a small routine, done whether or not anything is wrong. We
          want caring for your mind to work the same way: a few minutes, most
          days, part of normal life.
        </Body>
        <Body>Two habits make that real.</Body>
      </ScrollReveal>

      <div className="mt-10 grid max-w-2xl gap-x-8 gap-y-8 sm:grid-cols-2">
        {habits.map((habit, i) => (
          <ScrollReveal key={habit.title} delay={0.1 + i * 0.08}>
            <div className="h-full space-y-3 rounded-2xl border border-border/70 bg-xo-surface-lowest p-6">
              <CardHeading>{habit.title}</CardHeading>
              <Body className="md:text-base">{habit.body}</Body>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-14 max-w-2xl space-y-6">
        <Body>
          In ten years, we want someone lying in bed at night with that weight
          on their chest to have an instinct that isn&apos;t
          &ldquo;scroll&rdquo; or &ldquo;push it down.&rdquo; We want it to be:{" "}
          <em className="text-foreground">
            &ldquo;Let me go to Xolace.&rdquo;
          </em>
        </Body>
        <Body>
          Not to be diagnosed. To find the words, catch it while it&apos;s
          small, and know they&apos;re not the only one.
        </Body>
        <Lead className="text-foreground">
          Skincare for your mind. That&apos;s the whole thing.
        </Lead>
      </ScrollReveal>

      <ScrollReveal delay={0.2} className="mt-16 max-w-3xl md:mt-24">
        <p className="text-[2rem] leading-[1.1] font-medium tracking-[-0.02em] text-foreground md:text-5xl md:leading-[1.05]">
          We built this because we needed it.
        </p>
        <p className="mt-2 text-[2rem] leading-[1.1] font-medium tracking-[-0.02em] text-muted-foreground/60 md:text-5xl md:leading-[1.05]">
          We keep building it because you might need it too.
        </p>
      </ScrollReveal>
    </LedgerSection>
  )
}
