import type { Metadata } from "next"
import { FaqPage } from "@/components/faq/page/FaqPage"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Xolace — what it is, how it works, pricing, and how we handle your data.",
}

export default function Faq() {
  return <FaqPage />
}
