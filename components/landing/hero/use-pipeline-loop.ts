"use client"

import { useEffect, useState } from "react"
import { usePrefersReducedMotion } from "@/hooks/use-media-query"

// share → fire → needs support? → kindling → four kindlings → hold; about 10s per pass
const STAGE_MS = [1100, 1600, 1300, 1200, 1900, 2800]
export const SUPPORTS_STAGE = 4
export const HOLD_STAGE = 5

export function usePipelineLoop() {
  const still = usePrefersReducedMotion()
  const [stage, setStage] = useState(0)
  const [pass, setPass] = useState(1)

  useEffect(() => {
    if (still) return
    const id = setTimeout(() => {
      if (stage === HOLD_STAGE) {
        setPass((p) => p + 1)
        setStage(0)
      } else {
        setStage(stage + 1)
      }
    }, STAGE_MS[stage])
    return () => clearTimeout(id)
  }, [stage, still])

  // Reduced motion freezes on the fully lit frame of the first pass
  return { stage: still ? HOLD_STAGE : stage, pass, still }
}
