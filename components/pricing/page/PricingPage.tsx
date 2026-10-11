import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingPlans } from "@/components/pricing/pricing-plans"
import { PricingClose } from "@/components/pricing/pricing-close"

export function PricingPage() {
  return (
    <main className="pt-20">
      <PricingHero />
      <PricingPlans />
      <PricingClose />
    </main>
  )
}
