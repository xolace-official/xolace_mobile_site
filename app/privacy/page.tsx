import type { Metadata } from "next"
import { PrivacyPage } from "@/components/privacy/page/PrivacyPage"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Your privacy is central to how Xolace is designed and operated. This policy explains what we collect, how we use it, and the choices you always have.",
}

export default function Privacy() {
  return <PrivacyPage />
}
