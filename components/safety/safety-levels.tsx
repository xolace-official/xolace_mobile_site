import { SAFETY_LEVELS } from "@/lib/safety"
import { cn } from "@/lib/utils"

export function SafetyLevels() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-2xl bg-xo-outline-variant/40 sm:grid-cols-2 xl:grid-cols-4">
      {SAFETY_LEVELS.map((level, i) => (
        <li key={level.name} className="flex flex-col gap-2 bg-background p-5">
          <span className="font-sans text-xs tracking-widest text-muted-foreground uppercase">
            Level {i + 1}
          </span>
          <span
            className={cn(
              "text-lg font-semibold",
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
