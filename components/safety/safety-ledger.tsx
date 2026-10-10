import { SafetyGaps } from "@/components/safety/safety-gaps"
import { SafetyNav } from "@/components/safety/safety-nav"
import { SafetyTopics } from "@/components/safety/safety-topics"

export function SafetyLedger() {
  return (
    <section className="section-spacing-x pb-(--section-py)">
      <div className="section-container-wide grid gap-12 lg:grid-cols-[12rem_1fr_18rem]">
        <SafetyNav />
        <SafetyTopics />
        <SafetyGaps />
      </div>
    </section>
  )
}
