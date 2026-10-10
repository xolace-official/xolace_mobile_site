"use client"

// PROTOTYPE (ticket #27): three /safety variants, switchable via ?variant=A–C.
// ?claims=today|all reveals held claims (founder-stated or contradicted by the technical doc); ?region=global|gh|us swaps the crisis lines.
import { useSearchParams } from "next/navigation"
import type { Region } from "@/lib/pricing"
import { cn } from "@/lib/utils"
import { PrototypeSwitcher, useSetSearchParam } from "@/components/shared/prototype-switcher"
import { TOPICS } from "./safety-data"
import { VariantWalkthrough } from "./variant-walkthrough"
import { VariantReaders } from "./variant-readers"
import { VariantLedger } from "./variant-ledger"

const VARIANTS = [
  { key: "A", name: "Walk-through", Component: VariantWalkthrough },
  { key: "B", name: "By reader", Component: VariantReaders },
  { key: "C", name: "Ledger + gaps", Component: VariantLedger },
]

const CLAIMS = ["today", "all"] as const
const REGIONS: Region[] = ["global", "gh", "us"]

const allClaims = TOPICS.flatMap((t) => t.claims)
const heldCount = allClaims.filter((c) => c.status === "held").length

export function SafetyPrototype() {
  const params = useSearchParams()
  const setParam = useSetSearchParam()
  const variant = VARIANTS.find((v) => v.key === params.get("variant")) ?? VARIANTS[0]
  const claims = CLAIMS.find((c) => c === params.get("claims")) ?? "today"
  const region = REGIONS.find((r) => r === params.get("region")) ?? "global"
  const Component = variant.Component

  return (
    <>
      <Component region={region} showHeld={claims === "all"} />
      <PrototypeSwitcher param="variant" variants={VARIANTS} current={variant.key} className="top-auto bottom-4">
        <Chips label="Claims" options={[...CLAIMS]} current={claims} onPick={(v) => setParam("claims", v)} />
        <Chips label="Region" options={REGIONS} current={region} onPick={(v) => setParam("region", v)} />
        <p className="text-[11px] opacity-70">
          {allClaims.length - heldCount} true today · {heldCount} held
        </p>
      </PrototypeSwitcher>
    </>
  )
}

function Chips<T extends string>({
  label,
  options,
  current,
  onPick,
}: {
  label: string
  options: T[]
  current: T
  onPick: (v: T) => void
}) {
  return (
    <div className="flex items-center gap-1.5 text-[11px]">
      <span className="opacity-70">{label}</span>
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onPick(o)}
          className={cn("rounded-full px-2 py-0.5", o === current ? "bg-background text-foreground" : "hover:bg-background/15")}
        >
          {o}
        </button>
      ))}
    </div>
  )
}
