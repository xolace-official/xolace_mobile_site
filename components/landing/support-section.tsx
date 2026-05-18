import { SupportForm } from "./support-form"

export function SupportSection() {
  return (
    <section className="py-24 px-8 border-t border-border/40">
      <div className="max-w-xl mx-auto text-center space-y-8">
        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl text-foreground font-light">
            Believe in what we&apos;re building?
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Join our early supporters — no payment, just solidarity.
          </p>
        </div>
        <SupportForm />
      </div>
    </section>
  )
}
