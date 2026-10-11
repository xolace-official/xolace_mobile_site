"use client"

// Beams between DOM nodes, measured into one SVG so every edge re-routes together when the
// layout restacks (row on desktop, column on phones).
import { useLayoutEffect, useState, type RefObject } from "react"
import { m as motion } from "motion/react"
import { INK, inkVar } from "./ink"

export type Edge = {
  id: string
  from: RefObject<HTMLElement | null>
  to: RefObject<HTMLElement | null>
  // Runs across the layout's axis instead of along it (side branches)
  cross?: boolean
}

const GAP = 6
const ease = [0.16, 1, 0.3, 1] as const

function pathBetween(
  box: DOMRect,
  a: DOMRect,
  b: DOMRect,
  axis: "x" | "y"
): string {
  const ax = a.left - box.left
  const ay = a.top - box.top
  const bx = b.left - box.left
  const by = b.top - box.top
  if (axis === "x") {
    const forward = bx >= ax
    const sx = forward ? ax + a.width + GAP : ax - GAP
    const ex = forward ? bx - GAP : bx + b.width + GAP
    const sy = ay + a.height / 2
    const ey = by + b.height / 2
    const k = (ex - sx) * 0.55
    return `M ${sx},${sy} C ${sx + k},${sy} ${ex - k},${ey} ${ex},${ey}`
  }
  const sx = ax + a.width / 2
  const ex = bx + b.width / 2
  const sy = ay + a.height + GAP
  const ey = by - GAP
  const k = (ey - sy) * 0.55
  return `M ${sx},${sy} C ${sx},${sy + k} ${ex},${ey - k} ${ex},${ey}`
}

export function useBeamPaths(
  containerRef: RefObject<HTMLElement | null>,
  edges: Edge[],
  axis: "x" | "y"
) {
  const [paths, setPaths] = useState<Record<string, string>>({})
  const [size, setSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return
    const measure = () => {
      const box = container.getBoundingClientRect()
      setSize({ width: box.width, height: box.height })
      const next: Record<string, string> = {}
      for (const e of edges) {
        if (!e.from.current || !e.to.current) continue
        next[e.id] = pathBetween(
          box,
          e.from.current.getBoundingClientRect(),
          e.to.current.getBoundingClientRect(),
          e.cross ? (axis === "x" ? "y" : "x") : axis
        )
      }
      setPaths(next)
    }
    const ro = new ResizeObserver(measure)
    ro.observe(container)
    for (const e of edges) {
      if (e.from.current) ro.observe(e.from.current)
      if (e.to.current) ro.observe(e.to.current)
    }
    measure()
    // Webfonts can shift the copy column after first paint
    document.fonts?.ready.then(measure)
    return () => ro.disconnect()
    // The edges are rebuilt each render but always point at the same stable refs
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, axis])

  return { paths, size }
}

type BeamProps = {
  d?: string
  lit: boolean
  color: string
  // Changes to fire a single pulse along the path
  pulseKey?: string | null
  pulseDelay?: number
  ambient?: boolean
  faint?: boolean
}

export function Beam({
  d,
  lit,
  color,
  pulseKey,
  pulseDelay = 0,
  ambient,
  faint,
}: BeamProps) {
  if (!d) return null
  return (
    <g style={inkVar(color)}>
      <path
        d={d}
        fill="none"
        strokeWidth={1}
        strokeLinecap="round"
        className="stroke-xo-outline-variant"
        strokeOpacity={faint ? 0.35 : 0.6}
        strokeDasharray={faint ? "2 5" : undefined}
      />
      <motion.path
        d={d}
        fill="none"
        strokeWidth={1.25}
        strokeLinecap="round"
        className={INK.stroke}
        initial={false}
        animate={{ opacity: lit ? 0.45 : 0 }}
        transition={{ duration: 0.9, ease }}
      />
      {pulseKey && <Pulse key={pulseKey} d={d} delay={pulseDelay} />}
      {ambient && <Pulse d={d} delay={pulseDelay} loop />}
    </g>
  )
}

// A short bright dash with a soft halo, travelling the path once (or on a slow loop)
function Pulse({
  d,
  delay,
  loop,
}: {
  d: string
  delay: number
  loop?: boolean
}) {
  const transition = {
    duration: loop ? 2.6 : 1.1,
    delay,
    ease: loop ? ([0.45, 0, 0.55, 1] as const) : ease,
    repeat: loop ? Infinity : 0,
    repeatDelay: loop ? 2.2 : 0,
  }
  // motion's pathLength/pathOffset normalise the path to 0–1, so the dash travels the same at any size
  const from = { pathLength: 0.22, pathOffset: -0.22, pathSpacing: 2 }
  const to = { pathOffset: 1 }
  return (
    <>
      <motion.path
        d={d}
        fill="none"
        strokeWidth={6}
        strokeLinecap="round"
        className={INK.stroke}
        style={{ filter: "blur(4px)" }}
        opacity={0.7}
        initial={from}
        animate={to}
        transition={transition}
      />
      <motion.path
        d={d}
        fill="none"
        strokeWidth={1.75}
        strokeLinecap="round"
        className={INK.stroke}
        initial={from}
        animate={to}
        transition={transition}
      />
    </>
  )
}
