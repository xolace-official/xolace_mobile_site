export function ProblemSection() {
  return (
    <section className="py-32 px-8 md:px-24 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-8 md:col-start-3 space-y-16">
          <div className="space-y-6">
            <p className="text-3xl md:text-4xl text-foreground leading-snug font-light">
              Monday at 11pm. Chest tight.
              <br />
              Don&apos;t know why. Not &apos;therapy bad&apos; &mdash;{" "}
              <span className="text-primary/60 italic">just heavy.</span>
            </p>
            <p className="text-3xl md:text-4xl text-foreground leading-snug font-light pl-8 md:pl-24">
              Friday night. Scrolling.
              <br />
              Not depressed &mdash;{" "}
              <span className="text-primary/60 italic">just hollow.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
