import { Suspense } from "react"
import { SafetyPrototype } from "@/components/safety/safety-prototype/safety-prototype"

export function SafetyPage() {
  return (
    <main className="pt-20">
      {/* PROTOTYPE (ticket #27): useSearchParams needs a Suspense boundary on a static route. */}
      <Suspense>
        <SafetyPrototype />
      </Suspense>
    </main>
  )
}
