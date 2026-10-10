import { describe, expect, test } from "bun:test"
import { CRISIS_TIERS, getCrisisTier } from "./crisis-resources"

describe("getCrisisTier", () => {
  test("Ghana shows the Mental Health Authority line", () => {
    const [line] = getCrisisTier("gh").lines
    expect(line.display).toBe("0800 678 678")
    expect(line.href).toBe("tel:0800678678")
  })

  test("the US shows 988", () => {
    expect(getCrisisTier("us").lines[0].href).toBe("tel:988")
  })

  test("everywhere else shows findahelpline.com", () => {
    expect(getCrisisTier("global").lines[0].href).toBe(
      "https://findahelpline.com"
    )
  })
})

describe("CRISIS_TIERS", () => {
  const text = JSON.stringify(CRISIS_TIERS)

  test("never lists the unverified Ghana hotline", () => {
    expect(text).not.toMatch(/0244|471 ?279/)
  })

  test("holds back numbers that are not yet verified", () => {
    expect(text).not.toMatch(/18555|055 100 0900|\b112\b/)
  })

  test("makes no 24/7 claim", () => {
    expect(text).not.toMatch(/24\/7/)
  })
})
