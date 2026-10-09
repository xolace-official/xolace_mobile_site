"use client"

// PROTOTYPE (ticket #24): five How it works variants on the real home page, switchable via ?how=A–F.
import { useSearchParams } from "next/navigation"
import { PrototypeSwitcher } from "@/components/shared/prototype-switcher"
import { VariantPinned } from "./variant-pinned"
import { VariantNight } from "./variant-night"
import { VariantStaircase } from "./variant-staircase"
import { VariantStories } from "./variant-stories"
import { VariantWords } from "./variant-words"
import { VariantSplit } from "./variant-split"

const VARIANTS = [
  { key: "A", name: "Pinned phone", Component: VariantPinned },
  { key: "B", name: "One night", Component: VariantNight },
  { key: "C", name: "Staircase", Component: VariantStaircase },
  { key: "D", name: "Stories", Component: VariantStories },
  { key: "E", name: "The words", Component: VariantWords },
  { key: "F", name: "Pinned / Stories", Component: VariantSplit },
]

export function HowItWorksPrototype() {
  const params = useSearchParams()
  const variant =
    VARIANTS.find((v) => v.key === params.get("how")) ?? VARIANTS[0]
  const Component = variant.Component

  return (
    <>
      <div id="paths">
        <Component />
      </div>
      <PrototypeSwitcher
        param="how"
        variants={VARIANTS}
        current={variant.key}
        className="top-auto bottom-4 md:right-6 md:left-auto md:translate-x-0"
      >
        <p className="text-[11px] opacity-70">How it works</p>
      </PrototypeSwitcher>
    </>
  )
}
