"use client"

// PROTOTYPE (ticket #23): four hero pipeline variants on the real home page, switchable via
// ?hero=A|B|C|D. Also ?tempo=slow|normal|fast and ?still=1 (the reduced-motion frame).
import { useSearchParams } from "next/navigation"
import { Spotlight } from "@/components/ui/spotlight"
import {
  PrototypeSwitcher,
  useSetSearchParam,
} from "@/components/shared/prototype-switcher"
import {
  STAGES,
  TEMPOS,
  usePipelineLoop,
  type Tempo,
} from "./use-pipeline-loop"
import { VariantColumn } from "./variant-column"
import { VariantStrip } from "./variant-strip"
import { VariantOrbit } from "./variant-orbit"
import { VariantStory } from "./variant-story"

const VARIANTS = [
  { key: "A", name: "Column beside", Component: VariantColumn },
  { key: "B", name: "Strip below", Component: VariantStrip },
  { key: "C", name: "Campfire orbit", Component: VariantOrbit },
  { key: "D", name: "Narrated card", Component: VariantStory },
]

export function HeroPrototype() {
  const params = useSearchParams()
  const setParam = useSetSearchParam()
  const key = params.get("hero") ?? "A"
  const tempoParam = params.get("tempo")
  const tempo: Tempo =
    tempoParam && tempoParam in TEMPOS ? (tempoParam as Tempo) : "normal"
  const forceStill = params.get("still") === "1"
  const state = usePipelineLoop(tempo, forceStill)
  const variant = VARIANTS.find((v) => v.key === key) ?? VARIANTS[0]
  const Component = variant.Component

  return (
    <>
      <section className="section-spacing relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <Spotlight duration={8} xOffset={80} />
        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <Component state={state} />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 hidden h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/4 blur-[140px] md:block" />
          <div className="absolute right-1/3 bottom-0 hidden h-87.5 w-87.5 rounded-full bg-accent/4 blur-[100px] md:block" />
        </div>
      </section>

      <PrototypeSwitcher param="hero" variants={VARIANTS} current={variant.key}>
        <div className="flex flex-wrap items-center justify-center gap-1 text-[11px]">
          {(Object.keys(TEMPOS) as Tempo[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setParam("tempo", t === "normal" ? null : t)}
              className={
                t === tempo
                  ? "rounded-full bg-background/20 px-2"
                  : "px-2 opacity-60"
              }
            >
              {t}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setParam("still", forceStill ? null : "1")}
            className={
              forceStill
                ? "rounded-full bg-background/20 px-2"
                : "px-2 opacity-60"
            }
          >
            still frame
          </button>
        </div>
        <p className="text-center text-[11px] opacity-70">
          pass {state.pass} · {STAGES[state.stage]} ·{" "}
          {state.set.map((k) => k.name).join(", ")}
        </p>
      </PrototypeSwitcher>
    </>
  )
}
