import { SupportHero } from "@/components/support/SupportHero"
import { SupportFAQ } from "@/components/support/SupportFAQ"
import { SupportContact } from "@/components/support/SupportContact"

export function SupportPage() {
  return (
    <main className="pt-32">
      <SupportHero />
      <SupportFAQ />
      <SupportContact />
    </main>
  )
}
