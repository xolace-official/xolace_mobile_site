import { HowItWorksPinned } from "./how-it-works-pinned"
import { HowItWorksStories } from "./how-it-works-stories"

// Keeps the old section's id="paths", so shared /#paths links still land here
export function HowItWorks() {
  return (
    <section id="paths" className="section-spacing section-spacing-x bg-muted">
      <div className="section-container">
        <HowItWorksPinned />
        <HowItWorksStories />
      </div>
    </section>
  )
}
