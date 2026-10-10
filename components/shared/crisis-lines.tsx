"use client"

import { useRegion } from "@/hooks/use-region"
import { getCrisisTier, type CrisisLine } from "@/lib/crisis-resources"
import { cn } from "@/lib/utils"

function CrisisLink({
  line,
  className,
}: {
  line: CrisisLine
  className?: string
}) {
  const external = line.href.startsWith("http")
  return (
    <a
      href={line.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {line.display}
    </a>
  )
}

export function CrisisLineList({
  className,
  linkClassName,
}: {
  className?: string
  linkClassName?: string
}) {
  const tier = getCrisisTier(useRegion())
  return (
    <ul className={className}>
      {tier.lines.map((line) => (
        <li key={line.href}>
          {line.label}: <CrisisLink line={line} className={linkClassName} />
          {line.note && <> ({line.note.toLowerCase()})</>}
        </li>
      ))}
    </ul>
  )
}

export function CrisisLineInline({
  linkClassName,
}: {
  linkClassName?: string
}) {
  const tier = getCrisisTier(useRegion())
  return (
    <>
      {tier.lines.map((line, i) => (
        <span key={line.href}>
          {i > 0 && "; "}
          {line.label},{" "}
          <CrisisLink
            line={line}
            className={cn("underline underline-offset-2", linkClassName)}
          />
        </span>
      ))}
    </>
  )
}
