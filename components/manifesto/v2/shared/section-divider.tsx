import type { ReactNode } from "react"

interface SectionDividerProps {
  label: string
  children: ReactNode
}

export function SectionDivider({ label, children }: SectionDividerProps) {
  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-12">
      <div className="md:w-1/3">
        <div className="w-full h-px bg-xo-outline-variant/20 mb-8" />
        <p className="text-xs text-muted-foreground/60 uppercase tracking-widest">
          {label}
        </p>
      </div>
      <div className="md:w-2/3">{children}</div>
    </div>
  )
}
