import type { Metadata } from "next"
import { PricingPage } from "@/components/pricing/page/PricingPage"
import { pricingDescription } from "@/lib/pricing"

export const metadata: Metadata = {
  title: "Pricing",
  description: pricingDescription(),
}

export default function Pricing() {
  return <PricingPage />
}
