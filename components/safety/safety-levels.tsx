import { SAFETY_LEVELS } from "@/lib/safety"
import { cn } from "@/lib/utils"

export function SafetyLevels() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 xl:grid-cols-4">
      {SAFETY_LEVELS.map((level, i) => (
        <li key={level.name} className="flex flex-col gap-2 bg-background p-5">
          <span className="text-xs tracking-[0.14em] text-muted-foreground/70 uppercase">
            Level {i + 1}
          </span>
          <span
            className={cn(
              "text-xl font-medium tracking-[-0.01em]",
              i === SAFETY_LEVELS.length - 1
                ? "text-primary"
                : "text-foreground"
            )}
          >
            {level.name}
          </span>
          <span className="text-sm leading-relaxed text-muted-foreground">
            {level.does}
          </span>
        </li>
      ))}
    </ol>
  )
}
