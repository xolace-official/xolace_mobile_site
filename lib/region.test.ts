import { describe, expect, test } from "bun:test"
import { parseRegion, regionFromCountry } from "./region"

describe("regionFromCountry", () => {
  test("maps Ghana and the US to their own regions", () => {
    expect(regionFromCountry("GH")).toBe("gh")
    expect(regionFromCountry("US")).toBe("us")
  })

  test("is case-insensitive", () => {
    expect(regionFromCountry("gh")).toBe("gh")
  })

  test("falls back to global for any other or unknown country", () => {
    expect(regionFromCountry("NG")).toBe("global")
    expect(regionFromCountry("")).toBe("global")
    expect(regionFromCountry(null)).toBe("global")
    expect(regionFromCountry(undefined)).toBe("global")
  })
})

describe("parseRegion", () => {
  test("accepts the known regions", () => {
    expect(parseRegion("gh")).toBe("gh")
    expect(parseRegion("us")).toBe("us")
    expect(parseRegion("global")).toBe("global")
  })

  test("rejects anything else", () => {
    expect(parseRegion("GH")).toBeNull()
    expect(parseRegion("uk")).toBeNull()
    expect(parseRegion(null)).toBeNull()
  })
})
