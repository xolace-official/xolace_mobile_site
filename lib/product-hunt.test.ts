import { describe, expect, test } from "bun:test"
import {
  isFromProductHunt,
  isProductHuntLaunchWindow,
  productHuntBadgeHref,
  productHuntBadgeSrc,
} from "./product-hunt"

describe("isFromProductHunt", () => {
  test("matches the ref Product Hunt adds to outbound links", () => {
    expect(isFromProductHunt("?ref=producthunt")).toBe(true)
    expect(isFromProductHunt("?utm_source=producthunt")).toBe(true)
  })
  test("ignores other visitors", () => {
    expect(isFromProductHunt("")).toBe(false)
    expect(isFromProductHunt("?ref=twitter")).toBe(false)
  })
})

describe("isProductHuntLaunchWindow", () => {
  test("covers launch day in every timezone", () => {
    expect(isProductHuntLaunchWindow(new Date("2026-11-11T08:30:00Z"))).toBe(
      true
    )
    expect(isProductHuntLaunchWindow(new Date("2026-11-12T20:00:00Z"))).toBe(
      true
    )
  })
  test("is closed before and after", () => {
    expect(isProductHuntLaunchWindow(new Date("2026-11-10T12:00:00Z"))).toBe(
      false
    )
    expect(isProductHuntLaunchWindow(new Date("2026-11-14T00:00:00Z"))).toBe(
      false
    )
  })
})

test("badge links carry the placement as utm_medium", () => {
  expect(productHuntBadgeHref("hero")).toContain("utm_medium=hero")
  expect(productHuntBadgeSrc("123", "dark")).toBe(
    "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=123&theme=dark"
  )
})
