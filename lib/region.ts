// Pages render `global` on the server; the browser swaps in regional blocks via `useRegion`.
export const REGIONS = ["global", "gh", "us"] as const

export type Region = (typeof REGIONS)[number]

const COUNTRY_REGIONS: Record<string, Region> = {
  GH: "gh",
  US: "us",
}

export function regionFromCountry(country: string | null | undefined): Region {
  return COUNTRY_REGIONS[country?.toUpperCase() ?? ""] ?? "global"
}

export function parseRegion(value: string | null | undefined): Region | null {
  return REGIONS.find((r) => r === value) ?? null
}
