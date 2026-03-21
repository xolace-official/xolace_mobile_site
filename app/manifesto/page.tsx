import type { Metadata } from "next"
import { ManifestoPageV2 } from "@/components/manifesto/page/ManifestoPageV2"

export const metadata: Metadata = {
  title: "Manifesto",
  description:
    "Why Xolace exists. We built this because we needed it. Because nothing else did what we were looking for.",
}

export default function Manifesto() {
  return (
    <ManifestoPageV2 />
  )
}
