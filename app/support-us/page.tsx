import type { Metadata } from "next"
import { SupportUsPage } from "@/components/support-us/page/SupportUsPage"

export const metadata: Metadata = {
  title: "Support Xolace",
  description: "Help Xolace grow and support a quieter way to care for your mind.",
}

export default function SupportUs() {
  return <SupportUsPage />
}
