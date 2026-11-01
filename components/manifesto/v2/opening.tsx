"use client"

import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"
import {
  Body,
  DisplayHeading,
  Eyebrow,
  Lead,
  HeroGlow,
} from "@/components/shared/ledger"

const scene = [
  "There’s a moment most people know but never talk about.",
  "You’re lying in bed. The day is over. Something is sitting on your chest — not an emergency, not a crisis, just a weight. You don’t know what to call it. You don’t have anyone to call about it. You definitely don’t think it’s “bad enough” for therapy.",
  "So you scroll. Or you push it down. Or you tell yourself you’ll deal with it tomorrow.",
  "Tomorrow never comes. The weight stays, and the next one lands on top of it.",
]

export function OpeningV2() {
  return (
    <section className="section-spacing relative">
      <HeroGlow />
      <div className="section-container-wide relative z-10">
        <ScrollReveal>
          <Eyebrow>The Manifesto</Eyebrow>
          <DisplayHeading className="mt-6 max-w-3xl">
            Why Xolace exists.
          </DisplayHeading>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-8 max-w-2xl">
          <Lead>
            We built this because we needed it. Nothing else did what we were
            looking for. We&apos;re not trying to fix you — we&apos;re trying to
            build the place we wished existed on the nights when something was
            sitting on our chest and we had no one to call.
          </Lead>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
          <div aria-hidden />
          <div className="max-w-2xl space-y-6">
            {scene.map((line, i) => (
              <ScrollReveal key={line} delay={0.15 + i * 0.05}>
                <Body>{line}</Body>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={0.4}>
              <Body>
                We&apos;ve been that person. Most people have. And we kept
                asking the same question:{" "}
                <strong className="font-normal text-foreground">
                  why isn&apos;t there a place for this?
                </strong>
              </Body>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
