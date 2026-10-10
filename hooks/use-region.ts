"use client"

import { useEffect, useState } from "react"
import { parseRegion, type Region } from "@/lib/region"

// Shared across every regional block on the page, so the lookup runs once per visit.
let lookup: Promise<Region> | null = null

function resolveRegion(): Promise<Region> {
  // `?region=gh|us|global` forces a region, for checking each block without a VPN.
  const forced = parseRegion(
    new URLSearchParams(window.location.search).get("region")
  )
  if (forced) return Promise.resolve(forced)

  lookup ??= fetch("/api/region")
    .then((res) => (res.ok ? res.json() : null))
    .then((data) => parseRegion(data?.region) ?? "global")
    .catch(() => "global" as const)
  return lookup
}

// Starts as `global` to match the server render, then swaps once the region is known.
export function useRegion(): Region {
  const [region, setRegion] = useState<Region>("global")

  useEffect(() => {
    let active = true
    resolveRegion().then((r) => {
      if (active) setRegion(r)
    })
    return () => {
      active = false
    }
  }, [])

  return region
}
