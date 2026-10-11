import { FaqHero } from "@/components/faq/faq-hero"
import { FaqList } from "@/components/faq/faq-list"
import { FaqContact } from "@/components/faq/faq-contact"
import { faqJsonLd } from "@/lib/faq-data"

export function FaqPage() {
  return (
    <main className="pt-32">
      <script
        type="application/ld+json"
        // Escape "<" so answer text can never close the script tag.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
      <FaqHero />
      <FaqList />
      <FaqContact />
    </main>
  )
}
