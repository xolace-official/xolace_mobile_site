"use client"

import { SectionDivider } from "@/components/manifesto/v2/shared/section-divider"
import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"

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

const bodyClass =
  "font-serif text-base leading-loose text-muted-foreground md:text-lg"

export function WhyAI() {
  return (
    <section className="section-spacing">
      <div className="section-container-wide">
        <ScrollReveal>
          <SectionDivider label="Why AI Isn't Enough">
            <p className="font-serif text-3xl leading-snug font-medium text-foreground md:text-4xl">
              We need to be honest about something.
            </p>
          </SectionDivider>
        </ScrollReveal>

        <div className="max-w-2xl space-y-6 md:ml-auto">
          <ScrollReveal delay={0.1}>
            <p className={bodyClass}>
              When an AI says &ldquo;I understand what you&apos;re going
              through,&rdquo; it doesn&apos;t. It&apos;s pattern matching.
              It&apos;s prediction. It has read millions of words about human
              pain and it can reflect yours back with startling accuracy, but it
              has never felt the weight on its own chest at 2am. It has never
              been that person in the bed.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className={bodyClass}>
              We know that. We built on AI anyway, because we think of it as{" "}
              <strong className="text-foreground">80/20</strong>.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className={bodyClass}>
              The 80% is the AI. It&apos;s there at 3am, never tired, never
              judging, never making you feel like a burden. It{" "}
              <strong className="text-foreground">
                finds the words when you have none
              </strong>
              , and it notices patterns across weeks that you can&apos;t see day
              to day. Finding the words matters more than it sounds.
              Articulation is a kind of exhale: once the thing has edges, you
              can look at it.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className={bodyClass}>
              The 20% is people. Some things no AI can give, however good it
              gets:
            </p>
          </ScrollReveal>
        </div>

        <div className="my-14 max-w-2xl space-y-5 md:my-20 md:ml-auto">
          {onlyPeople.map((line, i) => (
            <ScrollReveal key={line} delay={0.1 + i * 0.08}>
              <p className="flex gap-5 font-serif text-lg leading-snug text-foreground md:text-xl">
                <span
                  aria-hidden
                  className="mt-3 h-px w-8 shrink-0 bg-primary/40"
                />
                {line}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <div className="max-w-2xl space-y-6 md:ml-auto">
          <ScrollReveal delay={0.1}>
            <p className={bodyClass}>
              That last one sits under a lot of what people carry: not &ldquo;I
              feel bad,&rdquo; but &ldquo;I feel bad in a way that makes me
              different from everyone else.&rdquo; Only another person can break
              that.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className={bodyClass}>
              So we picture Xolace as a campfire. You sit by the fire on your
              own. Its light helps you see what you&apos;re carrying. Now and
              then you hear quiet voices from others in the dark, strangers who
              feel what you feel.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className={bodyClass}>
              The fire is the AI, and we call it{" "}
              <strong className="text-foreground">the Fire</strong>. It lights
              things up and keeps you warm, but it isn&apos;t the one
              you&apos;re there to meet. The support Xolace routes you to we
              call <strong className="text-foreground">Kindlings</strong>:
              things we built for you to do, from a short exercise to a chat
              with a trained peer listener to help reaching someone in your
              life.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className={bodyClass}>
              And the voices in the dark sound like this.
            </p>
          </ScrollReveal>
        </div>

        <figure className="my-16 md:my-24">
          <ScrollReveal>
            <figcaption className="text-center font-mono text-[11px] tracking-[0.24em] text-muted-foreground/50 uppercase">
              Examples of what people share
            </figcaption>
          </ScrollReveal>
          {exampleReflections.map((reflection, i) => (
            <ScrollReveal key={i} delay={i * 0.15} duration={0.9} y={16}>
              <div className="py-8 md:py-12">
                {i > 0 && (
                  <div className="mx-auto mb-8 h-px w-12 bg-primary/15 md:mb-12" />
                )}
                <blockquote className="mx-auto max-w-lg text-center font-serif text-lg leading-relaxed text-foreground/70 italic md:text-xl">
                  &ldquo;{reflection}&rdquo;
                </blockquote>
              </div>
            </ScrollReveal>
          ))}
        </figure>

        <div className="max-w-2xl space-y-6 md:ml-auto">
          <ScrollReveal delay={0.1}>
            <p className={bodyClass}>
              When words like those loosen something in your chest, that&apos;s
              not the AI. That&apos;s another person. The Fire helped you find
              the words.{" "}
              <strong className="text-foreground">
                Someone else helped you feel less alone in them.
              </strong>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
