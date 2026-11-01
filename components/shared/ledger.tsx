import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

// The one type scale for the document pages (manifesto, pricing, safety): medium-weight headings, tight tracking, left-aligned.
// Server components on purpose, so client sections can import them without crossing the client boundary.

type TextProps = { children: ReactNode; className?: string; id?: string }

export function Eyebrow({ children, className }: TextProps) {
  return (
    <p
      className={cn(
        "text-xs tracking-[0.14em] text-muted-foreground/70 uppercase",
        className
      )}
    >
      {children}
    </p>
  )
}

export function DisplayHeading({ children, className }: TextProps) {
  return (
    <h1
      className={cn(
        "text-[2.5rem] leading-[1.05] font-medium tracking-[-0.025em] text-balance text-foreground md:text-[3.5rem] md:leading-[1.03] lg:text-[4rem] lg:tracking-[-0.03em]",
        className
      )}
    >
      {children}
    </h1>
  )
}

export function SectionHeading({ children, className, id }: TextProps) {
  return (
    <h2
      id={id}
      className={cn(
        "text-[2rem] leading-[1.1] font-medium tracking-[-0.02em] text-balance text-foreground md:text-5xl md:leading-[1.05]",
        className
      )}
    >
      {children}
    </h2>
  )
}

export function CardHeading({ children, className }: TextProps) {
  return (
    <h3
      className={cn(
        "text-xl leading-snug font-medium tracking-[-0.01em] text-foreground md:text-[1.625rem] md:leading-[1.15]",
        className
      )}
    >
      {children}
    </h3>
  )
}

export function Lead({ children, className }: TextProps) {
  return (
    <p
      className={cn(
        "text-lg leading-[1.45] text-muted-foreground md:text-[1.375rem]",
        className
      )}
    >
      {children}
    </p>
  )
}

export function Body({ children, className }: TextProps) {
  return (
    <p
      className={cn(
        "text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]",
        className
      )}
    >
      {children}
    </p>
  )
}

// Soft rose and teal light behind a hero; the parent must be `relative`
export function HeroGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="animate-gentle-pulse absolute -top-24 left-[10%] size-[36rem] rounded-full bg-primary/[0.12] blur-[140px]" />
      <div className="absolute top-1/3 right-[5%] size-[26rem] rounded-full bg-accent/[0.07] blur-[130px]" />
    </div>
  )
}

export function Hairline({ className }: { className?: string }) {
  return <div aria-hidden className={cn("h-px bg-border", className)} />
}

// Label on the left, content on the right, a hairline above both: the repeating section pattern.
export function LedgerSection({
  id,
  label,
  children,
  className,
}: {
  id?: string
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn("section-spacing-tight", className)}>
      <div className="section-container-wide">
        <Hairline className="mb-10 md:mb-14" />
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
          <Eyebrow className="md:sticky md:top-28 md:self-start">
            {label}
          </Eyebrow>
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  )
}

export const ledgerButton = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-colors hover:bg-primary/85",
  ghost:
    "inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm text-primary transition-colors hover:bg-primary/[0.06]",
  link: "inline-flex items-center gap-1.5 text-sm text-primary transition-colors hover:text-primary/75",
}
