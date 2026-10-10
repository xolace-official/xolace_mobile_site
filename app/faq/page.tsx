import type { Metadata } from "next"
import { FaqPage } from "@/components/faq/page/FaqPage"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Short, honest answers about Xolace: what it is, how the Mirror, Kindling and Vent work, Free and Plus, your data, and safety.",
}

export default function Faq() {
  return <FaqPage />
}
