"use client"

import { m as motion } from "motion/react"
import { Sparkles, Users } from "lucide-react"
import { SectionDivider } from "@/components/manifesto/v2/shared/section-divider"
import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"

function BridgeDiagram() {
  return (
    <div className="flex max-w-sm items-center gap-4 py-2">
      <div className="flex shrink-0 flex-col items-center gap-2">
        <div className="flex size-12 items-center justify-center rounded-full border border-primary/20 bg-primary/[0.05]">
          <Sparkles className="size-4 text-primary/70" strokeWidth={1.5} />
        </div>
        <p className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground/40 uppercase">
          AI
        </p>
      </div>

      <div className="relative h-px flex-1 border-t border-dashed border-border/40">
        <motion.span
          animate={{ left: ["0%", "100%", "0%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/70"
        />
        <p className="absolute -top-6 left-1/2 -translate-x-1/2 text-center font-mono text-[9px] tracking-[0.16em] whitespace-nowrap text-muted-foreground/40 uppercase">
          the bridge
        </p>
      </div>

      <div className="flex shrink-0 flex-col items-center gap-2">
        <div className="flex size-12 items-center justify-center rounded-full border border-accent/20 bg-accent/[0.05]">
          <Users className="size-4 text-accent/70" strokeWidth={1.5} />
        </div>
        <p className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground/40 uppercase">
          Human
        </p>
      </div>
    </div>
  )
}

const peerReflections = [
  "Some days I feel like I’m performing being okay and no one can tell.",
  "The exhaustion isn’t physical. It’s from pretending.",
  "I've described it to three different people and none of them got it. I'm not even sure I got it.",
]

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
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              When an AI says &ldquo;I understand what you&apos;re going
              through,&rdquo; it doesn&apos;t. It&apos;s pattern matching.
              It&apos;s prediction. It has read millions of words about human
              pain and it can reflect yours back with startling accuracy, but it
              has never felt the weight on its own chest at 2am. It has never
              been that person in the bed.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              We know that. We built one anyway.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              Not because we think AI can replace human empathy. Because it can
              do something humans can&apos;t always do in the moment:{" "}
              <strong className="text-foreground">
                find the words when you have none.
              </strong>{" "}
              Sit with you at 2am without judgment, without fatigue, without
              needing you to perform your pain in a way that makes sense. Hold
              the space while you figure out what you&apos;re carrying.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              But the AI is the bridge, not the destination.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal
          delay={0.28}
          className="my-14 max-w-2xl md:my-20 md:ml-auto"
        >
          <BridgeDiagram />
        </ScrollReveal>

        <div className="max-w-2xl space-y-6 md:ml-auto">
          <ScrollReveal delay={0.3}>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              Because after it helps you name what you&apos;re feeling,
              something else happens. You see that other people have carried
              this too. Not in a chat room. Not in a comments section. Not in a
              support group where you have to introduce yourself and tell your
              story. Just quiet, anonymous words from someone who was exactly
              where you are, who felt the same nameless thing and found their
              version of the words for it.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              No profile. No username. No reply button. Just recognition.
            </p>
          </ScrollReveal>
        </div>

        <div className="my-20 md:my-32">
          {peerReflections.map((reflection, i) => (
            <ScrollReveal key={i} delay={i * 0.15} duration={0.9} y={16}>
              <div className="py-8 md:py-12">
                {i > 0 && (
                  <div className="mx-auto mb-8 h-px w-12 bg-primary/15 md:mb-12" />
                )}
                <p className="mx-auto max-w-lg text-center font-serif text-lg leading-relaxed text-foreground/70 italic md:text-xl">
                  &ldquo;{reflection}&rdquo;
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="max-w-2xl space-y-6 md:ml-auto">
          <ScrollReveal delay={0.1}>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              When you read those and something in your chest loosens,
              that&apos;s not AI. That&apos;s human. One person&apos;s honesty
              reaching another across the silence. The AI helped you name your
              feeling. Another person helped you feel less alone in it.{" "}
              <strong className="text-foreground">
                That combination of language from the AI and recognition from
                another human is what nothing else offers.
              </strong>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              We believe in human connection deeply. We just don&apos;t believe
              it requires conversation. It requires recognition.{" "}
              <em className="font-serif italic">
                &ldquo;I&apos;m not the only one&rdquo;
              </em>{" "}
              is quieter than a conversation and more powerful than any chatbot
              response. Our job is to engineer that moment and protect it
              fiercely.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
