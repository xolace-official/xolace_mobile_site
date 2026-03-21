import type { Metadata } from "next"
import { Opening } from "@/components/manifesto/opening"
import { Diagnosis } from "@/components/manifesto/diagnosis"
import { Principles } from "@/components/manifesto/principles"
import { Antidote } from "@/components/manifesto/antidote"
import { Architects } from "@/components/manifesto/architects"
import { Invitation } from "@/components/manifesto/invitation"

export const metadata: Metadata = {
  title: "Manifesto",
  description:
    "Why Xolace exists. We built this because we needed it. Because nothing else like it did.",
}

export function ManifestoPage() {
  return (
    <main className="pt-40 pb-20">
      <Opening />
      <Diagnosis />
      <Principles />
      <Antidote />
      <Architects />
      <Invitation />
    </main>
  )
}
