"use client"

// PROTOTYPE (ticket #26) variant D: The promise (A) from lg up, the table (B) below lg.
import type { Region } from "@/lib/pricing"
import type { Wording } from "./plan-data"
import { VariantPromise } from "./variant-promise"
import { VariantLedger } from "./variant-ledger"

export function VariantSplit({ wording, region }: { wording: Wording; region: Region }) {
  return (
    <>
      <div className="hidden lg:block">
        <VariantPromise wording={wording} region={region} />
      </div>
      <div className="lg:hidden">
        <VariantLedger wording={wording} region={region} />
      </div>
    </>
  )
}
