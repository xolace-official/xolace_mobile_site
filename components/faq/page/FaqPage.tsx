import { FaqHero } from "@/components/faq/faq-hero"
import { FaqList } from "@/components/faq/faq-list"

export function FaqPage() {
  return (
    <main className="pt-32 pb-28">
      <FaqHero />
      <FaqList />
    </main>
  )
}
