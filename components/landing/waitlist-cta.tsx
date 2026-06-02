import { WaitlistForm } from "./waitlist-form"

export function WaitlistCTA() {
  return (
    <section id="waitlist" className="py-40 px-8 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center space-y-12 relative z-10">
        <h2 className="text-5xl md:text-6xl text-foreground leading-tight font-light">
          When it&apos;s ready,{" "}
          <br />
          <span className="italic font-extralight opacity-80">
            we&apos;ll find you.
          </span>
        </h2>
        <WaitlistForm />
      </div>
      {/* Decorative Glow */}
      <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[120px] rounded-[100%] pointer-events-none" />
    </section>
  )
}
