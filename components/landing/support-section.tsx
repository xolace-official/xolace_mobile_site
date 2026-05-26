import { SupportForm } from "./support-form"

export function SupportSection() {
  return (
    <section className="section-spacing border-t border-border/40">
      <div className="section-container-narrow text-center space-y-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-serif md:text-[3.0rem] italic">
            Believe in what we&apos;re building?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Join our early supporters - no payment, just solidarity.
          </p>
        </div>
        <SupportForm />
      </div>
    </section>
  )
}
