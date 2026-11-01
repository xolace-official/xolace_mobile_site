import { SafetyHero } from "@/components/safety/safety-hero"
import { SafetyLedger } from "@/components/safety/safety-ledger"

export function SafetyPage() {
  return (
    <main className="pt-16 md:pt-20">
      <SafetyHero />
      <SafetyLedger />
    </main>
  )
}
