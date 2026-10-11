import { billingSummary, type Billing, type PlusPrice } from "@/lib/pricing"
import { cn } from "@/lib/utils"
import { SavingTag } from "./saving-tag"

export function PriceLine({
  billing,
  price,
  size = "lg",
  savingTag = false,
}: {
  billing: Billing
  price: PlusPrice
  size?: "lg" | "sm"
  savingTag?: boolean
}) {
  const { amount, per, struckThrough, note } = billingSummary(price, billing)

  return (
    <div className="flex flex-col gap-1">
      <p className="flex flex-wrap items-baseline gap-x-2">
        {struckThrough && (
          <s
            className={cn(
              "text-muted-foreground/70 tabular-nums",
              size === "lg" ? "text-2xl" : "text-lg"
            )}
          >
            <span className="sr-only">Was </span>
            {struckThrough}
          </s>
        )}
        <span
          className={cn(
            "font-semibold tracking-tight text-foreground tabular-nums",
            size === "lg" ? "text-5xl md:text-6xl" : "text-3xl"
          )}
        >
          {amount}
        </span>
        <span className="text-muted-foreground">{per}</span>
        {savingTag && struckThrough && (
          <SavingTag
            price={price}
            className="self-center bg-primary/15 px-2.5 py-0.5 text-sm text-primary"
          />
        )}
      </p>
      <p className="text-sm text-muted-foreground">{note}</p>
    </div>
  )
}
