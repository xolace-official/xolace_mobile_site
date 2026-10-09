import type { Metadata } from "next"
import { PricingPage } from "@/components/pricing/page/PricingPage"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Xolace is free to reflect with, always. Xolace Plus adds Kindling, more room and your full history for $9.99 a month or $59.99 a year.",
}

export default function Pricing() {
  return <PricingPage />
}
