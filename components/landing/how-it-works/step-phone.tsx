import Image from "next/image"
import { Iphone } from "@/components/ui/iphone"
import type { Step } from "./steps"

export function StepPhone({
  step,
  eager = false,
}: {
  step: Step
  // Stacked, cross-faded screens: lazy loading never fetches the hidden ones
  eager?: boolean
}) {
  return (
    <div role="img" aria-label={step.alt} className="w-full">
      <Iphone>
        <Image
          src={step.screen}
          alt=""
          fill
          loading={eager ? "eager" : "lazy"}
          className="object-cover object-top"
          sizes="(max-width: 768px) 60vw, 20vw"
        />
      </Iphone>
    </div>
  )
}
