"use client"

import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"

export function OpeningV2() {
  return (
    <section className="asymmetric-layout mb-32 md:mb-52">
      <ScrollReveal>
        <span className="text-primary tracking-[0.2em] uppercase text-[10px] block mb-8">
          A Quiet Vigil
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-foreground mb-12 leading-[1.1] tracking-tight max-w-4xl font-light">
          Why Xolace exists.
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="max-w-2xl">
          <p className="font-serif italic text-xl md:text-2xl text-muted-foreground leading-relaxed">
            We built this because we needed it. Nothing else did what we were
            looking for. We&apos;re not trying to fix you, we&apos;re trying to
            build the place we wished existed on the nights when something was
            sitting on our chest and we had no one to call.
          </p>
        </div>
      </ScrollReveal>

      <div className="max-w-2xl mt-12 space-y-6">
        <ScrollReveal delay={0.25}>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            There&apos;s a moment most people know but never talk about.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            You&apos;re lying in bed. The day is over. And something is sitting
            on your chest, not an emergency, not a crisis, just a weight.
            You don&apos;t know what to call it. You don&apos;t have anyone to
            call about it. You definitely don&apos;t think it&apos;s &ldquo;bad
            enough&rdquo; for therapy.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            So you scroll. Or you push it down. Or you tell yourself
            you&apos;ll deal with it tomorrow.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            Tomorrow never comes.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.45}>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
            We&apos;ve been that person. Most people have been that person. And
            we kept asking the same question:{" "}
            <strong className="text-foreground">
              why isn&apos;t there a place for this?
            </strong>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
