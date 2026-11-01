"use client"

import { m as motion } from "motion/react"
import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"
import {
  Body,
  LedgerSection,
  Lead,
  SectionHeading,
} from "@/components/shared/ledger"

function SpectrumDiagram() {
  return (
    <div className="pt-8">
      <div className="relative h-px w-full bg-border">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-y-[-1px] right-[28%] left-[28%] origin-left bg-primary"
        />
        <span className="absolute top-1/2 left-0 h-3 w-px -translate-y-1/2 bg-muted-foreground/40" />
        <span className="absolute top-1/2 right-0 h-3 w-px -translate-y-1/2 bg-muted-foreground/40" />
        <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs tracking-[0.14em] text-primary uppercase">
          Xolace
        </span>
      </div>
      <div className="mt-4 flex w-full items-start justify-between text-xs tracking-[0.14em] text-muted-foreground/70 uppercase">
        <span className="max-w-28 text-left">
          &ldquo;Everything is fine&rdquo;
        </span>
        <span className="max-w-28 text-right">&ldquo;I need help&rdquo;</span>
      </div>
    </div>
  )
}

export function SpaceBetween() {
  return (
    <LedgerSection label="The Space Between">
      <ScrollReveal>
        <SectionHeading>
          There are two systems in the world right now for how you deal with
          what you feel. Neither one was built for most people.
        </SectionHeading>
      </ScrollReveal>

      <div className="mt-10 max-w-2xl space-y-6">
        <ScrollReveal delay={0.1}>
          <Body>
            The first is social media. You can post a breakdown and get likes
            for it. You can turn your pain into content. You can perform
            vulnerability for an audience that watches but doesn&apos;t witness.
          </Body>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <Body>
            The second is therapy. It helps when you can get it. But therapy is
            expensive, time-bound, and designed for when things are already bad.
            You have to know what&apos;s wrong before you walk in the door. You
            have to have the words.
          </Body>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Body>Most people don&apos;t have the words.</Body>
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <Body>
            That&apos;s the thing no one talks about. The mental health
            conversation has gotten louder, but louder hasn&apos;t meant deeper.
            Having a conversation <em>about</em> feelings is not the same as
            having a space to <em>feel</em> them.
          </Body>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <Body>
            There is a massive space between &ldquo;Everything is fine&rdquo;
            and &ldquo;I need help.&rdquo; Most people live their entire lives
            in that space. Carrying things they can&apos;t name. Performing
            okayness they don&apos;t feel. Wondering if what they&apos;re going
            through even counts.
          </Body>
        </ScrollReveal>
        <ScrollReveal delay={0.35}>
          <Lead className="text-foreground">It counts.</Lead>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.2} className="mt-14 max-w-2xl md:mt-20">
        <SpectrumDiagram />
      </ScrollReveal>

      <ScrollReveal delay={0.15} className="mt-16 max-w-2xl md:mt-24">
        <Lead className="text-foreground">
          Most of what weighs on people never gets a name. So it never gets
          dealt with.
        </Lead>
        <Body className="mt-6">
          Most people don&apos;t avoid processing emotions because they
          don&apos;t care. They avoid it because they don&apos;t know where to
          start. They don&apos;t know what to say. They open their mouth or put
          their fingers on a keyboard and the feeling is right there, enormous
          and shapeless, and they can&apos;t get it out.
        </Body>
      </ScrollReveal>

      <ScrollReveal delay={0.2} className="mt-10 max-w-2xl">
        <p className="border-l border-primary pl-5 text-lg leading-[1.45] text-foreground">
          {
            "That’s where Xolace meets you: in the daily, early moment, before it has a name."
          }
        </p>
      </ScrollReveal>
    </LedgerSection>
  )
}
