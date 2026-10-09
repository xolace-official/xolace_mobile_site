// Every Xolace Plus price on the site comes from here, so a price change is a one-line edit.

export type Region = "global" | "gh" | "us"

export type PlusPrice = {
  currency: string
  monthly: string
  annual: string
  // Written out so the "about $5 a month" line never drifts from the annual price.
  annualPerMonth: string
  trialDays: number
}

// The server renders `global`; a small browser request swaps in a regional entry when one exists.
// Ghana stays on USD until the founders confirm the annual GHS price (monthly is GHS 140).
export const plusPrices: Record<"global", PlusPrice> &
  Partial<Record<Region, PlusPrice>> = {
  global: {
    currency: "USD",
    monthly: "$9.99",
    annual: "$59.99",
    annualPerMonth: "$5",
    trialDays: 7,
  },
}

export function getPlusPrice(region: Region): PlusPrice {
  return plusPrices[region] ?? plusPrices.global
}
