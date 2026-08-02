import type { Metadata } from "next"
import { HomePage } from "@/components/landing/page/HomePage"

export const metadata: Metadata = {
  title: "Emotional Infrastructure",
  description:
    "Not everything needs fixing. Some things just need to be said. Xolace is a quiet place to be human.",
}

export default function Home() {
  return <HomePage />
}
