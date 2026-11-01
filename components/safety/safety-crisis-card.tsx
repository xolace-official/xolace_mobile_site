"use client"

import { ArrowUpRight, LifeBuoy, Phone } from "lucide-react"
import { CrisisLink } from "@/components/shared/crisis-lines"
import { useRegion } from "@/hooks/use-region"
import { DANGER_LINE, getCrisisTier } from "@/lib/crisis-resources"

// The only regional block on /safety: everything else on the page is the same everywhere.
export function SafetyCrisisCard() {
  const tier = getCrisisTier(useRegion())

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-accent/50 bg-xo-surface-lowest p-6 md:p-8">
      <div className="flex items-center gap-3">
        <LifeBuoy
          className="size-5 text-accent"
          strokeWidth={1.5}
          aria-hidden
        />
        <p className="text-xl font-medium tracking-[-0.01em] text-foreground md:text-[1.625rem]">
          Need help right now?
        </p>
      </div>
      <ul className="flex flex-col border-t border-border">
        {tier.lines.map((line) => {
          const Icon = line.href.startsWith("http") ? ArrowUpRight : Phone
          return (
            <li key={line.href} className="border-b border-border">
              <CrisisLink
                line={line}
                className="group flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4"
              >
                <span className="text-sm text-muted-foreground">
                  {tier.name} · {line.label}
                  {line.note && <> · {line.note}</>}
                </span>
                <span className="flex items-center gap-2 text-2xl font-medium tracking-[-0.02em] text-foreground tabular-nums transition-colors group-hover:text-primary md:text-3xl">
                  <Icon
                    className="size-4 text-accent"
                    strokeWidth={1.5}
                    aria-hidden
                  />
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
