"use client"

// PROTOTYPE (ticket #26): small pieces every pricing variant uses. Layouts stay in each variant.
import { useState } from "react"
import { LifeBuoy } from "lucide-react"
import { getPlusPrice, type Region } from "@/lib/pricing"
import { cn } from "@/lib/utils"
import { alwaysFree, crisisLine } from "./plan-data"

export type Billing = "annual" | "monthly"

export function useBilling() {
  return useState<Billing>("annual")
}

export function BillingToggle({
  billing,
  onChange,
  className,
}: {
  billing: Billing
  onChange: (b: Billing) => void
  className?: string
}) {
  // Build note: swap for shadcn ToggleGroup when this ships.
  return (
    <div
      role="radiogroup"
      aria-label="Billing"
      className={cn(
        "inline-flex rounded-full border border-xo-outline-variant/50 p-1 text-sm",
        className
      )}
    >
      {(["annual", "monthly"] as const).map((b) => (
        <button
          key={b}
          type="button"
          role="radio"
          aria-checked={billing === b}
          onClick={() => onChange(b)}
          className={cn(
            "rounded-full px-4 py-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
            billing === b
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {b === "annual" ? "Yearly" : "Monthly"}
        </button>
      ))}
    </div>
  )
}

export function PriceLine({
  billing,
  region,
  size = "lg",
}: {
  billing: Billing
  region: Region
  size?: "lg" | "sm"
}) {
  const price = getPlusPrice(region)
  const amount = billing === "annual" ? price.annual : price.monthly
  const per = billing === "annual" ? "a year" : "a month"

  return (
    <div className="flex flex-col gap-1">
      <p className="flex items-baseline gap-2">
        <span
          className={cn(
            "font-semibold tracking-tight text-foreground tabular-nums",
            size === "lg" ? "text-5xl md:text-6xl" : "text-3xl"
          )}
        >
          {amount}
        </span>
        <span className="text-muted-foreground">{per}</span>
      </p>
      <p className="text-sm text-muted-foreground">
        {billing === "annual"
          ? `About ${price.annualPerMonth} a month. Starts with a ${price.trialDays}-day free trial.`
          : `The ${price.trialDays}-day free trial comes with the yearly plan.`}
      </p>
    </div>
  )
}

export function PriceSmallPrint({ region }: { region: Region }) {
  const price = getPlusPrice(region)
  return (
    <p className="text-xs leading-relaxed text-muted-foreground">
      Prices in {price.currency}. Taxes may apply depending on where you live.
      You buy and cancel Plus in the app, through the App Store or Google Play.
    </p>
  )
}

export function AlwaysFree({
  region,
  className,
}: {
  region: Region
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <p className="text-lg font-medium text-foreground">
        Some things are never behind Plus.
      </p>
      <ul className="flex flex-col gap-3">
        {alwaysFree.map((item) => (
          <li key={item.name} className="text-sm text-muted-foreground">
            <span className="text-foreground">{item.name}</span>
            {item.confirm && <ConfirmFlag note={item.confirm} />}. {item.detail}
          </li>
        ))}
      </ul>
      <p className="flex items-start gap-2 text-sm text-foreground">
        <LifeBuoy className="mt-0.5 size-4 shrink-0 text-accent" />
        {/* Region block: the server renders the global line, the browser swaps in the local one. */}
        <span>If you&rsquo;re in danger right now, don&rsquo;t wait for the app. {crisisLine[region]}</span>
      </p>
    </div>
  )
}

// PROTOTYPE marker for a claim that needs a founder check before it ships.
export function ConfirmFlag({ note }: { note: string }) {
  if (process.env.NODE_ENV === "production") return null
  return (
    <span
      title={note}
      className="ml-1 inline-block cursor-help rounded border border-dashed border-primary/60 px-1 align-middle text-[10px] leading-4 text-primary"
    >
      check
    </span>
  )
}
