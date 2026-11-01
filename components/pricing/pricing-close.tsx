"use client"

import { LifeBuoy } from "lucide-react"
import { CrisisLineInline } from "@/components/shared/crisis-lines"
import { DownloadButtons } from "@/components/shared/download-buttons"
import { FadeIn } from "@/components/shared/fade-in"
import { CardHeading, Hairline } from "@/components/shared/ledger"
import { useRegion } from "@/hooks/use-region"
import { DANGER_LINE } from "@/lib/crisis-resources"
import { getPlusPrice } from "@/lib/pricing"

export function PricingClose() {
  const price = getPlusPrice(useRegion())

  return (
    <FadeIn className="pb-(--section-py)">
      <div className="section-container-wide">
        <Hairline className="mb-10 md:mb-14" />
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col gap-4">
            <CardHeading>Crisis support is never behind Plus.</CardHeading>
            <p className="text-muted-foreground">
              When a session needs it, Xolace shows crisis resources, on Free
              and on Plus.
            </p>
            <p className="flex items-start gap-2 text-sm text-foreground">
              <LifeBuoy
                aria-hidden
                strokeWidth={1.5}
                className="mt-0.5 size-4 shrink-0 text-accent"
              />
              <span>
                {DANGER_LINE} To talk to someone now: <CrisisLineInline />.
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <CardHeading>Get Xolace</CardHeading>
            <p className="text-muted-foreground">
              Start free. You can try Plus from inside the app.
            </p>
            <DownloadButtons align="start" />
            <p className="text-xs leading-relaxed text-muted-foreground">
              Prices in {price.currency}. Taxes may apply depending on where you
              live. You buy and cancel Plus in the app, through the App Store or
              Google Play.
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
