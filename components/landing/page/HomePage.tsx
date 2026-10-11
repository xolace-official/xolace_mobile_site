import dynamic from "next/dynamic"
import { Hero } from "@/components/landing/hero/hero"
import { ProblemSection } from "@/components/landing/problem-section"
import { SmoothScroll } from "@/components/shared/smooth-scroll"
import { MobileDownloadBar } from "@/components/shared/mobile-download-bar"

const HowItWorks = dynamic(() =>
  import("@/components/landing/how-it-works/how-it-works").then((m) => ({
    default: m.HowItWorks,
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
const StartupProgramsSection = dynamic(() =>
  import("@/components/landing/startup-programs-section").then((m) => ({
    default: m.StartupProgramsSection,
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
      {/* clip, not hidden: hidden makes <main> a scroll container and breaks the pinned phone in How it works */}
      <main className="relative overflow-clip">
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <TrustSection />
        <TestimonialsSection />
        <StartupProgramsSection />
        <LandingFaq />
        <LaunchSection />
        {/* <SupportSection /> */}
      </main>
      <MobileDownloadBar />
    </SmoothScroll>
  )
}
