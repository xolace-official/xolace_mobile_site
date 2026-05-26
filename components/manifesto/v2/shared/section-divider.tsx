import type { ReactNode } from "react"

interface SectionDividerProps {
  label: string
  children: ReactNode
}

export function SectionDivider({ label, children }: SectionDividerProps) {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-24 mb-12">
      <div className="md:w-1/3">
        <div className="w-full h-px bg-border/20 mb-6" />
        <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground/30">
          {label}
        </p>
      </div>
      <div className="md:w-2/3">{children}</div>
    </div>
  )
}
