import { Hero } from "@/components/landing/hero"
import { ProblemSection } from "@/components/landing/problem-section"
import { CompanionBridge } from "@/components/landing/companion-bridge"
import { PhilosophySection } from "@/components/landing/philosophy-section"
import { HowItWorks } from "@/components/landing/how-it-works"
import { MockupSection } from "@/components/landing/mockup-section"
import { ReflectionsSection } from "@/components/landing/reflections-section"
import { TrustSection } from "@/components/landing/trust-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { LaunchSection } from "@/components/landing/launch-section"
import { SupportSection } from "@/components/landing/support-section"
import { SmoothScroll } from "@/components/shared/smooth-scroll"
import { MobileDownloadBar } from "@/components/shared/mobile-download-bar"

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
        <TestimonialsSection />
        <LaunchSection />
        <SupportSection />
      </main>
      <MobileDownloadBar />
    </SmoothScroll>
  )
}
