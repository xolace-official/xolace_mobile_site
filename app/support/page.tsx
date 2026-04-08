import type { Metadata } from "next"
import { SupportPage } from "@/components/support/page/SupportPage"

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Xolace — answers to common questions, contact information, and important resources.",
}

export default function Support() {
  return <SupportPage />
}
