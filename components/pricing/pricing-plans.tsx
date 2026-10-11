"use client"

import { useState } from "react"
import { FadeIn } from "@/components/shared/fade-in"
import { useRegion } from "@/hooks/use-region"
import { getPlusPrice, type Billing } from "@/lib/pricing"
import { PlanColumns } from "./plan-columns"
import { PlanTable } from "./plan-table"

// Both layouts share one billing choice; CSS shows the columns from lg up and the table below.
export function PricingPlans() {
  const [billing, setBilling] = useState<Billing>("annual")
  // Falls back to the global (USD) price until a region has its own entry in lib/pricing.ts.
  const price = getPlusPrice(useRegion())
  const props = { billing, onBillingChange: setBilling, price }

  return (
    <FadeIn className="section-spacing-x pb-(--section-py)">
      <div className="section-container-wide">
        <PlanColumns {...props} className="hidden lg:grid" />
        <PlanTable {...props} className="lg:hidden" />
      </div>
    </FadeIn>
  )
}
