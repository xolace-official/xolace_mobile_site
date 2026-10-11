import type { Region } from "@/lib/region"

// Every Xolace Plus price on the site comes from here. Only the two amounts are stored; every figure
// shown (struck-through year, "about $5 a month", the saving) is derived, so a price change is a one-line edit.
export type PlusPrice = {
  currency: string
  monthlyAmount: number
  annualAmount: number
  trialDays: number
}

// Ghana stays on USD until the founders confirm the annual GHS price (monthly is GHS 140).
export const plusPrices: Record<"global", PlusPrice> &
  Partial<Record<Region, PlusPrice>> = {
  global: {
    currency: "USD",
    monthlyAmount: 9.99,
    annualAmount: 59.99,
    trialDays: 7,
  },
}

function formatPrice(price: PlusPrice, amount: number, wholeUnits = false) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: price.currency,
    maximumFractionDigits: wholeUnits ? 0 : 2,
    minimumFractionDigits: wholeUnits ? 0 : 2,
  }).format(amount)
}

export function getPlusPrice(region: Region): PlusPrice {
  return plusPrices[region] ?? plusPrices.global
}

// Rounded down so the page never claims more saving than there is ($59.99 vs $119.88 is 49.96%).
export function annualSavingPercent(price: PlusPrice = plusPrices.global) {
  return Math.floor((1 - price.annualAmount / (price.monthlyAmount * 12)) * 100)
}

export type Billing = "annual" | "monthly"

export type BillingSummary = {
  amount: string
  per: string
  // Twelve monthly payments, shown struck through on the yearly plan only.
  struckThrough?: string
  note: string
}

export function billingSummary(
  price: PlusPrice,
  billing: Billing
): BillingSummary {
  if (billing === "annual") {
    return {
      amount: formatPrice(price, price.annualAmount),
      per: "a year",
      struckThrough: formatPrice(price, price.monthlyAmount * 12),
      note: `About ${formatPrice(price, price.annualAmount / 12, true)} a month. Starts with a ${price.trialDays}-day free trial.`,
    }
  }
  return {
    amount: formatPrice(price, price.monthlyAmount),
    per: "a month",
    note: `Paying yearly saves ${annualSavingPercent(price)}% and comes with a ${price.trialDays}-day free trial.`,
  }
}

export function pricingDescription(price: PlusPrice = plusPrices.global) {
  return `Reflecting with Xolace is free, always. Xolace Plus adds Kindling, more room and your full history for ${formatPrice(price, price.monthlyAmount)} a month or ${formatPrice(price, price.annualAmount)} a year.`
}
