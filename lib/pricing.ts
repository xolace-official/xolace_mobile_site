import type { Region } from "@/lib/region"

// Every Xolace Plus price on the site comes from here, so a price change is a one-line edit.
export type PlusPrice = {
  currency: string
  monthly: string
  annual: string
  // Written out so the "about $5 a month" line never drifts from the annual price.
  annualPerMonth: string
  // Twelve months on the monthly plan, shown struck through next to the yearly price.
  monthlyForYear: string
  // Plain numbers so the saving is computed, never typed by hand.
  monthlyAmount: number
  annualAmount: number
  trialDays: number
}

// Ghana stays on USD until the founders confirm the annual GHS price (monthly is GHS 140).
export const plusPrices: Record<"global", PlusPrice> &
  Partial<Record<Region, PlusPrice>> = {
  global: {
    currency: "USD",
    monthly: "$9.99",
    annual: "$59.99",
    annualPerMonth: "$5",
    monthlyForYear: "$119.88",
    monthlyAmount: 9.99,
    annualAmount: 59.99,
    trialDays: 7,
  },
}

export function getPlusPrice(region: Region): PlusPrice {
  return plusPrices[region] ?? plusPrices.global
}

// Rounded down so the page never claims more saving than there is ($59.99 vs $119.88 is 49.96%).
export function annualSavingPercent(price: PlusPrice = plusPrices.global) {
  return Math.floor((1 - price.annualAmount / (price.monthlyAmount * 12)) * 100)
}
