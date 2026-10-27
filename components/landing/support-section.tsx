import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function SupportSection() {
  return (
    <section className="section-spacing section-spacing-x border-t border-border/40">
      <div className="section-container-narrow space-y-8 text-center">
        <div className="space-y-2">
          <h3 className="font-serif text-2xl italic md:text-[3.0rem]">
            Believe in what we&apos;re building?
          </h3>
          <p className="leading-relaxed text-muted-foreground">
            You don&apos;t have to subscribe to believe in what we&apos;re building.
          </p>
        </div>
        <Link
          href="/support-us"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"
        >
          See how you can help <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  )
}
