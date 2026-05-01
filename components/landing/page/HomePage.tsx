import { Hero } from "@/components/landing/hero"
import { ProblemSection } from "@/components/landing/problem-section"
import { CompanionBridge } from "@/components/landing/companion-bridge"
import { PhilosophySection } from "@/components/landing/philosophy-section"
import { HowItWorks } from "@/components/landing/how-it-works"
import { MockupSection } from "@/components/landing/mockup-section"
import { ReflectionsSection } from "@/components/landing/reflections-section"
import { TrustSection } from "@/components/landing/trust-section"
import { WaitlistCTA } from "@/components/landing/waitlist-cta"
import { SmoothScroll } from "@/components/shared/smooth-scroll"

export function HomePage() {
  return (
    <SmoothScroll>  
    <main className="relative overflow-hidden">
      <Hero />
      <ProblemSection />
      <CompanionBridge />
      <PhilosophySection />
      <HowItWorks />
      <MockupSection />
      <ReflectionsSection />
      <TrustSection />
      <WaitlistCTA />
    </main>
    </SmoothScroll>
  )
}
