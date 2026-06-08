"use client"

import { useState } from "react"
import { m as motion } from "motion/react"
import { Check, Clock, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PricingWaitlistDialog, type PricingPlan } from "./pricing-waitlist-dialog"

type Feature = {
  text: string
  comingSoon?: boolean
}

type Tier = {
  id: PricingPlan
  name: string
  badge: string
  priceLabel: string
  priceNote: string
  tagline: string
  features: Feature[]
  highlighted: boolean
  stripeClass: string
  borderClass: string
  washClass: string
  badgeClass: string
}

const tiers: Tier[] = [
  {
    id: "free",
    name: "Free",
    badge: "Verified",
    priceLabel: "Always free",
    priceNote: "No credit card. No catch.",
    tagline: "Everything you need to say what's true.",
    features: [
      { text: "Mirror: 3 sessions per day" },
      { text: "Echo: anonymous shared moments" },
      { text: "Safety support: always on" },
      { text: "iOS & Android" },
    ],
    highlighted: false,
    stripeClass: "bg-gradient-to-r from-transparent via-border to-transparent",
    borderClass: "border-border/50",
    washClass: "bg-gradient-to-b from-muted-foreground/[0.04] to-transparent",
    badgeClass: "text-muted-foreground/50 border-border/50",
  },
  {
    id: "plus",
    name: "Plus",
    badge: "Popular",
    priceLabel: "Pricing coming soon",
    priceNote: "Waitlist members hear first.",
    tagline: "For when you need more room.",
    features: [
      { text: "Unlimited Mirror sessions" },
      { text: "Reflection history: last 30 days" },
      { text: "Echo: priority matching" },
      { text: "Vent: voice release", comingSoon: true },
    ],
    highlighted: true,
    stripeClass: "bg-gradient-to-r from-transparent via-primary/70 to-transparent",
    borderClass: "border-primary/25",
    washClass: "bg-gradient-to-b from-primary/[0.09] to-transparent",
    badgeClass: "text-primary/70 border-primary/25",
  },
  {
    id: "premium",
    name: "Premium",
    badge: "Early Access",
    priceLabel: "Pricing coming soon",
    priceNote: "Waitlist members hear first.",
    tagline: "The full picture, nothing held back.",
    features: [
      { text: "Everything in Plus" },
      { text: "Full reflection history" },
      { text: "Glimpses: real human moments", comingSoon: true },
      { text: "Early access to new features", comingSoon: true },
    ],
    highlighted: false,
    stripeClass: "bg-gradient-to-r from-transparent via-accent/60 to-transparent",
    borderClass: "border-accent/20",
    washClass: "bg-gradient-to-b from-accent/[0.07] to-transparent",
    badgeClass: "text-accent/60 border-accent/20",
  },
]

function FeatureRow({ feature }: { feature: Feature }) {
  return (
    <li className="flex items-start gap-2.5">
      {feature.comingSoon ? (
        <Clock className="size-3.5 text-muted-foreground/30 mt-0.5 shrink-0" strokeWidth={1.5} />
      ) : (
        <Check className="size-3.5 text-accent mt-0.5 shrink-0" strokeWidth={2.5} />
      )}
      <span className={`text-sm font-light leading-snug ${feature.comingSoon ? "text-muted-foreground/35" : "text-foreground/75"}`}>
        {feature.text}
        {feature.comingSoon && (
          <span className="ml-1.5 text-[9px] font-mono uppercase tracking-[0.14em] text-muted-foreground/30">
            soon
          </span>
        )}
      </span>
    </li>
  )
}

function TierCard({ tier, index, onCTA }: { tier: Tier; index: number; onCTA: (plan: PricingPlan) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col rounded-2xl border bg-card overflow-hidden ${tier.borderClass}`}
    >
      <div className={`h-[3px] w-full shrink-0 ${tier.stripeClass}`} />
      <div aria-hidden className={`absolute inset-0 ${tier.washClass} pointer-events-none`} />

      <div className="relative flex flex-col flex-1 p-6 gap-5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground/50">
            {tier.name}
          </p>
          <span className={`flex items-center gap-1 shrink-0 text-[9px] font-mono uppercase tracking-[0.14em] border rounded-full px-2 py-0.5 ${tier.badgeClass}`}>
            <ShieldCheck className="size-2.5" strokeWidth={2} />
            {tier.badge}
          </span>
        </div>

        <div className="space-y-0.5">
          <p className="font-serif font-light text-foreground text-xl leading-snug">
            {tier.priceLabel}
          </p>
          <p className="text-[11px] text-muted-foreground/35 font-light">
            {tier.priceNote}
          </p>
        </div>

        <div className="h-px bg-border/30" />

        <p className="font-serif italic text-sm text-muted-foreground/50 leading-relaxed">
          {tier.tagline}
        </p>

        <ul className="flex-1 space-y-3">
          {tier.features.map((f) => (
            <FeatureRow key={f.text} feature={f} />
          ))}
        </ul>

        <Button
          onClick={() => onCTA(tier.id)}
          variant={tier.highlighted ? "default" : "outline"}
          className="w-full rounded-lg h-10 text-sm"
        >
          Join the waitlist
        </Button>
      </div>
    </motion.div>
  )
}

export function PricingSection() {
  const [open, setOpen] = useState(false)
  const [activePlan, setActivePlan] = useState<PricingPlan>("free")

  const handleCTA = (plan: PricingPlan) => {
    setActivePlan(plan)
    setOpen(true)
  }

  return (
    <>
      <section id="pricing" className="section-spacing bg-muted overflow-hidden">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 space-y-3 text-center"
          >
            <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground/30">
              Access
            </p>
            <h2 className="font-serif italic font-light text-foreground leading-[1.1] text-4xl md:text-5xl lg:text-6xl">
              Start free. Go further.
            </h2>
            <p className="text-base font-light text-muted-foreground/55 max-w-sm mx-auto leading-relaxed">
              No walls at the door. Upgrade when you&apos;re ready.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tiers.map((tier, i) => (
              <TierCard key={tier.id} tier={tier} index={i} onCTA={handleCTA} />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 text-center font-serif italic text-sm text-muted-foreground/30"
          >
            Pricing hasn&apos;t been decided. Your interest is the data that shapes it.
          </motion.p>
        </div>
      </section>

      <PricingWaitlistDialog open={open} onOpenChange={setOpen} plan={activePlan} />
    </>
  )
}
