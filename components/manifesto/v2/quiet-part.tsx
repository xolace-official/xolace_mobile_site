"use client"

import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"

export function QuietPart() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-gentle-pulse absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[140px]" />
        <div className="animate-gentle-pulse absolute right-1/4 bottom-0 h-[350px] w-[350px] rounded-full bg-accent/[0.04] blur-[120px] [animation-delay:3s]" />
      </div>

      <div className="section-container-wide relative z-10">
        <ScrollReveal duration={1.0}>
          <div className="max-w-2xl space-y-6">
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              We don&apos;t talk about this much, but it&apos;s the reason
              we&apos;re building this.
            </p>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              In ten years, we want someone lying in bed at night with that
              weight on their chest, with that thing they can&apos;t name, to
              have an instinct that isn&apos;t &ldquo;scroll&rdquo; or
              &ldquo;push it down.&rdquo;
            </p>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              We want their instinct to be:{" "}
              <em className="font-serif text-foreground italic">
                &ldquo;Let me go to Xolace.&rdquo;
              </em>
            </p>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              Not to be entertained. Not to be distracted. Not to be diagnosed.
            </p>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              To be honest. To find the words. And to know they&apos;re not the
              only one.
            </p>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              That&apos;s it. That&apos;s the whole thing.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal
          delay={0.3}
          duration={1.0}
          className="mt-20 max-w-3xl md:mt-28"
        >
          <div className="mb-10 h-px w-16 bg-primary/20" />
          <p className="font-serif text-2xl leading-[1.2] font-light text-foreground italic md:text-4xl">
            We built this because we needed it.
          </p>
          <p className="mt-3 font-serif text-2xl leading-[1.2] font-light text-foreground/60 italic md:text-4xl">
            We keep building it because you might need it too.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
