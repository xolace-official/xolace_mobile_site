"use client"

import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"
import {
  Body,
  LedgerSection,
  Lead,
  SectionHeading,
} from "@/components/shared/ledger"

// Copy follows docs/xolace.md §2 and §3: compounding, and "fewer people reach the queue" framed as a bet.
const paragraphs = [
  "It stacks: one hard week on another, one unspoken thing under the next. We call this compounding.",
  "By the time it's big enough to have a name, it's often big enough to need a professional. And the queue for that is long.",
  "The usual answer is to move the queue faster: more therapists, quicker triage, shorter waitlists. That matters. But a queue that keeps refilling never empties.",
]

export function ItStacks() {
  return (
    <LedgerSection label="It Stacks">
      <ScrollReveal>
        <SectionHeading>And it doesn&apos;t stay small.</SectionHeading>
      </ScrollReveal>

      <div className="mt-10 max-w-2xl space-y-6">
        {paragraphs.map((text, i) => (
          <ScrollReveal key={text} delay={0.1 + i * 0.05}>
            <Body>{text}</Body>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.15} className="mt-16 max-w-2xl md:mt-20">
        <Lead className="text-foreground">
          We work the other end. We think that when Xolace works,{" "}
          <span className="text-primary">
            fewer people ever reach the queue
          </span>
          , because what they were carrying got caught while it was still small.
        </Lead>
        <Body className="mt-6">
          That&apos;s a conviction, and a bet we have to prove. One line under
          it doesn&apos;t bend: fewer people needing care is a win. People who
          need care and don&apos;t get it is a failure, however good our other
          numbers look.
        </Body>
      </ScrollReveal>
    </LedgerSection>
  )
}
