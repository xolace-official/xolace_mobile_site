import Link from "next/link"
import { FadeIn } from "@/components/shared/fade-in"

export function PrivacyStatement() {
  return (
    <FadeIn className="py-20 md:py-32 px-6">
      <div className="max-w-[680px] mx-auto">
        {/* Hairline border wrapping the section content — barely there, just separation */}
        <div className="border border-muted-foreground/20 p-8 md:p-12 space-y-8">
          <h2 className="font-serif font-normal text-[1.625rem] md:text-[2.25rem] text-foreground leading-[1.25]">
            What you say is yours.
          </h2>

          <p className="text-[1.0625rem] md:text-[1.1875rem] text-foreground font-light leading-[1.65]">
            We process what you write so the Mirror can respond. We never store it longer than we
            need to. We never sell it. We never share it.
          </p>

          <p className="text-[1.0625rem] md:text-[1.1875rem] text-foreground font-light leading-[1.65]">
            The only exception is that if something you write suggests you may be in danger, we
            will quietly offer you help — not because we are watching, but because we promised to
            be a safe place, and a safe place does not leave you alone in a crisis.
          </p>

          <Link
            href="/privacy"
            className="inline-block text-[1.0625rem] text-primary hover:text-primary/70 transition-colors duration-200 font-light"
          >
            Read more about how we hold this →
          </Link>
        </div>
      </div>
    </FadeIn>
  )
}
