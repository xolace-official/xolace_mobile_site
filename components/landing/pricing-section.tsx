"use client"

import { useState } from "react"
import { m as motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { InsightShowcase } from "./pricing/insight-showcase"
import { AccessStatement } from "./pricing/access-statement"
import { PricingWaitlistDialog } from "./pricing-waitlist-dialog"
import { InsightDetailDialog } from "./insight-detail-dialog"
import type { Teaser } from "./pricing/pricing-data"

// Not a pricing table. A teaser of the insight layer (strategy §6): real-feeling,
// blurred previews that lead to an intent-only waitlist — no price, no buy button.
// The pitch is depth that compounds, never "unlimited sessions" (§12).

export function PricingSection() {
  const [waitlistOpen, setWaitlistOpen] = useState(false)
  const [activeTeaser, setActiveTeaser] = useState<Teaser | null>(null)

  return (
    <>
      <section
        id="pricing"
        className="section-spacing relative overflow-hidden bg-muted"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="animate-gentle-pulse absolute -top-32 -left-20 h-[600px] w-[600px] rounded-full bg-accent/[0.05] blur-[140px]" />
          <div className="animate-gentle-pulse absolute -right-20 -bottom-20 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-[120px] [animation-delay:3s]" />
        </div>

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 space-y-3 text-center"
          >
            <p className="font-mono text-[11px] tracking-[0.24em] text-muted-foreground/30 uppercase">
              What&apos;s coming
            </p>
            <h2 className="font-serif text-4xl leading-[1.1] font-light text-foreground italic md:text-5xl lg:text-6xl">
              Deeper self-knowledge,
              <br className="hidden sm:block" /> that compounds.
            </h2>
            <p className="mx-auto max-w-md text-base leading-relaxed font-light text-muted-foreground/55">
              Xolace stays free to use. Xolace+ is the layer that shows you the
              patterns underneath — and it gets clearer the longer you stay.
            </p>
          </motion.div>

          <InsightShowcase onSelect={(teaser) => setActiveTeaser(teaser)} />

          <div className="mt-16">
            <AccessStatement />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 flex flex-col items-center gap-5 text-center"
          >
            <Button
              onClick={() => setWaitlistOpen(true)}
              className="h-11 rounded-lg px-7 text-sm"
            >
              Join the Xolace+ waitlist
            </Button>
            <p className="max-w-sm font-serif text-base text-muted-foreground/30 italic">
              We&apos;d rather shape Xolace+ around the people curious enough to
              ask first.
            </p>
          </motion.div>
        </div>
      </section>

      <PricingWaitlistDialog
        open={waitlistOpen}
        onOpenChange={setWaitlistOpen}
      />
      <InsightDetailDialog
        open={activeTeaser !== null}
        onOpenChange={(next) => !next && setActiveTeaser(null)}
        teaser={activeTeaser}
        onWaitlistInstead={() => {
          setActiveTeaser(null)
          setWaitlistOpen(true)
        }}
      />
    </>
  )
}
