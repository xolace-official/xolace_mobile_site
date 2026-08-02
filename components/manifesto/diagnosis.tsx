export function Diagnosis() {
  return (
    <section className="asymmetric-layout mb-32 md:mb-52">
      <div className="mb-12 flex flex-col gap-12 md:flex-row md:gap-24">
        <div className="md:w-1/3">
          <div className="mb-8 h-px w-full bg-xo-outline-variant/20" />
          <p className="text-xs tracking-widest text-muted-foreground/60 uppercase">
            The Diagnosis
          </p>
        </div>
        <div className="md:w-2/3">
          <p className="text-3xl leading-snug font-light text-muted-foreground md:text-4xl">
            Performance culture, hustle culture, emotional suppression.
            Vulnerability has become either{" "}
            <span className="text-foreground italic">
              monetized, weaponized,
            </span>{" "}
            or dismissed.
          </p>
        </div>
      </div>
      <div className="max-w-2xl space-y-6 md:ml-auto">
        <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
          We live in performance culture. Vulnerability is either monetized or
          dismissed. You can post a breakdown on social media and get likes for
          it or you can sit alone with it and pretend everything is fine. There
          is no in-between.
        </p>
        <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
          Therapy helps, when you can get it. But therapy is expensive,
          time-bound, and designed for when things are already bad. There is no
          system for the everyday emotional weight that most people carry
          silently.
        </p>
        <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
          The mental health conversation has gotten louder. But having a
          conversation about feelings is not the same as having a space to feel
          them.
        </p>
      </div>
    </section>
  )
}
