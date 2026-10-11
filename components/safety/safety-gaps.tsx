import { GAPS } from "@/lib/safety"

export function SafetyGaps() {
  return (
    <aside id="gaps" aria-labelledby="gaps-title" className="scroll-mt-28">
      <div className="flex flex-col gap-5 rounded-3xl border border-xo-outline-variant/50 p-6 lg:sticky lg:top-28">
        <h2 id="gaps-title" className="text-lg font-semibold text-foreground">
          Not built yet
        </h2>
        <ul className="flex flex-col gap-4">
          {GAPS.map((g) => (
            <li
              key={g.id}
              className="text-sm leading-relaxed text-muted-foreground"
            >
              {g.text}
            </li>
          ))}
        </ul>
        <p className="border-t border-xo-outline-variant/40 pt-4 text-xs text-muted-foreground">
          We update this list as each one is fixed.
        </p>
      </div>
    </aside>
  )
}
