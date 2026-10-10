"use client"

// PROTOTYPE (ticket #27): pieces every safety variant uses. Layouts stay in each variant.
import { LifeBuoy, Phone, ExternalLink } from "lucide-react"
import type { Region } from "@/lib/pricing"
import { cn } from "@/lib/utils"
import { CRISIS_TIERS, DANGER_LINE, type Claim } from "./safety-data"

export function ClaimList({ claims, className }: { claims: Claim[]; className?: string }) {
  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {claims.map((c) => (
        <li
          key={c.id}
          className={cn(
            "flex flex-col gap-1 leading-relaxed text-foreground/90",
            c.status === "held" && "rounded-lg border border-dashed border-primary/60 p-3"
          )}
        >
          <span>{c.text}</span>
          {c.status === "held" && <HeldNote claim={c} />}
        </li>
      ))}
    </ul>
  )
}

export function HeldNote({ claim }: { claim: Claim }) {
  if (process.env.NODE_ENV === "production") return null
  return (
    <span className="font-sans text-xs text-primary">
      <strong>Held</strong> ({claim.source}): {claim.hold}
    </span>
  )
}

export function CrisisCard({
  region,
  size = "md",
  className,
}: {
  region: Region
  size?: "md" | "lg"
  className?: string
}) {
  const tier = CRISIS_TIERS[region]
  return (
    <div
      className={cn(
        "flex flex-col gap-5 rounded-3xl bg-xo-surface-low p-6 ring-1 ring-accent/40 md:p-8",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <LifeBuoy className="size-5 text-accent" />
        <p className={cn("font-semibold text-foreground", size === "lg" ? "text-2xl md:text-3xl" : "text-lg")}>
          Need help right now?
        </p>
      </div>
      <ul className="flex flex-col gap-3">
        {tier.lines.map((line) => (
          <li key={line.href}>
            <a
              href={line.href}
              className="group flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-2xl bg-background/60 px-5 py-4 transition-colors hover:bg-background"
            >
              <span className="text-sm text-muted-foreground">
                {tier.name} · {line.label}
                {line.note && <> · {line.note}</>}
              </span>
              <span
                className={cn(
                  "flex items-center gap-2 font-semibold text-foreground",
                  size === "lg" ? "text-2xl md:text-3xl" : "text-xl"
                )}
              >
                {line.href.startsWith("tel:") ? (
                  <Phone className="size-4 text-accent" />
                ) : (
                  <ExternalLink className="size-4 text-accent" />
                )}
                {line.display}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted-foreground">{DANGER_LINE}</p>
    </div>
  )
}

export function LevelsStrip({ levels }: { levels: { name: string; does: string }[] }) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-2xl bg-xo-outline-variant/40 sm:grid-cols-2 lg:grid-cols-4">
      {levels.map((l, i) => (
        <li key={l.name} className="flex flex-col gap-2 bg-background p-5">
          <span className="font-sans text-xs tracking-widest text-muted-foreground uppercase">
            Level {i + 1}
          </span>
          <span className={cn("text-lg font-semibold", i === 3 ? "text-primary" : "text-foreground")}>
            {l.name}
          </span>
          <span className="text-sm leading-relaxed text-muted-foreground">{l.does}</span>
        </li>
      ))}
    </ol>
  )
}
