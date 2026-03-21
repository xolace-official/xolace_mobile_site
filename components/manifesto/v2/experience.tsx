"use client"

import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"

export function Experience() {
  return (
    <section className="bg-xo-surface-lowest py-32 md:py-48 mb-32 md:mb-52">
      <div className="asymmetric-layout">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl text-foreground mb-6 font-light">
            What Happens When You Open Xolace.
          </h2>
        </ScrollReveal>

        <div className="max-w-2xl space-y-12 mt-16">
          {/* Moment 1: The question */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
                There&apos;s no feed. No content to consume. No notifications
                pulling you somewhere.
              </p>
              <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
                There&apos;s one question:{" "}
                <strong className="text-foreground text-xl">
                  &ldquo;What&apos;s here right now?&rdquo;
                </strong>
              </p>
            </div>
          </ScrollReveal>

          {/* Moment 2: Typing + texture words */}
          <ScrollReveal delay={0.15}>
            <div className="space-y-4">
              <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
                You type whatever&apos;s true. It doesn&apos;t have to be
                eloquent. It doesn&apos;t have to make sense. If you can&apos;t
                find the words, you can tap what feels close &mdash;{" "}
                <em className="font-serif italic text-primary/70 tracking-wide">
                  heavy
                </em>
                ,{" "}
                <em className="font-serif italic text-primary/70 tracking-wide">
                  tight
                </em>
                ,{" "}
                <em className="font-serif italic text-primary/70 tracking-wide">
                  foggy
                </em>
                ,{" "}
                <em className="font-serif italic text-primary/70 tracking-wide">
                  numb
                </em>
                ,{" "}
                <em className="font-serif italic text-primary/70 tracking-wide">
                  scattered
                </em>{" "}
                &mdash; and that&apos;s enough.
              </p>
            </div>
          </ScrollReveal>

          {/* Moment 3: The AI mirrors */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
                Then the AI does something quiet. It doesn&apos;t respond like a
                chatbot. It doesn&apos;t give you advice. It doesn&apos;t tell
                you what you&apos;re feeling. It mirrors. It takes the messy,
                tangled thing you just poured out and reflects it back with
                precision &mdash; in one or two sentences that make you stop and
                think:
              </p>
              <div className="border-l-2 border-primary/30 pl-6 py-2">
                <p className="font-serif italic text-lg md:text-xl text-foreground/80 leading-relaxed">
                  yes. That&apos;s it. That&apos;s what I couldn&apos;t say.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Moment 4: Articulation as the core */}
          <ScrollReveal delay={0.25}>
            <div className="space-y-4">
              <p className="font-serif text-base md:text-lg text-muted-foreground leading-loose">
                That moment &mdash; the moment you see your own feeling named
                clearly for the first time &mdash; is the core of what we built.
                It turns out that articulation itself is a kind of exhale.
                Getting the shape of the thing outside of you, even just onto a
                screen, changes your relationship to it. It&apos;s no longer a
                shapeless weight. It&apos;s something with edges. Something you
                can look at.
              </p>
            </div>
          </ScrollReveal>

          {/* Moment 5: Transition */}
          <ScrollReveal delay={0.3}>
            <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed">
              But here&apos;s what matters:{" "}
              <strong className="text-foreground">
                that&apos;s not where it ends.
              </strong>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
