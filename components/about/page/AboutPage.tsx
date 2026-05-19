import { AboutHero } from "@/components/about/about-hero"
import { FounderLetter } from "@/components/about/founder-letter"
import { TeamSection } from "@/components/about/team-section"
import { PressContact } from "@/components/about/press-contact"

export function AboutPage() {
  return (
    <main className="pt-32 pb-28">
      <AboutHero />
      <FounderLetter />
      <TeamSection />
      <PressContact />
    </main>
  )
}
