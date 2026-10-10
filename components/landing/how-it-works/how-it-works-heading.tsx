import { cn } from "@/lib/utils"
import { PLUS_NOTE } from "./steps"

export function HowItWorksHeading({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-3", className)}>
      <p className="text-sm text-primary">How it works</p>
      <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] font-semibold tracking-tight text-balance text-foreground">
        You don&apos;t have to know what you&apos;re feeling to begin.
      </h2>
    </div>
  )
}

export function PlusLine({ className }: { className?: string }) {
  return (
    <p className={cn("text-muted-foreground/70", className)}>
      <span className="font-medium text-primary">{PLUS_NOTE.title}.</span>{" "}
      {PLUS_NOTE.body}
    </p>
  )
}
