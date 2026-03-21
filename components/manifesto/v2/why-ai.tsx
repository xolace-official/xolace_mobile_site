"use client"

import { SectionDivider } from "@/components/manifesto/v2/shared/section-divider"
import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"

const peerReflections = [
  "Some days I feel like I\u2019m performing being okay and no one can tell.",
  "The exhaustion isn\u2019t physical. It\u2019s from pretending.",
  "I keep waiting for someone to ask how I really am.",
]

export function WhyAI() {
  return (
    <section className="asymmetric-layout mb-32 md:mb-52">
      <ScrollReveal>
        <SectionDivider label="Why AI Isn't Enough">
          <p className="text-3xl md:text-4xl text-muted-foreground leading-snug font-light">
            We need to be honest about something.
          </p>
        </SectionDivider>
      </ScrollReveal>

      <div className="max-w-2xl md:ml-auto space-y-6">
        <ScrollReveal delay={0.1}>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            When an AI says &ldquo;I understand what you&apos;re going
            through,&rdquo; it doesn&apos;t. It&apos;s pattern matching.
            It&apos;s prediction. It has read millions of words about human pain
            and it can reflect yours back with startling accuracy, but it has
            never felt the weight on its own chest at 2am. It has never been that
            person in the bed.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            We know that. We built one anyway.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            Not because we think AI can replace human empathy. Because it can do
            something humans can&apos;t always do in the moment:{" "}
            <strong className="text-foreground">
              it can help you find the words when you have none.
            </strong>{" "}
            It can sit with you at 2am without judgment, without fatigue, without
            needing you to perform your pain in a way that makes sense. It can
            hold the space while you figure out what you&apos;re carrying.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            But the AI is the bridge, not the destination.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            Because after it helps you name what you&apos;re feeling, something
            else happens. You see that other people have carried this too. Not in
            a chat room. Not in a comments section. Not in a support group where
            you have to introduce yourself and tell your story. Just quiet,
            anonymous words from someone who was exactly where you are, who felt
            the same nameless thing and found their version of the words for
            it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            No profile. No username. No reply button. Just recognition.
          </p>
        </ScrollReveal>
      </div>

      {/* Peer reflections — whispered confessions */}
      <div className="my-20 md:my-32">
        {peerReflections.map((reflection, i) => (
          <ScrollReveal
            key={i}
            delay={i * 0.15}
            duration={0.9}
            y={16}
          >
            <div className="py-8 md:py-12">
              {i > 0 && (
                <div className="h-px w-12 bg-primary/15 mx-auto mb-8 md:mb-12" />
              )}
              <p className="font-serif italic text-lg md:text-xl text-foreground/70 leading-relaxed text-center max-w-lg mx-auto">
                &ldquo;{reflection}&rdquo;
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* After reflections — the thesis */}
      <div className="max-w-2xl md:ml-auto space-y-6">
        <ScrollReveal delay={0.1}>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            When you read those and something in your chest loosens, that&apos;s
            not AI. That&apos;s human. That&apos;s one person&apos;s honesty
            reaching another across the silence. The AI helped you name your
            feeling. Another person helped you feel less alone in it.{" "}
            <strong className="text-foreground">
              That combination, machine precision and human recognition, is
              what nothing else provides.
            </strong>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            We believe in human connection deeply. We just don&apos;t believe it
            requires conversation. It requires recognition. The feeling of{" "}
            <em className="font-serif italic">&ldquo;I&apos;m not the only one&rdquo;</em>{" "}
            is quieter than a conversation and more powerful than any chatbot
            response. Our job is to engineer that moment of recognition and to
            protect it fiercely.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
