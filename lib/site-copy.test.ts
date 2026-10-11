import { describe, expect, test } from "bun:test"
import { readdirSync, readFileSync } from "node:fs"
import { join, relative } from "node:path"

// The final sweep from #37: retired and banned wording must not appear anywhere in the site's source,
// live or dead, so a component that gets re-wired later can't bring it back.

const root = join(import.meta.dir, "..")

function sourceFiles(dir: string): string[] {
  return readdirSync(join(root, dir), { recursive: true, withFileTypes: true })
    .filter(
      (f) =>
        f.isFile() &&
        /\.(tsx?|xml|txt)$/.test(f.name) &&
        !f.name.endsWith(".test.ts")
    )
    .map((f) => join(f.parentPath, f.name))
}

const files = [
  ...["app", "components", "lib", "hooks", "providers"].flatMap(sourceFiles),
  join(root, "public/llms.txt"),
].map((path) => ({
  path: relative(root, path),
  source: readFileSync(path, "utf8"),
}))

function offenders(pattern: RegExp, scope = files) {
  return scope.filter((f) => pattern.test(f.source)).map((f) => f.path)
}

const BANNED: [string, RegExp][] = [
  ["retired name Echo", /\bechos?\b/i],
  ["retired name Glimpses", /\bglimpses?\b/i],
  ["X brain", /\b(x|ai) brain\b/i],
  ["clinically reviewed", /clinically reviewed/i],
  ["built and reviewed by us", /built and reviewed by us/i],
  ["no sign-up", /\bno\s+sign[- ]?up/i],
  // The lookahead skips Tailwind classes like "h-8 min-w-8"
  [
    "session-length numbers",
    /\b(\d+|one|two|three|four|five|eight)(\s*(-|–|to)\s*\d+)?[\s-]*min(ute)?s?\b(?!-)/i,
  ],
  [
    "the AI chooses or picks",
    /\b(AI|it|Kindling|Xolace|the Fire) (picks|chooses)\b/i,
  ],
]

describe("site-wide sweep", () => {
  test("scans the whole site", () => {
    expect(files.length).toBeGreaterThan(100)
  })

  for (const [name, pattern] of BANNED) {
    test(`no ${name}`, () => {
      expect(offenders(pattern)).toEqual([])
    })
  }
})

const manifestoPage = readFileSync(
  join(root, "components/manifesto/page/ManifestoPageV2.tsx"),
  "utf8"
)
const manifesto = files.filter(
  (f) =>
    f.path.startsWith("components/manifesto/v2/") ||
    f.path === "components/manifesto/invitation.tsx"
)
const manifestoText = manifesto.map((f) => f.source).join("\n")

describe("manifesto", () => {
  test("renders the sections of the brief, in order, without Experience", () => {
    const sections = [...manifestoPage.matchAll(/<([A-Z]\w*) \/>/g)].map(
      (m) => m[1]
    )
    expect(sections).toEqual([
      "OpeningV2",
      "SpaceBetween",
      "ItStacks",
      "WhyAI",
      "Beliefs",
      "Never",
      "QuietPart",
      "Invitation",
    ])
    expect(manifesto.some((f) => f.path.endsWith("experience.tsx"))).toBe(false)
  })

  test("says what the brief asks it to say", () => {
    for (const line of [
      "before it has a name",
      "fewer people",
      "80/20",
      "campfire",
      "Examples of what people share",
      "AI prepares people for each other",
      "Safety is architecture, not a promise",
      "skincare",
      "Come home.",
      "The mirror is free, and always will be.",
    ])
      expect(manifestoText).toContain(line)
  })

  test("drops the claims the brief retires", () => {
    for (const phrase of [
      /no streaks/i,
      /no profiles/i,
      /connects you to the humans/i,
      /help you find (it|professional care)/i,
      /cold hotline/i,
      /the bridge, not the destination/i,
      /flux/i,
    ])
      expect(manifestoText).not.toMatch(phrase)
  })
})
