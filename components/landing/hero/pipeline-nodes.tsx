"use client"

import { useEffect, useState, type RefObject } from "react"
import { m as motion } from "motion/react"
import Image from "next/image"
import { User } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Kindling } from "@/lib/kindlings"
import { INK, inkVar } from "./ink"

const ease = [0.16, 1, 0.3, 1] as const

type NodeRef = RefObject<HTMLDivElement | null>

export function ShareLine({
  ref,
  text,
  still,
}: {
  ref: NodeRef
  text: string
  still: boolean
}) {
  const [typed, setTyped] = useState(0)
  // still can turn true after hydration, so derive rather than seed the state from it
  const shown = still ? text.length : typed
  useEffect(() => {
    if (still) return
    const id = setInterval(() => {
      setTyped((n) => {
        if (n >= text.length) clearInterval(id)
        return Math.min(text.length, n + 2)
      })
    }, 28)
    return () => clearInterval(id)
  }, [still, text])
  const typing = shown < text.length

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.35, ease }}
      className="mx-auto mt-10 w-full max-w-md lg:mx-0 lg:mt-9"
    >
      <div
        ref={ref}
        className="flex items-start gap-3 rounded-2xl border border-xo-outline-variant/70 bg-xo-surface-low/70 px-4 py-3 text-left backdrop-blur-sm"
      >
        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-xo-surface-bright text-muted-foreground">
          <User className="size-3.5" />
        </span>
        <p className="min-h-[2.75rem] text-sm leading-relaxed text-foreground lg:min-h-0">
          {text.slice(0, shown)}
          {typing && (
            <span className="ml-px inline-block h-[1.05em] w-px translate-y-[0.15em] animate-pulse bg-primary" />
          )}
        </p>
      </div>
    </motion.div>
  )
}

export function FireNode({
  ref,
  lit,
  mirror,
  pass,
}: {
  ref: NodeRef
  lit: boolean
  mirror: string
  pass: number
}) {
  return (
    // The ref wraps orb and caption so on phones the outgoing beam leaves below the caption
    <div ref={ref} className="relative flex flex-col items-center">
      {/* Bleeds back under the headline so both columns sit in the same light */}
      <motion.div
        initial={false}
        animate={{ opacity: lit ? 1 : 0.35, scale: lit ? 1 : 0.85 }}
        transition={{ duration: 1.4, ease }}
        className="pointer-events-none absolute top-10 left-1/2 -z-10 size-[30rem] -translate-1/2 rounded-full bg-primary/12 blur-[110px]"
      />
      <div className="relative size-24 lg:size-28">
        {/* Lights up as the beam arrives */}
        <motion.div
          initial={false}
          animate={{ opacity: lit ? 1 : 0, scale: lit ? 1.15 : 0.9 }}
          transition={{ duration: 0.9, ease }}
          className="animate-gentle-pulse absolute inset-0 rounded-full bg-primary/40 blur-xl"
        />
        <div
          className={cn(
            "relative size-full overflow-hidden rounded-full border-2 transition-colors duration-700",
            lit ? "border-primary/70" : "border-xo-outline-variant"
          )}
        >
          <Image
            src="/hero/the-fire.jpeg"
            alt=""
            fill
            priority
            sizes="112px"
            className={cn(
              "object-cover transition-[filter,opacity] duration-700",
              lit ? "opacity-100" : "opacity-60 saturate-50"
            )}
          />
        </div>
      </div>
      <p className="mt-3 text-xs font-medium text-foreground">The Fire</p>
      <motion.p
        key={pass}
        initial={{ opacity: 0 }}
        animate={{ opacity: lit ? 1 : 0 }}
        transition={{ duration: 0.9, delay: lit ? 0.5 : 0, ease }}
        className="mt-2 min-h-[3.75rem] max-w-[14rem] text-center text-[13px] leading-snug text-balance text-muted-foreground italic lg:absolute lg:top-full lg:mt-2 lg:w-[11.5rem]"
      >
        {mirror}
      </motion.p>
    </div>
  )
}

export function ForkNode({
  ref,
  noRef,
  lit,
}: {
  ref: NodeRef
  noRef: NodeRef
  lit: boolean
}) {
  return (
    <div ref={ref} className="relative">
      <motion.div
        initial={false}
        animate={{ opacity: lit ? 1 : 0.4 }}
        transition={{ duration: 0.7, ease }}
        className={cn(
          "size-5 rotate-45 rounded-[5px] border transition-colors duration-700",
          lit
            ? "border-primary bg-primary/20"
            : "border-xo-outline-variant bg-xo-surface-low"
        )}
      />
      <p className="absolute top-1/2 left-full ml-4 w-max -translate-y-1/2 text-xs text-muted-foreground lg:top-auto lg:bottom-full lg:left-1/2 lg:mb-4 lg:ml-0 lg:translate-x-[-50%] lg:translate-y-0">
        Need support right now?
      </p>
      <div
        ref={noRef}
        className="absolute top-1/2 right-full mr-16 w-max -translate-y-1/2 text-xs text-muted-foreground/70 lg:top-full lg:right-auto lg:left-1/2 lg:mt-20 lg:mr-0 lg:-translate-x-1/2 lg:translate-y-0"
      >
        If not, you keep talking
      </div>
    </div>
  )
}

export function KindlingNode({ ref, lit }: { ref: NodeRef; lit: boolean }) {
  return (
    <div ref={ref} className="relative" style={inkVar("var(--accent)")}>
      <div className="relative size-18 lg:size-20">
        <motion.div
          initial={false}
          animate={{ opacity: lit ? 1 : 0, scale: lit ? 1.15 : 0.9 }}
          transition={{ duration: 0.9, ease }}
          className="animate-gentle-pulse absolute inset-0 rounded-full bg-accent/35 blur-xl"
        />
        <div
          className={cn(
            "relative size-full overflow-hidden rounded-full border-2 transition-colors duration-700",
            lit ? INK.border : "border-xo-outline-variant"
          )}
        >
          <Image
            src="/hero/kindling.jpeg"
            alt=""
            fill
            priority
            sizes="80px"
            className={cn(
              "object-cover transition-[filter,opacity] duration-700",
              lit ? "opacity-100" : "opacity-60 saturate-50"
            )}
          />
        </div>
      </div>
      <div className="absolute top-1/2 left-full ml-4 w-max -translate-y-1/2 text-left lg:top-full lg:left-1/2 lg:mt-3 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0 lg:text-center">
        <p className="text-xs font-medium text-foreground">
          Kindling{" "}
          <span
            className={cn(
              "ml-1 rounded-full border px-1.5 py-px text-[10px] font-medium",
              INK.border,
              INK.bg,
              INK.label
            )}
          >
            Plus
          </span>
        </p>
        <p className="mt-1 text-[11px] text-muted-foreground">3–4 for today</p>
      </div>
    </div>
  )
}

export function KindlingChip({
  ref,
  kindling,
  lit,
  delay,
}: {
  ref: NodeRef
  kindling: Kindling
  lit: boolean
  delay: number
}) {
  const Icon = kindling.icon
  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{ opacity: lit ? 1 : 0.45 }}
      transition={{ duration: 0.7, delay: lit ? delay : 0, ease }}
      style={inkVar(kindling.color)}
      className={cn(
        "flex flex-col items-center gap-1.5 lg:flex-row lg:gap-3 lg:rounded-full lg:border lg:bg-xo-surface-low/60 lg:py-1.5 lg:pr-5 lg:pl-1.5",
        // Border colour is harmless below lg, where the chip has no border width
        lit ? INK.border : "border-xo-outline-variant/60"
      )}
    >
      <span
        className={cn(
          "flex size-9 items-center justify-center rounded-full lg:size-9",
          INK.bg
        )}
      >
        <Icon className={cn("size-4", INK.text)} />
      </span>
      <span className="text-center text-[10px] leading-tight text-foreground lg:text-left lg:text-[15px]">
        {kindling.name}
      </span>
    </motion.div>
  )
}
