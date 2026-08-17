"use client"

import { m as motion } from "motion/react"
import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"

// Stylised mirror-moment panel — not a screenshot, just a visual beat
function MirrorMomentCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-2xl border border-primary/15 bg-primary/[0.03] p-6 md:p-8"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/[0.08] blur-[60px]" />
      </div>

      <div className="relative z-10 space-y-5">
        <div className="space-y-1.5">
          <p className="text-[10px] tracking-[0.18em] text-muted-foreground/40 uppercase">
            You said
          </p>
          <p className="font-serif text-base leading-relaxed text-foreground/70 italic">
            &ldquo;I don&apos;t even know why I feel this way.&rdquo;
          </p>
        </div>

        <div className="space-y-1.5 border-l-2 border-primary/30 pl-5">
          <p className="text-[10px] tracking-[0.18em] text-primary/50 uppercase">
            The Mirror
          </p>
          <p className="font-serif text-lg leading-relaxed text-foreground/90 italic md:text-xl">
            &ldquo;Yes. That&apos;s it. That&apos;s what you couldn&apos;t
            say.&rdquo;
          </p>
        </div>

        <div className="flex justify-center pt-1">
          <div className="relative flex items-center justify-center">
            <div className="animate-gentle-pulse absolute size-10 rounded-full bg-primary/5" />
            <div className="size-2 rounded-full bg-primary/25" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Experience() {
  return (
    <section className="section-spacing bg-xo-surface-lowest">
      <div className="section-container-wide">
        <ScrollReveal>
          <h2 className="mb-6 font-serif text-5xl leading-[1.1] font-semibold text-foreground md:text-6xl lg:text-[4.25rem]">
            What Happens When You Open Xolace.
          </h2>
        </ScrollReveal>

        <div className="mt-16 max-w-2xl space-y-12">
          {/* Moment 1: The question */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
                There&apos;s no feed. No content to consume. No notifications
                pulling you somewhere.
              </p>
              <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
                There&apos;s one question:{" "}
                <strong className="text-xl text-foreground">
                  &ldquo;What&apos;s here right now?&rdquo;
                </strong>
              </p>
            </div>
          </ScrollReveal>

          {/* Moment 2: Typing + texture words */}
          <ScrollReveal delay={0.15}>
            <div className="space-y-4">
              <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
                You type whatever&apos;s true. It doesn&apos;t have to be
                eloquent. It doesn&apos;t have to make sense. If you
                can&apos;t find the words, you can tap what feels close{" "}
                <em className="font-serif tracking-wide text-primary/70 italic">
                  heavy
                </em>
                ,{" "}
                <em className="font-serif tracking-wide text-primary/70 italic">
                  tight
                </em>
                ,{" "}
                <em className="font-serif tracking-wide text-primary/70 italic">
                  foggy
                </em>
                ,{" "}
                <em className="font-serif tracking-wide text-primary/70 italic">
                  numb
                </em>
                ,{" "}
                <em className="font-serif tracking-wide text-primary/70 italic">
                  scattered
                </em>{" "}
                and that&apos;s enough.
              </p>
            </div>
          </ScrollReveal>

          {/* Moment 3: The AI mirrors */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
                Then the AI does something quiet. It doesn&apos;t respond
                like a chatbot. It doesn&apos;t give you advice. It
                doesn&apos;t tell you what you&apos;re feeling. It mirrors.
                It takes the messy, tangled thing you just poured out and
                reflects it back with precision in one or two sentences
                that make you stop and think:
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.22}>
            <MirrorMomentCard />
          </ScrollReveal>

          {/* Moment 4: Articulation as the core */}
          <ScrollReveal delay={0.25}>
            <div className="space-y-4">
              <p className="font-serif text-base leading-loose text-muted-foreground md:text-lg">
                That moment, the moment you see your own feeling named
                clearly for the first time, is the core of what we built.
                It turns out that articulation itself is a kind of exhale.
                Getting the shape of the thing outside of you, even just
                onto a screen, changes your relationship to it. It&apos;s
                no longer a shapeless weight. It&apos;s something with
                edges. Something you can look at.
              </p>
            </div>
          </ScrollReveal>

          {/* Moment 5: Transition */}
          <ScrollReveal delay={0.3}>
            <p className="font-serif text-lg leading-relaxed text-foreground md:text-xl">
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
