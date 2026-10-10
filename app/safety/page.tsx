import type { Metadata } from "next"
import { SafetyPage } from "@/components/safety/page/SafetyPage"

export const metadata: Metadata = {
  title: "Safety",
  description:
    "How Xolace checks every message, what happens at crisis, who Xolacers are, the age policy, and what Xolace is not.",
}

export default function Safety() {
  return <SafetyPage />
}
