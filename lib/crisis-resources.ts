import type { Region } from "@/lib/region"

export type CrisisLine = {
  label: string
  display: string
  href: string
  note?: string
}

export type CrisisTier = {
  name: string
  lines: CrisisLine[]
}

// Only numbers verified against primary or helpline-confirmed sources (2026-10-08). 112, 18555, DOVVSU and the other Ghana lines are held until
// confirmed, and no line is described as 24/7 because no hours were found for 0800 678 678.
export const CRISIS_TIERS: Record<Region, CrisisTier> = {
  gh: {
    name: "Ghana",
    lines: [
      {
        label: "Mental Health Authority",
        display: "0800 678 678",
        href: "tel:0800678678",
        note: "Toll-free",
      },
    ],
  },
  us: {
    name: "United States",
    lines: [
      {
        label: "988 Suicide & Crisis Lifeline",
        display: "Call or text 988",
        href: "tel:988",
      },
    ],
  },
  global: {
    name: "Anywhere else",
    lines: [
      {
        label: "Find a Helpline",
        display: "findahelpline.com",
        href: "https://findahelpline.com",
        note: "Free lines in your country",
      },
    ],
  },
}

export const DANGER_LINE =
  "If you are in danger right now, call your local emergency number."

export function getCrisisTier(region: Region): CrisisTier {
  return CRISIS_TIERS[region]
}
