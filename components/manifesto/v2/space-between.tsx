"use client"

import { m as motion } from "motion/react"
import { SectionDivider } from "@/components/manifesto/v2/shared/section-divider"
import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"

function SpectrumDiagram() {
  return (
    <div className="flex flex-col items-center gap-5 py-4">
      <div className="relative h-2 w-full rounded-full bg-xo-surface-bright">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-y-0 left-[28%] right-[28%] origin-left rounded-full bg-gradient-to-r from-primary/70 to-accent/70"
        />
        <span className="absolute top-1/2 left-0 size-2.5 -translate-y-1/2 rounded-full bg-muted-foreground/30" />
        <span className="absolute top-1/2 right-0 size-2.5 -translate-y-1/2 rounded-full bg-muted-foreground/30" />
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -top-7 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.2em] text-primary/70 uppercase"
        >
          Xolace
        </motion.span>
      </div>
      <div className="flex w-full items-start justify-between font-mono text-[10px] tracking-[0.16em] text-muted-foreground/40 uppercase">
        <span className="max-w-24 text-left">&ldquo;Everything is fine&rdquo;</span>
        <span className="max-w-24 text-right">&ldquo;I need help&rdquo;</span>
      </div>
    </div>
  )
}

export function SpaceBetween() {
  return (
    <section className="section-spacing">
      <div className="section-container-wide">
        <ScrollReveal>
          <SectionDivider label="The Space Between">
            <p className="font-serif text-3xl leading-snug font-medium text-foreground md:text-4xl">
              There are two systems in the world right now for how you deal with
              what you feel. Neither one was built for most people.
            </p>
          </SectionDivider>
        </ScrollReveal>

        <div className="max-w-2xl space-y-6 md:ml-auto">
          <ScrollReveal delay={0.1}>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              The first is social media. You can post a breakdown and get likes
              for it. You can turn your pain into content. You can perform
              vulnerability for an audience that watches but doesn&apos;t
              witness.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              The second is therapy. It helps when you can get it. But therapy
              is expensive, time-bound, and designed for when things are already
              bad. You have to know what&apos;s wrong before you walk in the
              door. You have to have the words.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              Most people don&apos;t have the words.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              That&apos;s the thing no one talks about. The mental health
              conversation has gotten louder, but louder hasn&apos;t meant
              deeper. Having a conversation{" "}
              <em className="font-serif italic">about</em> feelings is not the
              same as having a space to{" "}
              <em className="font-serif italic">feel</em> them.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              There is a massive space between &ldquo;Everything is fine&rdquo;
              and &ldquo;I need help.&rdquo; Most people live their entire lives
              in that space. Carrying things they can&apos;t name. Performing
              okayness they don&apos;t feel. Wondering if what they&apos;re
              going through even counts.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <p className="font-serif text-lg leading-loose text-foreground md:text-xl">
              It counts.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal
          delay={0.2}
          className="mt-16 max-w-2xl md:mt-20 md:ml-auto"
        >
          <SpectrumDiagram />
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-16 max-w-3xl md:mt-24">
          <p className="font-serif text-2xl leading-snug font-medium text-foreground md:text-3xl">
            We built Xolace to give people space to express themselves. What we
            discovered is that expression was never the problem.{" "}
            <strong className="font-semibold">Language was.</strong>
          </p>
          <p className="mt-6 font-serif text-base leading-loose text-muted-foreground md:text-lg">
            Most people don&apos;t avoid processing emotions because they
            don&apos;t care. They avoid it because they don&apos;t know where to
            start. They don&apos;t know what to say. They open their mouth or
            put their fingers on a keyboard and the feeling is right there,
            enormous and shapeless, and they can&apos;t get it out.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-12">
          <p className="font-serif text-xl font-semibold text-foreground">
            That&apos;s the problem Xolace exists to solve. Not expression.
            Articulation.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
