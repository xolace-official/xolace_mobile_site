"use client"

// PROTOTYPE (ticket #23): one shared clock so every variant runs the same loop.
import { useEffect, useState } from "react"
import { useReducedMotion } from "motion/react"
import { KINDLINGS } from "./kindlings"

export const STAGES = [
  "share",
  "fire",
  "needs support?",
  "kindling",
  "four kindlings",
  "hold",
] as const

export const SUPPORTS_STAGE = 4
const STILL_STAGE = 5
const BASE_MS = [1100, 1600, 1300, 1200, 1900, 2800]

export const TEMPOS = { slow: 1.5, normal: 1, fast: 0.6 } as const
export type Tempo = keyof typeof TEMPOS

// Fixed so server and client render the same first frame
const INITIAL_SET = ["sit", "xolacers", "lantern", "bridge"]

function nextSet(prev: string[]) {
  const ids = KINDLINGS.map((k) => k.id)
  const key = (s: string[]) => [...s].sort().join()
  let next: string[]
  do {
    next = [...ids].sort(() => Math.random() - 0.5).slice(0, 4)
  } while (key(next) === key(prev))
  return next
}

export function usePipelineLoop(tempo: Tempo, forceStill: boolean) {
  const prefersReduced = useReducedMotion()
  const still = forceStill || !!prefersReduced
  const [stage, setStage] = useState(0)
  const [setIds, setSetIds] = useState(INITIAL_SET)
  const [pass, setPass] = useState(1)

  useEffect(() => {
    if (still) return
    const id = setTimeout(() => {
      if (stage === STAGES.length - 1) {
        setSetIds(nextSet)
        setPass((p) => p + 1)
        setStage(0)
      } else {
        setStage(stage + 1)
      }
    }, BASE_MS[stage] * TEMPOS[tempo])
    return () => clearTimeout(id)
  }, [stage, still, tempo])

  return {
    stage: still ? STILL_STAGE : stage,
    set: setIds.map((id) => KINDLINGS.find((k) => k.id === id)!),
    pass,
    still,
  }
}

export type PipelineState = ReturnType<typeof usePipelineLoop>
