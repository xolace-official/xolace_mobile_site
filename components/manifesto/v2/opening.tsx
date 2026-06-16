"use client"

import { m as motion } from "motion/react"
import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"

export function OpeningV2() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-gentle-pulse absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[160px]" />
      </div>

      <div className="section-container-wide relative z-10">
        <ScrollReveal>
          <h1 className="mb-12 max-w-4xl font-serif text-5xl leading-[1.1] font-light text-foreground italic md:text-7xl lg:text-8xl">
            Why Xolace exists.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="max-w-2xl">
            <p className="font-serif text-xl leading-relaxed text-muted-foreground/80 italic md:text-2xl">
              We built this because we needed it. Nothing else did what we were
              looking for. We&apos;re not trying to fix you — we&apos;re trying
              to build the place we wished existed on the nights when something
              was sitting on our chest and we had no one to call.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 max-w-2xl space-y-6">
          <ScrollReveal delay={0.25}>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              There&apos;s a moment most people know but never talk about.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              You&apos;re lying in bed. The day is over. Something is sitting on
              your chest — not an emergency, not a crisis, just a weight. You
              don&apos;t know what to call it. You don&apos;t have anyone to
              call about it. You definitely don&apos;t think it&apos;s
              &ldquo;bad enough&rdquo; for therapy.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              So you scroll. Or you push it down. Or you tell yourself
              you&apos;ll deal with it tomorrow.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              Tomorrow never comes.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.45}>
            <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
              We&apos;ve been that person. Most people have. And we kept asking
              the same question:{" "}
              <strong className="font-medium text-foreground">
                why isn&apos;t there a place for this?
              </strong>
            </p>
          </ScrollReveal>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex max-w-2xl origin-left items-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-primary/25 to-transparent" />
          <div className="size-1.5 shrink-0 rounded-full bg-primary/30" />
        </motion.div>
      </div>
    </section>
  )
}
