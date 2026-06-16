import { SupportForm } from "./support-form"

export function SupportSection() {
  return (
    <section className="section-spacing border-t border-border/40">
      <div className="section-container-narrow space-y-8 text-center">
        <div className="space-y-2">
          <h3 className="font-serif text-2xl italic md:text-[3.0rem]">
            Believe in what we&apos;re building?
          </h3>
          <p className="leading-relaxed text-muted-foreground">
            Join our early supporters - no payment, just solidarity.
          </p>
        </div>
        <SupportForm />
      </div>
    </section>
  )
}
