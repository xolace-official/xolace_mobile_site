import { FadeIn } from "@/components/shared/fade-in"
import { Iphone } from "@/components/ui/iphone"

export function AppPreview() {
  return (
    <FadeIn className="px-6 py-20 md:py-32">
      <div className="mx-auto flex max-w-[680px] flex-col items-center gap-6">
        <div className="w-[280px] md:w-[320px]">
          <Iphone src="/app-images/say-whats-true.jpeg" />
        </div>
        <p className="text-center text-sm font-light text-muted-foreground italic md:text-base">
          The entry. Start anywhere — a word, a sentence, your voice.
        </p>
      </div>
    </FadeIn>
  )
}
