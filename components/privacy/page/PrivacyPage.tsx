import { PrivacyHero } from "@/components/privacy/PrivacyHero"
import { PrivacyContent } from "@/components/privacy/PrivacyContent"
import {
  TableOfContents,
  type TocSection,
} from "@/components/shared/TableOfContents"

const sections: TocSection[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-xolace-does", label: "What Xolace Does" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-your-information", label: "How We Use Your Information" },
  { id: "ai-processing", label: "AI Processing" },
  { id: "data-sharing", label: "Data Sharing" },
  { id: "data-retention", label: "Data Retention" },
  { id: "data-security", label: "Data Security" },
  { id: "your-choices", label: "Your Choices" },
  { id: "your-rights", label: "Your Rights" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "international-transfers", label: "International Transfers" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact Us" },
]

export function PrivacyPage() {
  return (
    <main className="pt-32 pb-28">
      <PrivacyHero />

      <div className="section-container-wide grid grid-cols-1 gap-16 lg:grid-cols-[220px_1fr] xl:gap-24">
        {/* Sticky Sidebar TOC — desktop only */}
        <aside className="hidden lg:block">
          <div className="sticky top-32">
            <TableOfContents sections={sections} />
          </div>
        </aside>

        {/* Main Content */}
        <article className="min-w-0">
          <PrivacyContent />
        </article>
      </div>
    </main>
  )
}
