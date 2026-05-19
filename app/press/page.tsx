import type { Metadata } from "next"
import { PressPage } from "@/components/press/page/PressPage"

export const metadata: Metadata = {
  title: "Press & Media",
  description:
    "Press resources for Xolace — brand assets, boilerplate copy, screenshots, and press contact. Everything a journalist needs, ready to use.",
}

export default function Press() {
  return <PressPage />
}
