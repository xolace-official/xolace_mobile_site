"use client"

import { LifeBuoy } from "lucide-react"
import { CrisisLineInline } from "@/components/shared/crisis-lines"
import { DownloadButtons } from "@/components/shared/download-buttons"
import { FadeIn } from "@/components/shared/fade-in"
import { useRegion } from "@/hooks/use-region"
import { DANGER_LINE } from "@/lib/crisis-resources"
import { getPlusPrice } from "@/lib/pricing"

export function PricingClose() {
  const price = getPlusPrice(useRegion())

  return (
    <FadeIn className="section-spacing-x pb-(--section-py)">
      <div className="section-container-wide grid gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-medium text-foreground">
            Crisis support is never behind Plus.
          </h2>
          <p className="text-sm text-muted-foreground">
            When a session needs it, Xolace shows crisis resources, on Free and
            on Plus.
          </p>
          <p className="flex items-start gap-2 text-sm text-foreground">
            <LifeBuoy
              aria-hidden
              className="mt-0.5 size-4 shrink-0 text-accent"
            />
            <span>
              {DANGER_LINE} To talk to someone now: <CrisisLineInline />.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-medium text-foreground">Get Xolace</h2>
          <p className="text-sm text-muted-foreground">
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
    </FadeIn>
  )
}
