import { FadeIn } from "@/components/shared/fade-in"

export function CorePromise() {
  return (
    <FadeIn className="section-spacing">
      <div className="mx-auto max-w-[680px]">
        <h2 className="font-serif text-[1.625rem] leading-[1.25] font-normal text-foreground md:text-[2.25rem]">
          You don&apos;t have to know what you&apos;re feeling.
        </h2>

        <p className="mt-8 text-[1.0625rem] leading-[1.65] font-light text-foreground md:text-[1.1875rem]">
          You arrive with whatever is there — heavy, foggy, restless, raw, or a
          feeling that doesn&apos;t have a shape yet. You say a little or a lot.
          You tap a word, type a sentence, or just speak.
        </p>

        {/* Stands alone — this is the thesis sentence */}
        <p className="mt-8 text-[1.0625rem] leading-[1.65] font-light text-foreground md:text-[1.1875rem]">
          The Mirror gives you back the words.
        </p>

        <p className="mt-8 text-[1.0625rem] leading-[1.65] font-light text-foreground md:text-[1.1875rem]">
          Sometimes that&apos;s enough. Sometimes you stay longer. Either way,
          you leave when you&apos;re ready.
        </p>
      </div>
    </FadeIn>
  )
}
