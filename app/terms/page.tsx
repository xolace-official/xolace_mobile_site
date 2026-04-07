import type { Metadata } from "next"
import { TermsPage } from "@/components/terms/page/TermsPage"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions governing your use of Xolace — our commitments to you and what we ask of you.",
}

export default function Terms() {
  return <TermsPage />
}
