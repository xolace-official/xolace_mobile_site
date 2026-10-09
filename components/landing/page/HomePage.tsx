import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Hero } from "@/components/landing/hero"
import { HeroPrototype } from "@/components/landing/hero-prototype/hero-prototype"
import { HowItWorksPrototype } from "@/components/landing/how-it-works-prototype/how-it-works-prototype"
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
      {/* PROTOTYPE (ticket #24): clip, not hidden, so How it works variant A can use position: sticky */}
      <main className="relative overflow-clip">
        {/* PROTOTYPE (ticket #23): falls back to the current hero while search params resolve */}
        <Suspense fallback={<Hero />}>
          <HeroPrototype />
        </Suspense>
        <ProblemSection />
        {/* PROTOTYPE (ticket #24): falls back to the current section while search params resolve */}
        <Suspense fallback={<PathsSection />}>
          <HowItWorksPrototype />
        </Suspense>
        <ReflectionsSection />
        <TrustSection />
        <TestimonialsSection />
        <LandingFaq />
        <LaunchSection />
        {/* <SupportSection /> */}
      </main>
      <MobileDownloadBar />
    </SmoothScroll>
  )
}
