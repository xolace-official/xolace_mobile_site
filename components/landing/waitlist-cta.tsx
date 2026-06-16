import { WaitlistForm } from "./waitlist-form"

export function WaitlistCTA() {
  return (
    <section id="waitlist" className="relative overflow-hidden px-8 py-40">
      <div className="relative z-10 mx-auto max-w-3xl space-y-12 text-center">
        <h2 className="text-5xl leading-tight font-light text-foreground md:text-6xl">
          When it&apos;s ready, <br />
          <span className="font-extralight italic opacity-80">
            we&apos;ll find you.
          </span>
        </h2>
        <WaitlistForm />
      </div>
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 hidden h-[300px] w-[800px] -translate-x-1/2 rounded-[100%] bg-primary/5 blur-[120px] md:block" />
    </section>
  )
}
