import type { Metadata } from "next"
import { SafetyPage } from "@/components/safety/page/SafetyPage"

export const metadata: Metadata = {
  title: "Safety",
  description:
    "How Xolace checks every message, what happens at crisis, who Xolacers are, the age policy, what Xolace is not, and what isn't built yet.",
}

export default function Safety() {
  return <SafetyPage />
}
