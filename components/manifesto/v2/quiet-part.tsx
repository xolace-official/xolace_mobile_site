"use client"

import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"

export function QuietPart() {
  return (
    <section className="section-spacing relative overflow-hidden">

      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[140px] top-0 left-1/2 -translate-x-1/2 animate-gentle-pulse" />
        <div className="absolute w-[350px] h-[350px] rounded-full bg-accent/[0.04] blur-[120px] bottom-0 right-1/4 animate-gentle-pulse [animation-delay:3s]" />
      </div>

      <div className="section-container-wide relative z-10">

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

        <ScrollReveal delay={0.3} duration={1.0} className="mt-20 md:mt-28 max-w-3xl">
          <div className="h-px w-16 bg-primary/20 mb-10" />
          <p className="font-serif italic text-2xl md:text-4xl text-foreground font-light leading-[1.2]">
            We built this because we needed it.
          </p>
          <p className="font-serif italic text-2xl md:text-4xl text-foreground/60 font-light leading-[1.2] mt-3">
            We keep building it because you might need it too.
          </p>
        </ScrollReveal>

      </div>
    </section>
  )
}
