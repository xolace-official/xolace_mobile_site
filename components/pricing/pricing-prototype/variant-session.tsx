"use client"

// PROTOTYPE (ticket #26) variant C: walk one session and mark the point where Plus begins.
import type { Region } from "@/lib/pricing"
import { DownloadButtons } from "@/components/shared/download-buttons"
import { cn } from "@/lib/utils"
import { planRows, rowCopy, type Wording } from "./plan-data"
import {
  AlwaysFree,
  BillingToggle,
  ConfirmFlag,
  PriceLine,
  PriceSmallPrint,
  useBilling,
} from "./shared"

const row = (id: string) => planRows.find((r) => r.id === id)!

type Step = { title: string; body: (w: Wording) => string; plus?: (w: Wording) => string }

const steps: Step[] = [
  {
    title: "Say it",
    body: () => "Type it, speak it, pick a prompt or a word. However it comes out.",
  },
  {
    title: "See it named",
    body: (w) => `The Fire writes your mirror: what it hears underneath. ${rowCopy(row("mirror").free!, w)}`,
    plus: (w) => rowCopy(row("mirror").plus, w),
  },
  {
    title: "Choose what's next",
    body: () => "Sit with it for a moment, read what others wrote when they felt the same, or close.",
    plus: (w) => `Peer reflections ${rowCopy(row("peers").plus, w).toLowerCase()}`,
  },
]

const between = ["vent", "timeline", "quotes", "vessa", "lantern", "xolacers", "look"].map(row)

export function VariantSession({ wording, region }: { wording: Wording; region: Region }) {
  const [billing, setBilling] = useBilling()
  const kindling = row("kindling")

  return (
    <section className="section-spacing">
      <div className="section-container-narrow flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            Reflecting is free. Plus is the support that comes after.
          </h1>
          <p className="text-lg text-muted-foreground">
            Here&rsquo;s one session in Xolace, and exactly where Plus begins.
          </p>
        </div>

        <ol className="flex flex-col">
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex gap-6 pb-10">
              <Rail tone="free" />
              <Dot n={i + 1} tone="free" />
              <div className="flex flex-col gap-2 pt-1">
                <h2 className="text-xl font-semibold text-foreground">{s.title}</h2>
                <p className="text-muted-foreground">{s.body(wording)}</p>
                {s.plus && (
                  <p className="text-sm text-foreground">
                    <span className="font-medium text-primary">With Plus:</span> {s.plus(wording)}
                  </p>
                )}
              </div>
            </li>
          ))}
          <li className="relative flex gap-6">
            <Dot n={4} tone="plus" />
            <div className="flex flex-col gap-3 rounded-2xl bg-xo-surface-low p-6 ring-1 ring-primary/30">
              <p className="text-sm font-medium text-primary">Plus begins here</p>
              <h2 className="text-xl font-semibold text-foreground">Kindling picks your support</h2>
              <p className="text-foreground">{rowCopy(kindling.plus, wording)}</p>
              <p className="text-sm text-muted-foreground">
                That can include a Trusted Bridge draft for a message to someone you trust
                {wording === "numbers" ? ` (${rowCopy(row("bridge").plus, wording).toLowerCase().replace(".", "")})` : ""}.
              </p>
              <p className="text-sm text-muted-foreground">
                On Free: {rowCopy(kindling.free!, wording).toLowerCase()}
              </p>
            </div>
          </li>
        </ol>

        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-foreground">Between sessions</h2>
          <dl className="flex flex-col">
            {between.map((r) => (
              <div key={r.id} className="grid gap-2 border-t border-xo-outline-variant/40 py-4 md:grid-cols-[10rem_1fr_1fr] md:gap-6">
                <dt className="font-medium text-foreground">
                  {r.name}
                  {r.confirm && <ConfirmFlag note={r.confirm} />}
                </dt>
                <dd className="text-sm text-muted-foreground">
                  <span className="md:hidden">Free: </span>
                  {r.free && rowCopy(r.free, wording)}
                </dd>
                <dd className="text-sm text-foreground">
                  <span className="text-primary md:hidden">Plus: </span>
                  {rowCopy(r.plus, wording)}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-6 rounded-3xl border border-xo-outline-variant/50 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold text-foreground">Xolace Plus</h2>
              <PriceLine billing={billing} region={region} />
            </div>
            <BillingToggle billing={billing} onChange={setBilling} region={region} className="self-start" />
          </div>
          <DownloadButtons align="start" />
          <PriceSmallPrint region={region} />
        </div>

        <AlwaysFree region={region} />
      </div>
    </section>
  )
}

function Rail({ tone }: { tone: "free" | "plus" }) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute top-9 bottom-0 left-[15px] w-px",
        tone === "free" ? "bg-accent/50" : "bg-primary/50"
      )}
    />
  )
}

function Dot({ n, tone }: { n: number; tone: "free" | "plus" }) {
  return (
    <span
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
        tone === "free" ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
      )}
    >
      {n}
    </span>
  )
}
