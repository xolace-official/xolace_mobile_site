import { Check, Minus } from "lucide-react"
import type { Billing, PlusPrice } from "@/lib/pricing"
import { planRows } from "@/lib/plans"
import { cn } from "@/lib/utils"
import { CardHeading } from "@/components/shared/ledger"
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
    <div
      className={cn(
        "grid-cols-[2fr_3fr] gap-px overflow-hidden rounded-2xl border border-border bg-border",
        className
      )}
    >
      <div className="flex flex-col gap-10 bg-background p-10">
        <div className="flex flex-col gap-4">
          <CardHeading>Free</CardHeading>
          <p className="text-5xl leading-none font-medium tracking-[-0.025em] text-foreground md:text-[3.5rem]">
            Nothing to pay
          </p>
          <p className="text-sm text-muted-foreground">
            Everything you need to reflect.
          </p>
        </div>
        <ul className="flex flex-col border-t border-border">
          {planRows.map((row) => (
            <PlanFeature
              key={row.id}
              name={row.name}
              detail={row.free ?? "Part of Plus."}
              icon={
                row.free ? (
                  <Check aria-hidden className="text-primary" />
                ) : (
                  <Minus aria-hidden className="text-muted-foreground/50" />
                )
              }
            />
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-10 bg-primary/[0.04] p-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <CardHeading className="text-primary">Xolace Plus</CardHeading>
            <BillingToggle
              billing={billing}
              onChange={onBillingChange}
              price={price}
            />
          </div>
          <PriceLine billing={billing} price={price} savingTag />
        </div>
        <ul className="grid grid-cols-2 gap-x-8 border-t border-border">
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
    <li className="flex gap-3 border-b border-border py-4">
      <span className="mt-0.5 shrink-0 [&_svg]:size-4 [&_svg]:stroke-[1.5]">
        {icon}
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="text-foreground">{name}</span>
        <span className="text-sm leading-relaxed text-muted-foreground">
          {detail}
        </span>
      </div>
    </li>
  )
}
