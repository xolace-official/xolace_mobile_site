// PROTOTYPE (ticket #24): a phone frame showing a step's real screen, or the mock Kindling screen.
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Iphone } from "@/components/ui/iphone"
import { KindlingScreen } from "./kindling-screen"
import type { Step } from "./steps"

export function StepPhone({
  step,
  eager = false,
  className,
}: {
  step: Step
  // for stacked, cross-faded screens: lazy loading never fetches the hidden ones
  eager?: boolean
  className?: string
}) {
  return (
    <div role="img" aria-label={step.alt} className={cn("w-full", className)}>
      <Iphone>
        {step.screen ? (
          <Image
            src={step.screen}
            alt=""
            fill
            loading={eager ? "eager" : "lazy"}
            className="object-cover object-top"
            sizes="(max-width: 768px) 60vw, 20vw"
          />
        ) : (
          <KindlingScreen />
        )}
      </Iphone>
    </div>
  )
}
