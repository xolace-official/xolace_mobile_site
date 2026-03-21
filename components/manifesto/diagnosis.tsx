export function Diagnosis() {
  return (
    <section className="asymmetric-layout mb-32 md:mb-52">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-12">
        <div className="md:w-1/3">
          <div className="w-full h-px bg-xo-outline-variant/20 mb-8" />
          <p className="text-xs text-primary/40 uppercase tracking-widest">
            The Diagnosis
          </p>
        </div>
        <div className="md:w-2/3">
          <p className="text-3xl md:text-4xl text-muted-foreground leading-snug font-light">
            Performance culture, hustle culture, emotional suppression.
            Vulnerability has become either{" "}
            <span className="text-foreground italic">
              monetized, weaponized,
            </span>{" "}
            or dismissed.
          </p>
        </div>
      </div>
      <div className="max-w-2xl md:ml-auto space-y-6">
        <p className="font-serif text-base md:text-lg text-primary/60 leading-loose">
          We live in performance culture. Vulnerability is either monetized or
          dismissed. You can post a breakdown on social media and get likes for
          it &mdash; or you can sit alone with it and pretend everything is fine.
          There is no in-between.
        </p>
        <p className="font-serif text-base md:text-lg text-primary/60 leading-loose">
          Therapy helps, when you can get it. But therapy is expensive,
          time-bound, and designed for when things are already bad. There is no
          system for the everyday emotional weight that most people carry
          silently.
        </p>
        <p className="font-serif text-base md:text-lg text-primary/60 leading-loose">
          The mental health conversation has gotten louder. But having a
          conversation about feelings is not the same as having a space to feel
          them.
        </p>
      </div>
    </section>
  )
}
