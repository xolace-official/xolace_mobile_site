import { FadeIn } from "@/components/shared/fade-in"

export function MirrorQuote() {
  return (
    <FadeIn className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-[680px]">
        {/*
          Left border in coral (--primary) marks this as the Mirror's voice.
          hover: border widens slightly — a gentle signal that this is the product in action.
        */}
        <blockquote className="group border-l-2 border-primary pl-6 text-xl leading-[1.55] font-light text-foreground transition-all duration-500 hover:border-l-[3px] md:text-[1.75rem]">
          &ldquo;Something&apos;s activated but there&apos;s nothing to show for
          it, just this restless static and underneath it an openness that feels
          more like exposure than relief.&rdquo;
        </blockquote>
        <p className="mt-5 pl-6 text-sm font-light text-muted-foreground/60 italic md:text-base">
          — The Mirror, after someone tapped three words.
        </p>
      </div>
    </FadeIn>
  )
}
