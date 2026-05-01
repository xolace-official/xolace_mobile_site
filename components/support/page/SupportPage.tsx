import { SupportHero } from "@/components/support/SupportHero"
import { SupportFAQ } from "@/components/support/SupportFAQ"
import { SupportContact } from "@/components/support/SupportContact"

export function SupportPage() {
  return (
    <main className="pt-32 pb-28">
      <div className="px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="border-t border-border mb-16 mt-8" />

        <div className="max-w-3xl">
          <SupportHero />
          <SupportFAQ />
          <SupportContact />
        </div>
      </div>
    </main>
  )
}
