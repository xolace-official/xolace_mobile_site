import { FadeIn } from "@/components/shared/fade-in"

export function AntiEngagement() {
  return (
    <FadeIn className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-[680px]">
        {/* Slightly larger h2 — this moment distinguishes Xolace from every other app */}
        <h2 className="font-serif text-[1.875rem] leading-[1.25] font-normal text-foreground md:text-[2.5rem]">
          We won&apos;t try to keep you here.
        </h2>

        <p className="mt-8 text-[1.0625rem] leading-[1.65] font-light text-foreground md:text-[1.1875rem]">
          No streaks. No daily notifications. No reasons to come back unless you
          have one.
        </p>

        <p className="mt-6 text-[1.0625rem] leading-[1.65] font-light text-foreground md:text-[1.1875rem]">
          Xolace ends every session by telling you to go live your life.{" "}
          <em className="font-serif text-muted-foreground italic">
            We mean it.
          </em>
        </p>
      </div>
    </FadeIn>
  )
}
