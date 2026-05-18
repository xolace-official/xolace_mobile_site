import { FadeIn } from "@/components/shared/fade-in"

export function CorePromise() {
  return (
    <FadeIn className="py-20 md:py-32 px-6">
      <div className="max-w-[680px] mx-auto">
        <h2 className="font-serif font-normal text-[1.625rem] md:text-[2.25rem] text-foreground leading-[1.25]">
          You don&apos;t have to know what you&apos;re feeling.
        </h2>

        <p className="mt-8 text-[1.0625rem] md:text-[1.1875rem] text-foreground font-light leading-[1.65]">
          You arrive with whatever is there — heavy, foggy, restless, raw, or a feeling that
          doesn&apos;t have a shape yet. You say a little or a lot. You tap a word, type a sentence,
          or just speak.
        </p>

        {/* Stands alone — this is the thesis sentence */}
        <p className="mt-8 text-[1.0625rem] md:text-[1.1875rem] text-foreground font-light leading-[1.65]">
          The Mirror gives you back the words.
        </p>

        <p className="mt-8 text-[1.0625rem] md:text-[1.1875rem] text-foreground font-light leading-[1.65]">
          Sometimes that&apos;s enough. Sometimes you stay longer. Either way, you leave when
          you&apos;re ready.
        </p>
      </div>
    </FadeIn>
  )
}
