import { describe, expect, test } from "bun:test"
import { planRows } from "./plans"

const allCopy = planRows.flatMap((r) => [r.name, r.about, r.free ?? "", r.plus])

describe("planRows", () => {
  test("Trusted Bridge is Plus only, since the free allowance can't be reached", () => {
    expect(planRows.find((r) => r.id === "bridge")?.free).toBeNull()
  })

  test("leaves out Insights, which are still being built", () => {
    expect(planRows.some((r) => /insight/i.test(r.name))).toBe(false)
  })

  test("crisis support is never a plan row", () => {
    expect(allCopy.some((c) => /crisis/i.test(c))).toBe(false)
  })

  test("uses only public vocabulary", () => {
    for (const banned of [
      /\becho\b/i,
      /glimpse/i,
      /clinical/i,
      /\bpicks?\b/i,
      /\bchooses\b/i,
      /nothing is kept/i,
    ]) {
      expect(allCopy.filter((c) => banned.test(c))).toEqual([])
    }
  })

  test("row ids are unique", () => {
    expect(new Set(planRows.map((r) => r.id)).size).toBe(planRows.length)
  })
})
