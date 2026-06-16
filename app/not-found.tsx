"use client"

import Image from "next/image"
import Link from "next/link"
import { m as motion } from "motion/react"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-gentle-pulse absolute top-1/2 left-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.07] blur-[160px]" />
        <div className="animate-gentle-pulse absolute top-1/4 right-1/4 h-87.5 w-87.5 rounded-full bg-accent/4 blur-[110px] [animation-delay:3s]" />
      </div>

      {/* Ghost backdrop — all caps, bleeds outside page */}
      <span
        aria-hidden
        className="pointer-events-none absolute font-serif text-foreground/15 italic select-none"
        style={{
          fontSize: "clamp(48px, 12vw, 170px)",
          opacity: 0.18,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          lineHeight: 1,
          whiteSpace: "nowrap",
          letterSpacing: "-0.02em",
        }}
      >
        NOT FOUND
      </span>

      {/* Mascot + circle floating as one unit */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="not-found-float relative z-10 flex flex-col items-center"
      >
        {/* Mascot sits on top edge of circle */}
        <div className="relative z-20 -mb-14">
          <Image
            src="/flux-images/ChatGPT_Image_Oct_20__2025__10_36_52_PM-removebg-preview.png"
            alt=""
            width={280}
            height={280}
            className="h-auto w-36 object-contain drop-shadow-2xl md:w-44"
            priority
            aria-hidden
          />
        </div>

        {/* Circle card */}
        <div className="relative flex size-85 flex-col items-center justify-center rounded-full border-2 border-foreground/1 bg-xo-surface-bright/60 px-12 pt-12 pb-8 text-center md:size-100">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-8 left-1/2 hidden h-48 w-48 -translate-x-1/2 rounded-full bg-primary/6 blur-[50px] md:block" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-4">
            <p className="font-mono text-[10px] tracking-[0.28em] text-muted-foreground/30 uppercase">
              Not found
            </p>

            <h1 className="font-serif text-2xl leading-[1.15] font-light text-foreground italic md:text-3xl">
              Lost in
              <br />
              the quiet.
            </h1>

            <div className="h-px w-6 bg-border/30" />

            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-6 py-2.5 text-xs font-light text-foreground/80 transition-all duration-300 hover:border-primary/50 hover:bg-primary/15 hover:text-foreground"
            >
              <ArrowLeft
                className="size-3 transition-transform duration-300 group-hover:-translate-x-1"
                strokeWidth={1.5}
              />
              Back home
            </Link>
          </div>
        </div>
      </motion.div>

      <style>{`
        .not-found-float {
          animation: notFoundFloat 4s ease-in-out infinite;
        }
        @keyframes notFoundFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
      `}</style>
    </div>
  )
}
