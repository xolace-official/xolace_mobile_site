import { annualSavingPercent, type PlusPrice } from "@/lib/pricing"
import { cn } from "@/lib/utils"

export function SavingTag({
  price,
  className,
}: {
  price: PlusPrice
  className?: string
}) {
  return (
    <span
      className={cn("rounded-full font-medium whitespace-nowrap", className)}
    >
      Save {annualSavingPercent(price)}%
    </span>
  )
}
