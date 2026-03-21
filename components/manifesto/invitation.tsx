import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Invitation() {
  return (
    <section className="asymmetric-layout mb-32" id="waitlist">
      <div className="bg-card p-5 md:p-20 rounded-xl relative overflow-hidden">
        {/* Subtle gradient glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl md:text-5xl text-foreground mb-6 font-light">
            Come home.
            <span className="text-sm text-muted-foreground mt-4">
              (opening soon)
            </span>
          </h2>
          <p className="text-muted-foreground mb-12 text-lg font-serif">
            If any of this resonated, we&apos;d like you to be there when it
            opens.
          </p>
          <form className="space-y-6">
            <Input
              type="email"
              placeholder="Your email address"
              className="h-auto w-full border-none bg-input ring-1 ring-xo-outline-variant/15 focus-visible:ring-primary/50 rounded-lg px-6 py-4 text-sm text-foreground transition-all duration-500"
              disabled
            />
            <Button
              type="submit"
              size="lg"
              className="h-auto w-full md:w-auto px-10 py-4 rounded-lg border-none cta-gradient text-primary-foreground font-semibold tracking-widest uppercase text-xs transition-all duration-500"
              disabled
            >
              Join the Waitlist
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            No spam. Just a quiet note when it&apos;s ready.
          </p>
        </div>
      </div>
    </section>
  )
}
