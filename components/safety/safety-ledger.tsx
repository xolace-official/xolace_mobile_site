import { SafetyGaps } from "@/components/safety/safety-gaps"
import { SafetyNav } from "@/components/safety/safety-nav"
import { SafetyTopics } from "@/components/safety/safety-topics"
import { Hairline } from "@/components/shared/ledger"

export function SafetyLedger() {
  return (
    <section className="pb-(--section-py)">
      <div className="section-container-wide">
        <Hairline className="mb-10 md:mb-14" />
        <div className="grid gap-12 lg:grid-cols-[12rem_minmax(0,1fr)_17rem] lg:gap-14">
          <SafetyNav />
          <SafetyTopics />
          <SafetyGaps />
        </div>
      </div>
    </section>
  )
}
