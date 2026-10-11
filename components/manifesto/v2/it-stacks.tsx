"use client"

import { SectionDivider } from "@/components/manifesto/v2/shared/section-divider"
import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"

// Copy follows docs/xolace.md §2 and §3: compounding, and "fewer people reach the queue" framed as a bet.
const paragraphs = [
  "It stacks: one hard week on another, one unspoken thing under the next. We call this compounding.",
  "By the time it's big enough to have a name, it's often big enough to need a professional. And the queue for that is long.",
  "The usual answer is to move the queue faster: more therapists, quicker triage, shorter waitlists. That matters. But a queue that keeps refilling never empties.",
]

export function ItStacks() {
  return (
    <section className="section-spacing">
      <div className="section-container-wide">
        <ScrollReveal>
          <SectionDivider label="It Stacks">
            <p className="font-serif text-3xl leading-snug font-medium text-foreground md:text-4xl">
              And it doesn&apos;t stay small.
            </p>
          </SectionDivider>
        </ScrollReveal>

        <div className="max-w-2xl space-y-6 md:ml-auto">
          {paragraphs.map((text, i) => (
            <ScrollReveal key={text} delay={0.1 + i * 0.05}>
              <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
                {text}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.15} className="mt-16 max-w-3xl md:mt-24">
          <p className="font-serif text-2xl leading-snug font-medium text-foreground md:text-3xl">
            We work the other end. We think that when Xolace works,{" "}
            <strong className="font-semibold">
              fewer people ever reach the queue
            </strong>
            , because what they were carrying got caught while it was still
            small.
          </p>
          <p className="mt-6 font-serif text-base leading-loose text-muted-foreground md:text-lg">
            That&apos;s a conviction, and a bet we have to prove. One line under
            it doesn&apos;t bend: fewer people needing care is a win. People who
            need care and don&apos;t get it is a failure, however good our other
            numbers look.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
