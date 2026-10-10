"use client"

// PROTOTYPE (ticket #27) variant B: crisis lines pinned on top, then one door per reader.
import { useState } from "react"
import type { Region } from "@/lib/pricing"
import { cn } from "@/lib/utils"
import { READERS, SAFETY_LEVELS, TOPICS, visibleClaims, type Reader } from "./safety-data"
import { ClaimList, CrisisCard, LevelsStrip } from "./shared"

export function VariantReaders({ region, showHeld }: { region: Region; showHeld: boolean }) {
  const [reader, setReader] = useState<Reader>("parents")
  const current = READERS.find((r) => r.id === reader)!
  const topics = TOPICS.filter((t) => t.readers.includes(reader))

  return (
    <>
      <section className="section-spacing">
        <div className="section-container-wide grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl leading-tight font-semibold tracking-tight text-foreground md:text-6xl">
              How Xolace keeps people safe
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Written for the people who look out for someone else: parents, schools, partners and
              anyone reviewing us. Everything here is true of the app today.
            </p>
          </div>
          <CrisisCard region={region} size="lg" />
        </div>
      </section>

      <section className="section-spacing-x pb-(--section-py)">
        <div className="section-container-wide flex flex-col gap-10">
          <div role="tablist" aria-label="I'm reading as" className="flex flex-wrap gap-2">
            {READERS.map((r) => (
              <button
                key={r.id}
                type="button"
                role="tab"
                aria-selected={r.id === reader}
                onClick={() => setReader(r.id)}
                className={cn(
                  "rounded-full border px-5 py-2.5 font-sans text-sm transition-colors",
                  r.id === reader
                    ? "border-foreground bg-foreground text-background"
                    : "border-xo-outline-variant/60 text-muted-foreground hover:text-foreground"
                )}
              >
                {r.label}
              </button>
            ))}
          </div>

          <p className="font-serif text-2xl text-foreground md:text-3xl">&ldquo;{current.question}&rdquo;</p>

          <div className="flex flex-col divide-y divide-xo-outline-variant/40 border-y border-xo-outline-variant/40">
            {topics.map((t) => (
              <details key={`${reader}-${t.id}`} open={t.id !== "not"} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold text-foreground">
                  {t.title}
                  <span className="font-sans text-sm text-muted-foreground group-open:hidden">Open</span>
                </summary>
                <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_1.5fr]">
                  <p className="leading-relaxed text-muted-foreground">{t.lead}</p>
                  <ClaimList claims={visibleClaims(t.claims, showHeld)} />
                  {t.id === "check" && (
                    <div className="lg:col-span-2">
                      <LevelsStrip levels={SAFETY_LEVELS} />
                    </div>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
