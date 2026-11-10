"use client"

import { useSyncExternalStore } from "react"
import {
  isFromProductHunt,
  isProductHuntLaunchWindow,
} from "@/lib/product-hunt"

const noop = () => () => {}

// Pages are static, so the date and ?ref are read only in the browser. The server
// snapshot is false, which keeps the first client render equal to the server HTML.
export function useProductHunt() {
  const fromProductHunt = useSyncExternalStore(
    noop,
    () => isFromProductHunt(window.location.search),
    () => false
  )
  const launchDay = useSyncExternalStore(
    noop,
    () => isProductHuntLaunchWindow(),
    () => false
  )
  return { fromProductHunt, launchDay, show: fromProductHunt || launchDay }
}
