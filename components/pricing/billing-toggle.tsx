"use client"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import type { Billing, PlusPrice } from "@/lib/pricing"
import { cn } from "@/lib/utils"
import { SavingTag } from "./saving-tag"

const OPTIONS: { value: Billing; label: string }[] = [
  { value: "annual", label: "Yearly" },
  { value: "monthly", label: "Monthly" },
]

export function BillingToggle({
  billing,
  onChange,
  price,
  savingTag = false,
  className,
}: {
  billing: Billing
  onChange: (billing: Billing) => void
  price: PlusPrice
  // Phones carry the saving in the toggle; from lg up it sits beside the price instead.
  savingTag?: boolean
  className?: string
}) {
  return (
    <ToggleGroup
      type="single"
      value={billing}
      // Radix clears the value when the pressed item is pressed again; keep one plan selected.
      onValueChange={(value) => value && onChange(value as Billing)}
      aria-label="Billing"
      spacing={1}
      className={cn(
        "rounded-full border border-xo-outline-variant/50 p-1",
        className
      )}
    >
      {OPTIONS.map(({ value, label }) => (
        <ToggleGroupItem
          key={value}
          value={value}
          className="h-auto gap-2 rounded-full px-4 py-1.5 text-sm font-normal text-muted-foreground hover:bg-transparent hover:text-foreground data-[state=on]:bg-foreground data-[state=on]:text-background"
        >
          {label}
          {savingTag && value === "annual" && (
            <SavingTag
              price={price}
              className={cn(
                "px-2 py-0.5 text-xs",
                billing === "annual"
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary/15 text-primary"
              )}
            />
          )}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
