"use client"

import { m as motion } from "motion/react"

export function FaqHero() {
  return (
    <section className="hero-pb relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 hidden h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-[120px] md:block" />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 font-serif text-4xl leading-[1.1] font-light text-foreground italic md:text-5xl lg:text-[4rem]"
        >
          Questions
          <br />
          worth asking.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-md text-base leading-relaxed font-light text-muted-foreground md:text-lg"
        >
          Honest answers. If something&apos;s still unclear, email{" "}
          <a
            href="mailto:hello@xolaceinc.com"
            className="text-foreground/80 underline underline-offset-4 transition-colors duration-200 hover:text-foreground"
          >
            hello@xolaceinc.com
          </a>
          . We actually respond.
        </motion.p>
      </div>
    </section>
  )
}
