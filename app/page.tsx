import type { Metadata } from "next"
import { HomePage } from "@/components/landing/page/HomePage"
import { SITE_DESCRIPTION } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: "Xolace: for the moments that don't have a name yet" },
  description: SITE_DESCRIPTION,
}

export default function Home() {
  return <HomePage />
}
