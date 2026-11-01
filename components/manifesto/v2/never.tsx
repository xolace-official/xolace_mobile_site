"use client"

import {
  MessageCircleOff,
  Rss,
  Megaphone,
  Stethoscope,
  ShieldOff,
  Hourglass,
} from "lucide-react"
import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"
import {
  FeatureCard,
  type Feature,
} from "@/components/manifesto/v2/shared/feature-card"
import { Eyebrow, SectionHeading } from "@/components/shared/ledger"

const neverStatements: Feature[] = [
  {
    title: "Never a chatbot therapist.",
    body: "We don't diagnose. The mirror reflects; it doesn't prescribe. When you need support, it comes from what we built, not from an algorithm making it up.",
    Icon: MessageCircleOff,
  },
  {
    title: "Never a social feed.",
    body: "No followers, no likes, no content to perform for. What you write is yours. Nothing containing your words reaches anyone else unless you choose to share it.",
    Icon: Rss,
  },
  {
    title: "Never showing you ads.",
    body: "Not now. Not ever. Showing an ad to someone who just typed something honest would break everything this is supposed to be.",
    Icon: Megaphone,
  },
  {
    title: "Never replacing a therapist.",
    body: "When you need more than Xolace, our job is to get you there sooner, not to hold on to you. We know what we are. We know what we’re not.",
    Icon: Stethoscope,
  },
  {
    title: "Never selling your data.",
    body: "Your emotional life is not a product. Your late-night honesty is not a data point for someone else’s ad targeting model. We’d rather shut down than cross that line.",
    Icon: ShieldOff,
  },
  {
    title: "Never keeping you for the sake of it.",
    body: "Come back because it helps. Time in the app isn’t a win for us, and heavy late-night use is something we watch, not something we celebrate.",
    Icon: Hourglass,
  },
]

export function Never() {
  return (
    <section className="section-spacing-tight bg-primary/[0.03]">
      <div className="section-container-wide">
        <ScrollReveal>
          <Eyebrow>Lines we hold</Eyebrow>
          <SectionHeading className="mt-5">
            What Xolace Will Never Be.
          </SectionHeading>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {neverStatements.map((statement, i) => (
            <ScrollReveal key={statement.title} delay={(i % 3) * 0.08}>
              <FeatureCard feature={statement} index={i} label="Never" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
