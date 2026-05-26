import { FadeIn } from "@/components/shared/fade-in"
import { Iphone } from "@/components/ui/iphone"

export function AppPreview() {
  return (
    <FadeIn className="py-20 md:py-32 px-6">
      <div className="max-w-[680px] mx-auto flex flex-col items-center gap-6">
        <div className="w-[280px] md:w-[320px]">
          <Iphone src="/app-images/say-whats-true.jpeg" />
        </div>
        <p className="text-sm md:text-base text-muted-foreground italic font-light text-center">
          The entry. Start anywhere — a word, a sentence, your voice.
        </p>
      </div>
    </FadeIn>
  )
}
