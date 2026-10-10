"use client"

// PROTOTYPE (ticket #27) variant A: follow one message through Xolace, then the people, age and limits.
import type { Region } from "@/lib/pricing"
import { SAFETY_LEVELS, TOPICS, visibleClaims } from "./safety-data"
import { ClaimList, CrisisCard, LevelsStrip } from "./shared"

const topic = (id: (typeof TOPICS)[number]["id"]) => TOPICS.find((t) => t.id === id)!

export function VariantWalkthrough({ region, showHeld }: { region: Region; showHeld: boolean }) {
  const steps = [topic("check"), topic("crisis")]
  const rest = [topic("xolacers"), topic("age"), topic("not")]

  return (
    <>
      <section className="section-spacing">
        <div className="section-container flex flex-col gap-6">
          <p className="font-sans text-sm tracking-widest text-muted-foreground uppercase">Safety</p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-6xl">
            What happens to what you write.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            People bring Xolace the things they don&rsquo;t say anywhere else. Here is what Xolace
            does with them, step by step, and where it stops.
          </p>
          <a href="#help" className="font-sans text-sm text-foreground underline decoration-accent decoration-2 underline-offset-4">
            Need help right now? Crisis lines are below.
          </a>
        </div>
      </section>

      <section className="section-spacing-x pb-(--section-py)">
        <ol className="section-container flex flex-col">
          {steps.map((t, i) => (
            <li key={t.id} className="relative grid gap-6 pb-16 pl-12 md:grid-cols-[1fr_1.4fr] md:pl-16">
              <span className="absolute top-0 left-0 flex size-8 items-center justify-center rounded-full bg-primary font-sans text-sm text-primary-foreground">
                {i + 1}
              </span>
              <span className="absolute top-10 bottom-0 left-4 w-px bg-xo-outline-variant/60" />
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold text-foreground">{t.title}</h2>
                <p className="leading-relaxed text-muted-foreground">{t.lead}</p>
              </div>
              <ClaimList claims={visibleClaims(t.claims, showHeld)} />
              {t.id === "check" && (
                <div className="md:col-span-2">
                  <LevelsStrip levels={SAFETY_LEVELS} />
                </div>
              )}
            </li>
          ))}
          <li id="help" className="scroll-mt-28 pl-12 md:pl-16">
            <CrisisCard region={region} />
          </li>
        </ol>
      </section>

      <section className="section-spacing bg-xo-surface-lowest">
        <div className="section-container grid gap-16 md:grid-cols-3 md:gap-10">
          {rest.map((t) => (
            <div key={t.id} className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-foreground">{t.title}</h2>
              <p className="font-serif leading-relaxed text-muted-foreground">{t.lead}</p>
              <ClaimList claims={visibleClaims(t.claims, showHeld)} className="text-sm" />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
