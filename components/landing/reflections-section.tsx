import { cn } from "@/lib/utils"

const reflections = [
  {
    quote:
      "Thinking about how much of my life I spend waiting for the 'real' part to start.",
    time: "11:24 PM",
    offset: "md:translate-y-4",
  },
  {
    quote: "Today felt like a performance I wasn't prepared for.",
    time: "4:12 PM",
    offset: "",
  },
  {
    quote:
      "The silence in my apartment used to feel lonely. Tonight, it just feels like space.",
    time: "2:05 AM",
    offset: "md:translate-y-8",
  },
]

export function ReflectionsSection() {
  return (
    <section className="py-40 px-8">
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <h2 className="text-4xl text-foreground font-light">
            You&apos;re not the only one carrying this.
          </h2>
          <p className="text-primary/60">
            Anonymized reflections from the collective quiet.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {reflections.map((r, i) => (
            <div
              key={i}
              className={cn(
                "p-8 bg-xo-surface-low rounded-xl space-y-6 border border-xo-outline-variant/5",
                r.offset
              )}
            >
              <p className="text-primary/90 leading-relaxed italic">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="h-px w-8 bg-secondary/40" />
              <p className="text-xs text-primary/40 tracking-[0.05rem]">
                ANONYMOUS &mdash; {r.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
