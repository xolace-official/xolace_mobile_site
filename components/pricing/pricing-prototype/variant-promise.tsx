"use client"

// PROTOTYPE (ticket #26) variant A: the promise leads, then Free and Plus side by side.
import { Check, Minus } from "lucide-react"
import type { Region } from "@/lib/pricing"
import { DownloadButtons } from "@/components/shared/download-buttons"
import { planRows, rowCopy, type Wording } from "./plan-data"
import {
  AlwaysFree,
  BillingToggle,
  ConfirmFlag,
  PriceLine,
  PriceSmallPrint,
  useBilling,
} from "./shared"

export function VariantPromise({ wording, region }: { wording: Wording; region: Region }) {
  const [billing, setBilling] = useBilling()

  return (
    <>
      <section className="section-spacing">
        <div className="section-container-wide flex flex-col gap-6">
          <h1 className="max-w-4xl text-5xl leading-[1.02] font-semibold tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Your mirror is free. It always will be.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Understanding what you feel shouldn&rsquo;t depend on whether you can pay.
            Xolace Plus pays for the support that comes after: Kindling, more
            room to reflect, and your whole history.
          </p>
        </div>
      </section>

      <section className="section-spacing-x pb-(--section-py)">
        <div className="section-container-wide grid gap-4 lg:grid-cols-[2fr_3fr]">
          <div className="flex flex-col gap-8 rounded-3xl border border-xo-outline-variant/40 p-8 md:p-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold text-foreground">Free</h2>
              <p className="text-muted-foreground">Everything you need to reflect.</p>
            </div>
            <ul className="flex flex-col gap-5">
              {planRows.map((row) => (
                <li key={row.id} className="flex gap-3">
                  {row.free ? (
                    <Check className="mt-1 size-4 shrink-0 text-accent" />
                  ) : (
                    <Minus className="mt-1 size-4 shrink-0 text-muted-foreground/50" />
                  )}
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium text-foreground">
                      {row.name}
                      {row.confirm && <ConfirmFlag note={row.confirm} />}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {row.free ? rowCopy(row.free, wording) : "Part of Plus."}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8 rounded-3xl bg-xo-surface-low p-8 ring-1 ring-primary/30 md:p-10">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold text-foreground">Xolace Plus</h2>
                <BillingToggle billing={billing} onChange={setBilling} />
              </div>
              <PriceLine billing={billing} region={region} />
            </div>
            <ul className="grid gap-5 md:grid-cols-2">
              {planRows.map((row) => (
                <li key={row.id} className="flex gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium text-foreground">{row.name}</span>
                    <span className="text-sm text-muted-foreground">{rowCopy(row.plus, wording)}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-4 border-t border-xo-outline-variant/40 pt-6">
              <DownloadButtons align="start" />
              <PriceSmallPrint region={region} />
            </div>
          </div>
        </div>

        <div className="section-container-wide mt-16">
          <AlwaysFree region={region} className="max-w-2xl" />
        </div>
      </section>
    </>
  )
}
