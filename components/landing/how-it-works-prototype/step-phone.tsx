// PROTOTYPE (ticket #24): a phone frame showing a step's real screen, or the mock Kindling screen.
import { cn } from "@/lib/utils"
import { Iphone } from "@/components/ui/iphone"
import { KindlingScreen } from "./kindling-screen"
import type { Step } from "./steps"

export function StepPhone({
  step,
  className,
}: {
  step: Step
  className?: string
}) {
  return (
    <div role="img" aria-label={step.alt} className={cn("w-full", className)}>
      {step.screen ? (
        <Iphone src={step.screen} />
      ) : (
        <Iphone>
          <KindlingScreen />
        </Iphone>
      )}
    </div>
  )
}
