"use client"

// PROTOTYPE (ticket #26): three /pricing variants, switchable via ?variant=A–C.
// ?words=plain|numbers flips how limits are written; ?region=global|gh|us shows what the region swap changes.
import { useSearchParams } from "next/navigation"
import type { Region } from "@/lib/pricing"
import { getPlusPrice } from "@/lib/pricing"
import { cn } from "@/lib/utils"
import { PrototypeSwitcher, useSetSearchParam } from "@/components/shared/prototype-switcher"
import type { Wording } from "./plan-data"
import { VariantPromise } from "./variant-promise"
import { VariantLedger } from "./variant-ledger"
import { VariantSession } from "./variant-session"

const VARIANTS = [
  { key: "A", name: "The promise", Component: VariantPromise },
  { key: "B", name: "The table", Component: VariantLedger },
  { key: "C", name: "One session", Component: VariantSession },
]

const WORDINGS: Wording[] = ["plain", "numbers"]
const REGIONS: Region[] = ["global", "gh", "us"]

export function PricingPrototype() {
  const params = useSearchParams()
  const setParam = useSetSearchParam()
  const variant = VARIANTS.find((v) => v.key === params.get("variant")) ?? VARIANTS[0]
  const wording = (WORDINGS.find((w) => w === params.get("words")) ?? "plain") as Wording
  const region = (REGIONS.find((r) => r === params.get("region")) ?? "global") as Region
  const Component = variant.Component

  return (
    <>
      <Component wording={wording} region={region} />
      <PrototypeSwitcher
        param="variant"
        variants={VARIANTS}
        current={variant.key}
        className="top-auto bottom-4"
      >
        <Chips label="Limits" options={WORDINGS} current={wording} onPick={(v) => setParam("words", v)} />
        <Chips label="Region" options={REGIONS} current={region} onPick={(v) => setParam("region", v)} />
        <p className="text-[11px] opacity-70">
          Price block: {getPlusPrice(region).currency}
          {region === "gh" && " (GHS waits on the annual price)"}
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
