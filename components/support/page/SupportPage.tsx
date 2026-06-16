import { SupportHero } from "@/components/support/SupportHero"
import { SupportFAQ } from "@/components/support/SupportFAQ"
import { SupportContact } from "@/components/support/SupportContact"

export function SupportPage() {
  return (
    <main className="pt-32 pb-28">
      <div className="mx-auto max-w-7xl px-8 md:px-12 lg:px-16">
        <div className="mt-8 mb-16 border-t border-border" />

        <div className="max-w-3xl">
          <SupportHero />
          <SupportFAQ />
          <SupportContact />
        </div>
      </div>
    </main>
  )
}
