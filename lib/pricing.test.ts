import { describe, expect, test } from "bun:test"
import {
  annualSavingPercent,
  billingSummary,
  getPlusPrice,
  plusPrices,
  pricingDescription,
} from "./pricing"

describe("getPlusPrice", () => {
  test("returns the USD price for global", () => {
    expect(getPlusPrice("global").currency).toBe("USD")
    expect(getPlusPrice("global").monthlyAmount).toBe(9.99)
    expect(getPlusPrice("global").annualAmount).toBe(59.99)
  })

  test("falls back to global when a region has no entry", () => {
    expect(getPlusPrice("gh")).toBe(plusPrices.global)
  })
})

describe("annualSavingPercent", () => {
  test("rounds down so the saving is never overstated (49.96% reads 49%)", () => {
    expect(annualSavingPercent()).toBe(49)
  })
})

describe("billingSummary", () => {
  test("yearly strikes through twelve monthly payments and leads with the trial", () => {
    expect(billingSummary(plusPrices.global, "annual")).toEqual({
      amount: "$59.99",
      per: "a year",
      struckThrough: "$119.88",
      note: "About $5 a month. Starts with a 7-day free trial.",
    })
  })

  test("monthly points to the computed yearly saving", () => {
    expect(billingSummary(plusPrices.global, "monthly")).toEqual({
      amount: "$9.99",
      per: "a month",
      note: "Paying yearly saves 49% and comes with a 7-day free trial.",
    })
  })
})

describe("a price change is a one-line edit", () => {
  test("every derived figure follows the two amounts", () => {
    const price = { ...plusPrices.global, monthlyAmount: 12, annualAmount: 60 }
    expect(billingSummary(price, "annual")).toEqual({
      amount: "$60.00",
      per: "a year",
      struckThrough: "$144.00",
      note: "About $5 a month. Starts with a 7-day free trial.",
    })
    expect(billingSummary(price, "monthly").note).toContain("saves 58%")
  })
})

describe("pricingDescription", () => {
  test("is built from the global price, so the metadata follows a price change", () => {
    expect(pricingDescription()).toContain("$9.99 a month or $59.99 a year")
  })
})
