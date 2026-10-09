import { Suspense } from "react"
import { PricingPrototype } from "@/components/pricing/pricing-prototype/pricing-prototype"

export function PricingPage() {
  return (
    <main className="pt-20">
      {/* PROTOTYPE (ticket #26): useSearchParams needs a Suspense boundary on a static route. */}
      <Suspense>
        <PricingPrototype />
      </Suspense>
    </main>
  )
}
