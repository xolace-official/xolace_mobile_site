"use client"

import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"

export function QuietPart() {
  return (
    <section className="asymmetric-layout py-20 md:py-32 mb-32 md:mb-52 relative">
      <ScrollReveal duration={1.0}>
        <div className="max-w-2xl space-y-6">
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            We don&apos;t talk about this much, but it&apos;s the reason
            we&apos;re building this.
          </p>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            In ten years, we want someone lying in bed at night with that weight
            on their chest, with that thing they can&apos;t name, to have an
            instinct that isn&apos;t &ldquo;scroll&rdquo; or &ldquo;push it
            down.&rdquo;
          </p>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            We want their instinct to be:{" "}
            <em className="font-serif italic text-foreground">
              &ldquo;Let me go to Xolace.&rdquo;
            </em>
          </p>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            Not to be entertained. Not to be distracted. Not to be diagnosed.
          </p>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            To be honest. To find the words. And to know they&apos;re not the
            only one.
          </p>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            That&apos;s it. That&apos;s the whole thing.
          </p>
        </div>
      </ScrollReveal>

      {/* Closing coda */}
      <div className="relative mt-16 md:mt-24">
        {/* Subtle atmospheric glow */}
        <div className="absolute -top-12 left-0 w-48 h-48 bg-primary/3 blur-[120px] rounded-full pointer-events-none" />

        <ScrollReveal delay={0.4} duration={1.0}>
          <div className="relative z-10">
            <div className="h-px w-16 bg-xo-outline-variant/20 mb-12" />
            <p className="text-2xl md:text-3xl text-foreground font-light leading-relaxed italic">
              We built this because we needed it.
            </p>
            <p className="text-2xl md:text-3xl text-foreground font-light leading-relaxed italic mt-2">
              We keep building it because you might need it too.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
