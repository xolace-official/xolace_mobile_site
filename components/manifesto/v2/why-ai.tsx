"use client"

import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"
import {
  Body,
  Eyebrow,
  LedgerSection,
  SectionHeading,
} from "@/components/shared/ledger"

// docs/xolace.md §5: the three things only people give
const onlyPeople = [
  "Being chosen by someone who had no obligation to choose you.",
  "Hearing from someone who went through it and came out the other side.",
  "Proof that you aren’t uniquely, privately broken.",
]

// Illustrative, not real sessions: the label above them says so
const exampleReflections = [
  "Some days I feel like I’m performing being okay and no one can tell.",
  "The exhaustion isn’t physical. It’s from pretending.",
  "I've described it to three different people and none of them got it. I'm not even sure I got it.",
]

export function WhyAI() {
  return (
    <LedgerSection label="Why AI Isn't Enough">
      <ScrollReveal>
        <SectionHeading>We need to be honest about something.</SectionHeading>
      </ScrollReveal>

      <div className="mt-10 max-w-2xl space-y-6">
        <ScrollReveal delay={0.1}>
          <Body>
            When an AI says &ldquo;I understand what you&apos;re going
            through,&rdquo; it doesn&apos;t. It&apos;s pattern matching.
            It&apos;s prediction. It has read millions of words about human pain
            and it can reflect yours back with startling accuracy, but it has
            never felt the weight on its own chest at 2am. It has never been
            that person in the bed.
          </Body>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <Body>
            We know that. We built on AI anyway, because we think of it as{" "}
            <strong className="font-normal text-foreground">80/20</strong>.
          </Body>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Body>
            The 80% is the AI. It&apos;s there at 3am, never tired, never
            judging, never making you feel like a burden. It{" "}
            <strong className="font-normal text-foreground">
              finds the words when you have none
            </strong>
            , and it notices patterns across weeks that you can&apos;t see day
            to day. Finding the words matters more than it sounds. Articulation
            is a kind of exhale: once the thing has edges, you can look at it.
          </Body>
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <Body>
            The 20% is people. Some things no AI can give, however good it gets:
          </Body>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.1} className="mt-12 max-w-2xl">
        <ol className="border-b border-border">
          {onlyPeople.map((line, i) => (
            <li key={line} className="flex gap-6 border-t border-border py-5">
              <span className="pt-1 text-xs text-primary tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg leading-snug text-foreground md:text-xl">
                {line}
              </span>
            </li>
          ))}
        </ol>
      </ScrollReveal>

      <div className="mt-12 max-w-2xl space-y-6">
        <ScrollReveal delay={0.1}>
          <Body>
            That last one sits under a lot of what people carry: not &ldquo;I
            feel bad,&rdquo; but &ldquo;I feel bad in a way that makes me
            different from everyone else.&rdquo; Only another person can break
            that.
          </Body>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <Body>
            So we picture Xolace as a campfire. You sit by the fire on your own.
            Its light helps you see what you&apos;re carrying. Now and then you
            hear quiet voices from others in the dark, strangers who feel what
            you feel.
          </Body>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Body>
            The fire is the AI, and we call it{" "}
            <strong className="font-normal text-foreground">the Fire</strong>.
            It lights things up and keeps you warm, but it isn&apos;t the one
            you&apos;re there to meet. The support Xolace routes you to we call{" "}
            <strong className="font-normal text-foreground">Kindlings</strong>:
            things we built for you to do, from a short exercise to a chat with
            a trained peer listener to help reaching someone in your life.
          </Body>
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <Body>And the voices in the dark sound like this.</Body>
        </ScrollReveal>
      </div>

      <figure className="mt-14 md:mt-20">
        <ScrollReveal>
          <figcaption>
            <Eyebrow>Examples of what people share</Eyebrow>
          </figcaption>
        </ScrollReveal>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {exampleReflections.map((reflection, i) => (
            <ScrollReveal
              key={reflection}
              delay={i * 0.1}
              className="rounded-2xl border border-primary/15 bg-primary/[0.04]"
            >
              <blockquote className="h-full p-6 text-lg leading-snug text-foreground/80 italic md:p-8">
                &ldquo;{reflection}&rdquo;
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </figure>

      <ScrollReveal delay={0.1} className="mt-12 max-w-2xl">
        <Body>
          When words like those loosen something in your chest, that&apos;s not
          the AI. That&apos;s another person. The Fire helped you find the
          words.{" "}
          <strong className="font-normal text-foreground">
            Someone else helped you feel less alone in them.
          </strong>
        </Body>
      </ScrollReveal>
    </LedgerSection>
  )
}
