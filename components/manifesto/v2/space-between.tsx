"use client"

import { SectionDivider } from "@/components/manifesto/v2/shared/section-divider"
import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"

export function SpaceBetween() {
  return (
    <section className="asymmetric-layout mb-32 md:mb-52">
      <ScrollReveal>
        <SectionDivider label="The Space Between">
          <p className="text-3xl md:text-4xl text-muted-foreground leading-snug font-light">
            There are two systems in the world right now for how you deal with
            what you feel. Neither one was built for{" "}
            <span className="text-foreground italic">most people.</span>
          </p>
        </SectionDivider>
      </ScrollReveal>

      <div className="max-w-2xl md:ml-auto space-y-6">
        <ScrollReveal delay={0.1}>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            The first is social media. You can post a breakdown and get likes
            for it. You can turn your pain into content. You can perform
            vulnerability for an audience that watches but doesn&apos;t witness.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            The second is therapy. It helps when you can get it. But therapy is
            expensive, time-bound, and designed for when things are already bad.
            You have to know what&apos;s wrong before you walk in the door. You
            have to have the words.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            Most people don&apos;t have the words.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            That&apos;s the thing no one talks about. The mental health
            conversation has gotten louder, but louder hasn&apos;t meant deeper.
            Having a conversation{" "}
            <em className="font-serif italic">about</em> feelings is not the
            same as having a space to <em className="font-serif italic">feel</em>{" "}
            them.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            There is a massive space between &ldquo;Everything is fine&rdquo;
            and &ldquo;I need help.&rdquo; Most people live their entire lives
            in that space. Carrying things they can&apos;t name. Performing
            okayness they don&apos;t feel. Wondering if what they&apos;re going
            through even counts.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <p className="font-serif text-lg md:text-xl text-foreground leading-loose">
            It counts.
          </p>
        </ScrollReveal>
      </div>

      {/* The articulation thesis — visually elevated */}
      <ScrollReveal delay={0.15} className="max-w-3xl mt-16 md:mt-24">
        <p className="text-2xl md:text-3xl text-foreground font-light leading-snug">
          We built Xolace to give people space to express themselves. What we
          discovered is that expression was never the problem.{" "}
          <strong className="text-foreground">Language was.</strong>
        </p>
        <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose mt-6">
          Most people don&apos;t avoid processing emotions because they
          don&apos;t care. They avoid it because they don&apos;t know where to
          start. They don&apos;t know what to say. They open their mouth or put
          their fingers on a keyboard and the feeling is right there, enormous
          and shapeless, and they can&apos;t get it out.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.2} className="mt-12">
        <p className="font-serif italic text-xl text-foreground">
          That&apos;s the problem Xolace exists to solve. Not expression.
          Articulation.
        </p>
      </ScrollReveal>
    </section>
  )
}
