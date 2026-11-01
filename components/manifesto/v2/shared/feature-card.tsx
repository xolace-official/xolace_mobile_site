import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { Body, CardHeading, ledgerButton } from "@/components/shared/ledger"

export type Feature = {
  title: string
  body: string
  Icon: LucideIcon
  link?: { text: string; href: string }
}

export function FeatureCard({
  feature,
  index,
  label,
}: {
  feature: Feature
  index: number
  label?: string
}) {
  const { Icon } = feature
  return (
    <div className="group flex h-full flex-col gap-4 rounded-2xl border border-border/70 bg-xo-surface-lowest p-6 transition-colors duration-500 hover:border-primary/30 md:p-7">
      <div className="mb-2 flex items-center justify-between">
        <span className="flex size-10 items-center justify-center rounded-full bg-primary/[0.08] text-primary">
          <Icon aria-hidden className="size-[18px]" strokeWidth={1.5} />
        </span>
        <span className="text-xs tracking-[0.14em] text-muted-foreground/60 uppercase tabular-nums">
          {label ? `${label} · ` : ""}
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <CardHeading>{feature.title}</CardHeading>
      <Body className="md:text-base">{feature.body}</Body>
      {feature.link && (
        <Link
          href={feature.link.href}
          className={`${ledgerButton.link} mt-auto`}
        >
          {feature.link.text}
          <ArrowRight className="size-3.5" strokeWidth={1.5} />
        </Link>
      )}
    </div>
  )
}
