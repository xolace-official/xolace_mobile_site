import { describe, expect, test } from "bun:test"
import { readdirSync, readFileSync } from "node:fs"
import { join } from "node:path"
import {
  buildFaqCategories,
  faqAnswerText,
  faqCategories,
  faqJsonLd,
} from "./faq-data"
import { getCrisisTier } from "./crisis-resources"
import { plusPrices } from "./pricing"

const items = faqCategories.flatMap((c) => c.items)
const allText = items
  .map((item) => `${item.question} ${faqAnswerText(item)}`)
  .join("\n")

describe("faqCategories", () => {
  test("has five groups and 22 questions", () => {
    expect(faqCategories.map((c) => c.label)).toEqual([
      "Getting started",
      "How it works",
      "Free and Plus",
      "Privacy and your data",
      "Safety",
    ])
    expect(items).toHaveLength(22)
  })

  test("every question and id is unique", () => {
    expect(new Set(items.map((i) => i.question)).size).toBe(items.length)
    expect(new Set(items.map((i) => i.id)).size).toBe(items.length)
  })

  test("answers stay short: one or two sentences", () => {
    for (const item of items) {
      const sentences = faqAnswerText(item).match(/[.!?](\s|$)/g) ?? []
      expect(sentences.length).toBeLessThanOrEqual(2)
    }
  })

  test("links only go to pages on this site that own the detail", () => {
    const hrefs = items.flatMap((item) =>
      item.answer.flatMap((s) =>
        typeof s === "object" && "href" in s ? [s.href] : []
      )
    )
    expect(hrefs.length).toBeGreaterThan(0)
    for (const href of hrefs) {
      expect(href).toMatch(/^\/(pricing|safety|support)(#[a-z-]+)?$/)
    }
  })
})

describe("prices", () => {
  test("the Plus price answer uses lib/pricing.ts", () => {
    expect(allText).toContain("$9.99 a month")
    expect(allText).toContain("$59.99 a year")
    expect(allText).toContain("7-day free trial")
  })

  test("price answers change when the price changes", () => {
    const changed = buildFaqCategories({
      ...plusPrices.global,
      monthlyAmount: 12,
      annualAmount: 80,
      trialDays: 14,
    })
    const text = changed
      .flatMap((c) => c.items)
      .map(faqAnswerText)
      .join("\n")
    expect(text).toContain("$12.00 a month")
    expect(text).toContain("$80.00 a year")
    expect(text).toContain("14-day free trial")
    expect(text).not.toContain("$9.99")
  })
})

describe("crisis answer", () => {
  test("reads the global crisis lines in plain text, matching the server HTML", () => {
    const crisis = items.find((i) => i.id === "crisis")!
    const line = getCrisisTier("global").lines[0]
    expect(faqAnswerText(crisis)).toContain(`${line.label}, ${line.display}`)
  })
})

// Wording rules from #31: never claim more than is true today.
const BANNED = [
  /encrypt/i,
  /no one (at xolace )?reads/i,
  /audio is not stored/i,
  /nothing is stored/i,
  /everything is deleted/i,
  /\b\d+\s*(-\s*)?min(ute)?s?\b/i,
  /clinically reviewed/i,
  /\bglimpses?\b/i,
  /\bechos?\b/i,
  /\b(AI|it|Kindling|Xolace) (picks|chooses)\b/i,
]

describe("wording rules", () => {
  test("banned phrases appear nowhere in the FAQ copy", () => {
    for (const phrase of BANNED) expect(allText).not.toMatch(phrase)
  })

  test("banned phrases appear nowhere in the FAQ components", () => {
    const dir = join(import.meta.dir, "../components/faq")
    const files = readdirSync(dir, { recursive: true, withFileTypes: true })
      .filter((f) => f.isFile() && f.name.endsWith(".tsx"))
      .map((f) => readFileSync(join(f.parentPath, f.name), "utf8"))
    expect(files.length).toBeGreaterThan(0)
    for (const source of files)
      for (const phrase of BANNED) expect(source).not.toMatch(phrase)
  })

  test("Vent says exactly what is true about storage", () => {
    expect(allText).toContain("We don't store a transcript or your audio")
  })
})

describe("faqJsonLd", () => {
  test("is a FAQPage built from the same items as the visible text", () => {
    const ld = faqJsonLd()
    expect(ld["@context"]).toBe("https://schema.org")
    expect(ld["@type"]).toBe("FAQPage")
    expect(ld.mainEntity).toHaveLength(22)
    ld.mainEntity.forEach((q, i) => {
      expect(q["@type"]).toBe("Question")
      expect(q.name).toBe(items[i].question)
      expect(q.acceptedAnswer["@type"]).toBe("Answer")
      expect(q.acceptedAnswer.text).toBe(faqAnswerText(items[i]))
    })
  })
})
