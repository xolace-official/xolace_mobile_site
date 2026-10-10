import { describe, expect, test } from "bun:test"
import { annualSavingPercent, getPlusPrice, plusPrices } from "./pricing"

describe("getPlusPrice", () => {
  test("returns the USD price for global", () => {
    expect(getPlusPrice("global").currency).toBe("USD")
    expect(getPlusPrice("global").monthly).toBe("$9.99")
    expect(getPlusPrice("global").annual).toBe("$59.99")
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
