import { FadeIn } from "@/components/shared/fade-in"

export function MirrorQuote() {
  return (
    <FadeIn className="py-20 md:py-32 px-6">
      <div className="max-w-[680px] mx-auto">
        {/*
          Left border in coral (--primary) marks this as the Mirror's voice.
          hover: border widens slightly — a gentle signal that this is the product in action.
        */}
        <blockquote className="group border-l-2 hover:border-l-[3px] border-primary pl-6 transition-all duration-500 text-xl md:text-[1.75rem] text-foreground font-light leading-[1.55]">
          &ldquo;Something&apos;s activated but there&apos;s nothing to show for it, just this
          restless static and underneath it an openness that feels more like exposure
          than relief.&rdquo;
        </blockquote>
        <p className="mt-5 pl-6 text-sm md:text-base text-muted-foreground/60 italic font-light">
          — The Mirror, after someone tapped three words.
        </p>
      </div>
    </FadeIn>
  )
}
