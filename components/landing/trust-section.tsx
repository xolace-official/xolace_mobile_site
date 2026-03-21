import { Lock, UserX, EyeOff, Ban, Shield } from "lucide-react"

const features = [
  { icon: Lock, text: "Words are end-to-end encrypted." },
  { icon: UserX, text: "Account only needed for reflections." },
  { icon: EyeOff, text: "Anonymous means anonymous." },
  { icon: Ban, text: "No ads. No data selling. Ever." },
]

export function TrustSection() {
  return (
    <section className="py-32 px-8 bg-xo-surface-lowest">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl text-foreground font-light">
              Built on trust,
              <br />
              not extraction.
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {features.map(({ icon: Icon, text }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <Icon className="size-[18px] text-accent" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="w-full aspect-square rounded-full border border-border flex items-center justify-center">
              <div className="w-3/4 aspect-square rounded-full border border-border/50 flex items-center justify-center">
                <Shield
                  className="size-16 text-primary/20"
                  fill="currentColor"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
