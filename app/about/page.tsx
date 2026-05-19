import type { Metadata } from "next"
import { AboutPage } from "@/components/about/page/AboutPage"

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the people behind Xolace. We built the room we couldn't find — for the moments that don't have a name yet.",
}

export default function About() {
  return <AboutPage />
}
