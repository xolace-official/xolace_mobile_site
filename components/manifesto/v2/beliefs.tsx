"use client"

import { Sunrise, Droplets, Users, Feather, ShieldCheck } from "lucide-react"
import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"
import {
  FeatureCard,
  type Feature,
} from "@/components/manifesto/v2/shared/feature-card"
import { Eyebrow, Hairline, SectionHeading } from "@/components/shared/ledger"

const beliefs: Feature[] = [
  {
    title: "Healing happens in honest moments.",
    body: "Not in grand breakthroughs, but in the small act of telling the truth to yourself. The moment you spend naming what you feel matters more than you think.",
    Icon: Sunrise,
  },
  {
    title: "Skincare for your mind.",
    body: "You don't wait for your skin to get bad before you look after it. Your mind deserves the same small, daily care, whether or not anything is wrong.",
    Icon: Droplets,
  },
  {
    title: "AI should make human connection more reachable, not replace it.",
    body: "AI prepares people for each other. What stops us reaching someone is often friction: no words for it, fear of judgment, not knowing who to go to. AI can clear that, so you walk into a conversation already knowing what you want to say.",
    Icon: Users,
  },
  {
    title: "People deserve a place to be human without performing.",
    body: "You are not a brand. You are not an audience. You are not a data point. You are a person carrying something, and you walked in here because you needed somewhere to set it down. That's enough.",
    Icon: Feather,
  },
  {
    title: "Safe spaces need structure, not just intention.",
    body: "Anyone can say “this is a safe space.” We build it in: every message is screened before the AI responds, and the AI routes you to support from a sandbox we built. It never invents support. Safety is architecture, not a promise.",
    link: { text: "How Xolace keeps you safe", href: "/safety" },
    Icon: ShieldCheck,
  },
]

export function Beliefs() {
  return (
    <section className="section-spacing-tight">
      <div className="section-container-wide">
        <Hairline className="mb-10 md:mb-14" />
        <ScrollReveal>
          <Eyebrow>Beliefs</Eyebrow>
          <SectionHeading className="mt-5">What We Believe.</SectionHeading>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((belief, i) => (
            <ScrollReveal key={belief.title} delay={i * 0.08}>
              <FeatureCard feature={belief} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
