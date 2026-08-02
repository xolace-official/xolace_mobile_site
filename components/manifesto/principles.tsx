import { cn } from "@/lib/utils"

const principles = [
  {
    title: "Healing happens in honest moments.",
    body: "We believe that truth is the only foundation for change. No filters, no performance metrics, just the quiet honesty of the self.",
  },
  {
    title: "Safe spaces need structure.",
    body: "Safety isn\u2019t an accident; it\u2019s engineered through intentional design and strict ethical boundaries that protect your inner world.",
  },
  {
    title: "People deserve a place to be human without performing.",
    body: "You are not a brand. You are not a data point. You are a person, and your value is inherent, not produced.",
  },
  {
    title: "Technology can hold space if it\u2019s built with care.",
    body: "We don\u2019t wait for the break. We build the infrastructure to sustain the spirit before the weight becomes too much to carry.",
  },
]

export function Principles() {
  return (
    <section className="asymmetric-layout mb-32 md:mb-52">
      <div className="grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-2">
        {principles.map((p, i) => (
          <div
            key={i}
            className={cn("space-y-6", i % 2 === 0 ? "md:translate-y-12" : "")}
          >
            <p className="text-xs text-primary/60">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="text-3xl font-light text-foreground">{p.title}</h3>
            <p className="max-w-sm font-serif text-muted-foreground">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
