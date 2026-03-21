export function HowItWorks() {
  return (
    <section className="py-40 px-8">
      <div className="max-w-5xl mx-auto space-y-32">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-secondary text-sm tracking-[0.05rem]">
              01
            </span>
            <h3 className="text-3xl text-foreground font-light">
              Say what&apos;s true.
            </h3>
            <p className="text-primary/70 text-lg leading-relaxed">
              Type what&apos;s real &mdash; or tap words that feel close.
              There&apos;s no pressure to be profound, just honest.
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-xo-surface-low aspect-video rounded-xl flex items-center justify-center p-8 shadow-2xl">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-32">
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-secondary text-sm tracking-[0.05rem]">
              02
            </span>
            <h3 className="text-3xl text-foreground font-light">
              See it clearly.
            </h3>
            <p className="text-primary/70 text-lg leading-relaxed">
              An AI mirrors your feeling back with precision. Not to solve it,
              but to let you see it for what it really is.
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-xo-surface-low aspect-video rounded-xl flex items-center justify-center p-8 shadow-2xl">
            <div className="rounded-full w-24 h-24 bg-primary/10 flex items-center justify-center animate-gentle-pulse">
              <div className="rounded-full w-12 h-12 bg-primary/20" />
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-secondary text-sm tracking-[0.05rem]">
              03
            </span>
            <h3 className="text-3xl text-foreground font-light">
              Choose what&apos;s next.
            </h3>
            <p className="text-primary/70 text-lg leading-relaxed">
              A guided moment, peer reflections, or just closing knowing you
              said it. You&apos;re in control of the quiet.
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-xo-surface-low aspect-video rounded-xl flex items-center justify-center p-8 shadow-2xl">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-xo-surface-bright/50" />
              <div className="w-12 h-12 rounded-lg bg-xo-surface-bright/50" />
              <div className="w-12 h-12 rounded-lg bg-secondary/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
