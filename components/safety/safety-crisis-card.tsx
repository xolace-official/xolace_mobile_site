"use client"

import { ExternalLink, LifeBuoy, Phone } from "lucide-react"
import { CrisisLink } from "@/components/shared/crisis-lines"
import { useRegion } from "@/hooks/use-region"
import { DANGER_LINE, getCrisisTier } from "@/lib/crisis-resources"

// The only regional block on /safety: everything else on the page is the same everywhere.
export function SafetyCrisisCard() {
  const tier = getCrisisTier(useRegion())

  return (
    <div className="flex flex-col gap-5 rounded-3xl bg-xo-surface-low p-6 ring-1 ring-accent/40 md:p-8">
      <div className="flex items-center gap-3">
        <LifeBuoy className="size-5 text-accent" aria-hidden />
        <p className="text-2xl font-semibold text-foreground md:text-3xl">
          Need help right now?
        </p>
      </div>
      <ul className="flex flex-col gap-3">
        {tier.lines.map((line) => {
          const Icon = line.href.startsWith("http") ? ExternalLink : Phone
          return (
            <li key={line.href}>
              <CrisisLink
                line={line}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-2xl bg-background/60 px-5 py-4 transition-colors hover:bg-background"
              >
                <span className="text-sm text-muted-foreground">
                  {tier.name} · {line.label}
                  {line.note && <> · {line.note}</>}
                </span>
                <span className="flex items-center gap-2 text-2xl font-semibold text-foreground md:text-3xl">
                  <Icon className="size-4 text-accent" aria-hidden />
                  {line.display}
                </span>
              </CrisisLink>
            </li>
          )
        })}
      </ul>
      <p className="text-sm text-muted-foreground">{DANGER_LINE}</p>
    </div>
  )
}
