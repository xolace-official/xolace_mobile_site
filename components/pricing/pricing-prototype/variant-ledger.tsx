"use client"

// PROTOTYPE (ticket #26) variant B: one honest comparison table, prices sitting on the column heads.
import type { Region } from "@/lib/pricing"
import { DownloadButtons } from "@/components/shared/download-buttons"
import { cn } from "@/lib/utils"
import { planRows, rowCopy, type Wording } from "./plan-data"
import {
  AlwaysFree,
  BillingToggle,
  ConfirmFlag,
  PriceLine,
  PriceSmallPrint,
  useBilling,
} from "./shared"

export function VariantLedger({ wording, region }: { wording: Wording; region: Region }) {
  const [billing, setBilling] = useBilling()

  return (
    <section className="section-spacing">
      <div className="section-container flex flex-col gap-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-xl flex-col gap-4">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Free, or Xolace Plus
            </h1>
            <p className="text-lg text-muted-foreground">
              The mirror is free, and always will be. Plus is for the support
              layer: Kindling, more room, and your full history. Here is
              exactly what each one includes.
            </p>
          </div>
          <BillingToggle billing={billing} onChange={setBilling} region={region} className="self-start" />
        </div>

        <div className="overflow-hidden rounded-2xl border border-xo-outline-variant/50">
          <div className="grid grid-cols-2 border-b border-xo-outline-variant/50 md:grid-cols-[1.2fr_1fr_1fr]">
            <div className="hidden p-6 md:block" />
            <div className="flex flex-col gap-2 p-6">
              <h2 className="text-xl font-semibold text-foreground">Free</h2>
              <p className="text-3xl font-semibold text-foreground">Nothing to pay</p>
              <p className="text-sm text-muted-foreground">No card, no trial clock.</p>
            </div>
            <div className="flex flex-col gap-2 border-l-2 border-primary/40 bg-primary/8 p-6">
              <h2 className="text-xl font-semibold text-primary">Xolace Plus</h2>
              <PriceLine billing={billing} region={region} size="sm" />
            </div>
          </div>

          <table className="w-full text-left text-sm">
            <caption className="sr-only">What Free and Xolace Plus include</caption>
            <tbody>
              {planRows.map((row, i) => (
                <tr
                  key={row.id}
                  className={cn(
                    "grid grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr]",
                    i > 0 && "border-t border-xo-outline-variant/30"
                  )}
                >
                  <th scope="row" className="col-span-2 flex flex-col gap-1 px-6 pt-5 font-normal md:col-span-1 md:py-5">
                    <span className="font-medium text-foreground">
                      {row.name}
                      {row.confirm && <ConfirmFlag note={row.confirm} />}
                    </span>
                    <span className="text-muted-foreground">{row.about}</span>
                  </th>
                  <td className="flex flex-col gap-1 px-6 py-4 text-muted-foreground md:py-5">
                    <span className="text-xs font-medium text-muted-foreground md:hidden">Free</span>
                    {row.free ? rowCopy(row.free, wording) : <span className="text-muted-foreground/60">Not included</span>}
                  </td>
                  <td className="flex flex-col gap-1 border-l-2 border-primary/40 bg-primary/8 px-6 py-4 text-foreground md:py-5">
                    <span className="text-xs font-medium text-primary md:hidden">Plus</span>
                    {rowCopy(row.plus, wording)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <AlwaysFree region={region} />
          <div className="flex flex-col gap-4">
            <p className="text-lg font-medium text-foreground">Get Xolace</p>
            <p className="text-sm text-muted-foreground">
              Start free. You can try Plus from inside the app.
            </p>
            <DownloadButtons align="start" />
            <PriceSmallPrint region={region} />
          </div>
        </div>
      </div>
    </section>
  )
}
