import { TermsHero } from "@/components/terms/TermsHero"
import { TermsContent } from "@/components/terms/TermsContent"
import {
  TableOfContents,
  type TocSection,
} from "@/components/shared/TableOfContents"

const sections: TocSection[] = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "what-xolace-is", label: "What Xolace Is (and Is Not)" },
  { id: "eligibility", label: "Eligibility" },
  { id: "user-responsibilities", label: "User Responsibilities" },
  { id: "emotional-safety", label: "Emotional Safety" },
  { id: "ai-content", label: "AI-Generated Content" },
  { id: "privacy-data", label: "Privacy & User Data" },
  { id: "license", label: "License to Use" },
  { id: "user-content", label: "User Content" },
  { id: "payments", label: "Subscription & Payments" },
  { id: "termination", label: "Termination" },
  { id: "disclaimers", label: "Disclaimer of Warranties" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "governing-law", label: "Governing Law" },
  { id: "disputes", label: "Dispute Resolution" },
  { id: "changes", label: "Changes to Terms" },
  { id: "contact", label: "Contact" },
]

export function TermsPage() {
  return (
    <main className="pt-32 pb-28">
      <div className="mx-auto max-w-screen-xl px-8 md:px-12 lg:px-16">
        <TermsHero />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[220px_1fr] xl:gap-24">
          {/* Sticky Sidebar TOC — desktop only */}
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <TableOfContents sections={sections} />
            </div>
          </aside>

          {/* Main Content */}
          <article className="min-w-0">
            <TermsContent />
          </article>
        </div>
      </div>
    </main>
  )
}
