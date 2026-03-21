import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function WaitlistForm({ className }: { className?: string }) {
  return (
    <form
      className={cn(
        "flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto",
        className
      )}
    >
      <Input
        type="email"
        placeholder="Your email"
        className="h-auto w-full md:flex-1 border-none bg-input ring-1 ring-xo-outline-variant/15 focus-visible:ring-primary/50 rounded-lg px-6 py-4 text-sm text-foreground transition-all duration-500"
        disabled
      />
      <Button
        type="submit"
        size="lg"
        className="h-auto w-full md:w-auto px-8 py-4 rounded-lg border-none cta-gradient text-primary-foreground font-semibold transition-all duration-500"
        disabled
      >
        Save my spot
      </Button>
    </form>
  )
}
