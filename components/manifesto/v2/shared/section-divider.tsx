import type { ReactNode } from "react"

interface SectionDividerProps {
  label: string
  children: ReactNode
}

export function SectionDivider({ label, children }: SectionDividerProps) {
  return (
    <div className="mb-12 flex flex-col gap-10 md:flex-row md:gap-24">
      <div className="md:w-1/3">
        <div className="mb-6 h-px w-full bg-border/20" />
        <p className="font-mono text-[11px] tracking-[0.24em] text-muted-foreground/30 uppercase">
          {label}
        </p>
      </div>
      <div className="md:w-2/3">{children}</div>
    </div>
  )
}
