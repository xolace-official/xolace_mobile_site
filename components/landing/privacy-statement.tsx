import Link from "next/link"
import { FadeIn } from "@/components/shared/fade-in"

export function PrivacyStatement() {
  return (
    <FadeIn className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-[680px]">
        {/* Hairline border wrapping the section content — barely there, just separation */}
        <div className="space-y-8 border border-muted-foreground/20 p-8 md:p-12">
          <h2 className="font-serif text-[1.625rem] leading-[1.25] font-normal text-foreground md:text-[2.25rem]">
            What you say is yours.
          </h2>

          <p className="text-[1.0625rem] leading-[1.65] font-light text-foreground md:text-[1.1875rem]">
            We process what you write so the Mirror can respond. We never store
            it longer than we need to. We never sell it. We never share it.
          </p>

          <p className="text-[1.0625rem] leading-[1.65] font-light text-foreground md:text-[1.1875rem]">
            The only exception is that if something you write suggests you may
            be in danger, we will quietly offer you help — not because we are
            watching, but because we promised to be a safe place, and a safe
            place does not leave you alone in a crisis.
          </p>

          <Link
            href="/privacy"
            className="inline-block text-[1.0625rem] font-light text-primary transition-colors duration-200 hover:text-primary/70"
          >
            Read more about how we hold this →
          </Link>
        </div>
      </div>
    </FadeIn>
  )
}
