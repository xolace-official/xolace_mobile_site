import { X } from "lucide-react"

const antidotes = [
  "Not a chatbot therapist.",
  "Not a social feed.",
  "Not a dopamine machine.",
  "No ads. Ever.",
]

const neverStatements = [
  "Xolace will never be a chatbot therapist. We don\u2019t give advice. We don\u2019t diagnose. We don\u2019t pretend an algorithm understands you. The AI mirrors, that\u2019s it.",
  "Xolace will never be a social feed. There are no profiles, no followers, no likes, no content to perform for. The things you say are yours.",
  "Xolace will never show you ads. Not now. Not ever. Showing an ad to someone who just typed something honest would break everything this is supposed to be.",
  "Xolace will never replace a therapist. If you need professional care, we\u2019ll help you find it, not pretend to be it. We know what we are. And we know what we\u2019re not.",
  "Xolace will never sell your data. Your emotional life is not a product.",
]

export function Antidote() {
  return (
    <section className="mb-32 bg-xo-surface-lowest py-32 md:mb-52 md:py-48">
      <div className="asymmetric-layout">
        <h2 className="mb-16 text-4xl font-light text-foreground md:text-5xl">
          The Antidote.
        </h2>
        <div className="mb-20 flex max-w-5xl flex-wrap gap-8 md:gap-x-20 md:gap-y-12">
          {antidotes.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <X className="size-4 text-primary/40" />
              <span className="text-2xl font-light text-muted-foreground">
                {item}
              </span>
            </div>
          ))}
        </div>
        <div className="max-w-2xl space-y-6">
          {neverStatements.map((statement, i) => (
            <p
              key={i}
              className="font-serif text-base leading-loose text-muted-foreground"
            >
              {statement}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
