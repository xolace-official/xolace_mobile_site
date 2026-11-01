import { GAPS } from "@/lib/safety"

export function SafetyGaps() {
  return (
    <aside id="gaps" aria-labelledby="gaps-title" className="scroll-mt-28">
      <div className="flex flex-col gap-5 rounded-2xl bg-xo-surface-lowest p-6 lg:sticky lg:top-28">
        <h2
          id="gaps-title"
          className="text-xl font-medium tracking-[-0.01em] text-foreground"
        >
          Not built yet
        </h2>
        <ul className="flex flex-col border-t border-border">
          {GAPS.map((g) => (
            <li
              key={g.id}
              className="border-b border-border py-3 text-sm leading-relaxed text-muted-foreground"
            >
              {g.text}
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground/70">
          We update this list as each one is fixed.
        </p>
      </div>
    </aside>
  )
}
