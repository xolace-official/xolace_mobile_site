import { FadeIn } from "@/components/shared/fade-in"

export function AntiEngagement() {
  return (
    <FadeIn className="py-20 md:py-32 px-6">
      <div className="max-w-[680px] mx-auto">
        {/* Slightly larger h2 — this moment distinguishes Xolace from every other app */}
        <h2 className="font-serif font-normal text-[1.875rem] md:text-[2.5rem] text-foreground leading-[1.25]">
          We won&apos;t try to keep you here.
        </h2>

        <p className="mt-8 text-[1.0625rem] md:text-[1.1875rem] text-foreground font-light leading-[1.65]">
          No streaks. No daily notifications. No reasons to come back unless you have one.
        </p>

        <p className="mt-6 text-[1.0625rem] md:text-[1.1875rem] text-foreground font-light leading-[1.65]">
          Xolace ends every session by telling you to go live your life.{" "}
          <em className="font-serif italic text-muted-foreground">We mean it.</em>
        </p>
      </div>
    </FadeIn>
  )
}
