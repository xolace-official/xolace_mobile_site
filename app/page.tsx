import type { Metadata } from "next"
import { HomePage } from "@/components/landing/page/HomePage"
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
}

export default function Home() {
  return <HomePage />
}
