import { Check, Minus } from "lucide-react"
import type { Billing, PlusPrice } from "@/lib/pricing"
import { planRows } from "@/lib/plans"
import { cn } from "@/lib/utils"
import { BillingToggle } from "./billing-toggle"
import { PriceLine } from "./price-line"

export type PlanLayoutProps = {
  billing: Billing
  onBillingChange: (billing: Billing) => void
  price: PlusPrice
  className?: string
}

export function PlanColumns({
  billing,
  onBillingChange,
  price,
  className,
}: PlanLayoutProps) {
  return (
    <div className={cn("grid-cols-[2fr_3fr] gap-4", className)}>
      <div className="flex flex-col gap-8 rounded-3xl border border-xo-outline-variant/40 p-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-foreground">Free</h2>
          <p className="text-muted-foreground">
            Everything you need to reflect.
          </p>
        </div>
        <ul className="flex flex-col gap-5">
          {planRows.map((row) => (
            <PlanFeature
              key={row.id}
              name={row.name}
              detail={row.free ?? "Part of Plus."}
              icon={
                row.free ? (
                  <Check aria-hidden className="text-accent" />
                ) : (
                  <Minus aria-hidden className="text-muted-foreground/50" />
                )
              }
            />
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-8 rounded-3xl bg-xo-surface-low p-10 ring-1 ring-primary/30">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Xolace Plus
            </h2>
            <BillingToggle
              billing={billing}
              onChange={onBillingChange}
              price={price}
            />
          </div>
          <PriceLine billing={billing} price={price} savingTag />
        </div>
        <ul className="grid grid-cols-2 gap-5">
          {planRows.map((row) => (
            <PlanFeature
              key={row.id}
              name={row.name}
              detail={row.plus}
              icon={<Check aria-hidden className="text-primary" />}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

function PlanFeature({
  name,
  detail,
  icon,
}: {
  name: string
  detail: string
  icon: React.ReactNode
}) {
  return (
    <li className="flex gap-3">
      <span className="mt-1 shrink-0 [&_svg]:size-4">{icon}</span>
      <div className="flex flex-col gap-0.5">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{detail}</span>
      </div>
    </li>
  )
}
