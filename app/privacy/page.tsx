import type { Metadata } from "next"
import { PrivacyPage } from "@/components/privacy/page/PrivacyPage"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Why Xolace exists. We built this because we needed it. Because nothing else did what we were looking for.",
}

export default function Privacy() {
  return (
    <PrivacyPage />
  )
}
