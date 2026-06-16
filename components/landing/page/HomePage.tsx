import dynamic from "next/dynamic"
import { Hero } from "@/components/landing/hero"
import { ProblemSection } from "@/components/landing/problem-section"
import { SmoothScroll } from "@/components/shared/smooth-scroll"
import { MobileDownloadBar } from "@/components/shared/mobile-download-bar"

const PathsSection = dynamic(() =>
  import("@/components/landing/paths-section").then((m) => ({
    default: m.PathsSection,
  }))
)
const ReflectionsSection = dynamic(() =>
  import("@/components/landing/reflections-section").then((m) => ({
    default: m.ReflectionsSection,
  }))
)
const TrustSection = dynamic(() =>
  import("@/components/landing/trust-section").then((m) => ({
    default: m.TrustSection,
  }))
)
const TestimonialsSection = dynamic(() =>
  import("@/components/landing/testimonials-section").then((m) => ({
    default: m.TestimonialsSection,
  }))
)
const PricingSection = dynamic(() =>
  import("@/components/landing/pricing-section").then((m) => ({
    default: m.PricingSection,
  }))
)
const LandingFaq = dynamic(() =>
  import("@/components/landing/landing-faq").then((m) => ({
    default: m.LandingFaq,
  }))
)
const LaunchSection = dynamic(() =>
  import("@/components/landing/launch-section").then((m) => ({
    default: m.LaunchSection,
  }))
)
const SupportSection = dynamic(() =>
  import("@/components/landing/support-section").then((m) => ({
    default: m.SupportSection,
  }))
)

export function HomePage() {
  return (
    <SmoothScroll>
      <main className="relative overflow-hidden">
        <Hero />
        <ProblemSection />
        <PathsSection />
        <ReflectionsSection />
        <TrustSection />
        <TestimonialsSection />
        <PricingSection />
        <LandingFaq />
        <LaunchSection />
        {/* <SupportSection /> */}
      </main>
      <MobileDownloadBar />
    </SmoothScroll>
  )
}
