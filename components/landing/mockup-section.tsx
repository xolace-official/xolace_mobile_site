"use client"

import { m as motion } from "motion/react"
import { Iphone } from "@/components/ui/iphone"

export function MockupSection() {
  return (
    <section className="section-spacing bg-xo-surface-lowest/30">
      <div className="section-container flex flex-col items-center justify-center gap-20 md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 space-y-8 text-left md:order-1 md:w-1/2"
        >
          <div className="space-y-4">
            <p className="text-3xl leading-tight font-light text-foreground italic md:text-4xl">
              A reflection of the unspoken.
            </p>
            <p className="max-w-sm text-lg leading-relaxed text-muted-foreground">
              A glimpse into the quiet dialogue between you and the Mirror. No
              judgments, just clarity.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 flex justify-center md:order-2 md:w-1/2"
        >
          <div className="w-[240px] md:w-[280px]">
            <Iphone>
              <MirrorScreen />
            </Iphone>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Stylised in-app Mirror conversation — not an actual screenshot
function MirrorScreen() {
  return (
    <div className="flex size-full flex-col gap-6 bg-background px-5 pt-16 pb-8">
      <div className="space-y-1.5">
        <p className="text-[9px] tracking-[0.18em] text-muted-foreground/40 uppercase">
          You said
        </p>
        <p className="font-serif text-sm leading-relaxed text-foreground/70 italic">
          &ldquo;I don&apos;t even know why I feel this way.&rdquo;
        </p>
      </div>

      <div className="flex-1 space-y-2 border-l-2 border-primary/25 pl-4">
        <p className="text-[9px] tracking-[0.18em] text-primary/50 uppercase">
          The Mirror
        </p>
        <p className="font-serif text-base leading-relaxed text-foreground/90 italic">
          &ldquo;Something&apos;s there but it doesn&apos;t have a shape yet.
          Like fog you&apos;re trying to walk through.&rdquo;
        </p>
      </div>

      {/* Pulse — represents the Mirror "breathing" */}
      <div className="mt-auto flex justify-center">
        <div className="relative flex items-center justify-center">
          <div className="animate-gentle-pulse absolute size-14 rounded-full bg-primary/5" />
          <div className="animate-gentle-pulse absolute size-8 rounded-full bg-primary/8 [animation-delay:0.5s]" />
          <div className="size-3 rounded-full bg-primary/20" />
        </div>
      </div>
    </div>
  )
}
