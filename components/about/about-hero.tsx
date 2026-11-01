"use client"

import { ArrowRight, ArrowDown } from "lucide-react"
import { m as motion } from "motion/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function AboutHero() {
  const router = useRouter()

  return (
    <section className="section-spacing relative overflow-hidden bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-gentle-pulse absolute top-16 left-1/2 size-[32rem] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-[150px]" />
      </div>

      <div className="section-container relative z-10 text-center">
          <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm font-medium tracking-[0.18em] text-primary uppercase md:text-base"
          >
            About Xolace
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-[1.04] font-semibold text-balance md:text-7xl lg:text-[6.5rem]"
        >
          We built the room we couldn&apos;t find.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl"
        >
          Xolace exists for the space between feeling something and knowing
          what to do with it.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="rounded-full px-6"
            onClick={() => router.push("/manifesto")}
          >
            Read why we are building this <ArrowRight className="size-4" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-20 flex max-w-3xl origin-center items-center gap-5 border-t border-border/30 pt-5 text-left md:mt-28"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/40 uppercase">01 / Origin</span>
          <div className="h-px flex-1 bg-border/20" />
          <ArrowDown className="size-4 text-primary/60" />
        </motion.div>
      </div>
    </section>
  )
}
