import { planRows } from "@/lib/plans"
import { cn } from "@/lib/utils"
import { CardHeading } from "@/components/shared/ledger"
import { BillingToggle } from "./billing-toggle"
import type { PlanLayoutProps } from "./plan-columns"
import { PriceLine } from "./price-line"

const GRID = "grid grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr]"
const PLUS_CELL = "bg-primary/[0.04]"

export function PlanTable({
  billing,
  onBillingChange,
  price,
  className,
}: PlanLayoutProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <BillingToggle
        billing={billing}
        onChange={onBillingChange}
        price={price}
        savingTag
        className="self-start"
      />

      <div className="overflow-hidden rounded-2xl border border-border">
        <div className={cn(GRID, "border-b border-border")}>
          <div className="hidden p-6 md:block" />
          <div className="flex flex-col gap-2 p-4 sm:p-6">
            <CardHeading>Free</CardHeading>
            <p className="text-3xl font-medium tracking-[-0.02em] text-foreground">
              Nothing to pay
            </p>
          </div>
          <div className={cn("flex flex-col gap-2 p-4 sm:p-6", PLUS_CELL)}>
            <CardHeading className="text-primary">Xolace Plus</CardHeading>
            <PriceLine billing={billing} price={price} size="sm" />
          </div>
        </div>

        {/* Rows are grids so the name can span both columns on phones; explicit roles keep the table semantics. */}
        <table role="table" className="block w-full text-left text-sm">
          <caption className="sr-only">
            What Free and Xolace Plus include
          </caption>
          <tbody role="rowgroup" className="block">
            {planRows.map((row, i) => (
              <tr
                key={row.id}
                role="row"
                className={cn(GRID, i > 0 && "border-t border-border")}
              >
                <th
                  scope="row"
                  role="rowheader"
                  className="col-span-2 flex flex-col gap-1 px-4 pt-5 font-normal sm:px-6 md:col-span-1 md:py-5"
                >
                  <span className="text-foreground">{row.name}</span>
                  <span className="text-muted-foreground">{row.about}</span>
                </th>
                <td
                  role="cell"
                  className="flex flex-col gap-1 px-4 py-4 text-muted-foreground sm:px-6 md:py-5"
                >
                  {/* The column headings scroll away, so each cell names its plan. */}
                  <span className="text-xs tracking-[0.14em] uppercase">
                    Free
                  </span>
                  {row.free ?? (
                    <span className="text-muted-foreground/60">
                      Not included
                    </span>
                  )}
                </td>
                <td
                  role="cell"
                  className={cn(
                    "flex flex-col gap-1 px-4 py-4 text-foreground sm:px-6 md:py-5",
                    PLUS_CELL
                  )}
                >
                  <span className="text-xs tracking-[0.14em] text-primary uppercase">
                    Plus
                  </span>
                  {row.plus}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
