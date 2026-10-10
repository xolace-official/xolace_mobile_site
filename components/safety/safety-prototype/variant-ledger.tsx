"use client"

// PROTOTYPE (ticket #27) variant C: crisis first, a sticky index, and an open "not built yet" column.
import type { Region } from "@/lib/pricing"
import { GAPS, SAFETY_LEVELS, TOPICS, visibleClaims } from "./safety-data"
import { ClaimList, CrisisCard, LevelsStrip } from "./shared"

export function VariantLedger({ region, showHeld }: { region: Region; showHeld: boolean }) {
  return (
    <>
      <section className="section-spacing">
        <div className="section-container-narrow flex flex-col gap-8">
          <CrisisCard region={region} size="lg" />
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">Safety at Xolace</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              What is in place today, and what we haven&rsquo;t built yet. We would rather you
              hear the second list from us.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing-x pb-(--section-py)">
        <div className="section-container-wide grid gap-12 lg:grid-cols-[12rem_1fr_18rem]">
          <nav aria-label="On this page" className="hidden lg:block">
            <ul className="sticky top-28 flex flex-col gap-3 font-sans text-sm text-muted-foreground">
              {TOPICS.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="hover:text-foreground">
                    {t.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#gaps" className="hover:text-foreground">
                  Not built yet
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-16">
            {TOPICS.map((t) => (
              <article key={t.id} id={t.id} className="flex scroll-mt-28 flex-col gap-4">
                <h2 className="text-2xl font-semibold text-foreground">{t.title}</h2>
                <p className="font-serif text-lg leading-relaxed text-muted-foreground">{t.lead}</p>
                {t.id === "check" && <LevelsStrip levels={SAFETY_LEVELS} />}
                <ClaimList claims={visibleClaims(t.claims, showHeld)} className="pl-4" />
              </article>
            ))}
          </div>

          <aside id="gaps" className="scroll-mt-28">
            <div className="sticky top-28 flex flex-col gap-5 rounded-3xl border border-xo-outline-variant/50 p-6">
              <h2 className="text-lg font-semibold text-foreground">Not built yet</h2>
              <ul className="flex flex-col gap-4">
                {GAPS.map((g) => (
                  <li key={g.source} className="text-sm leading-relaxed text-muted-foreground">
                    {g.gap}
                  </li>
                ))}
              </ul>
              <p className="border-t border-xo-outline-variant/40 pt-4 text-xs text-muted-foreground">
                We update this list as each one is fixed.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
