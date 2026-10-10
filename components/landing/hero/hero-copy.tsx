"use client"

import { m as motion } from "motion/react"
import { cn } from "@/lib/utils"
import { DownloadButtons } from "@/components/shared/download-buttons"

const ease = [0.16, 1, 0.3, 1] as const

export function HeroCopy({ slot }: { slot: React.ReactNode }) {
  return (
    <div className="flex flex-col text-center lg:text-left">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease }}
        className="font-serif text-5xl leading-[1.1] font-semibold text-balance text-foreground md:text-6xl lg:text-[3.5rem]"
      >
        For the moments that don&apos;t have a name yet.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease }}
        className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0"
      >
        Say what you&apos;re feeling. Xolace helps you see what&apos;s
        underneath it, then finds support that fits the moment.
      </motion.p>
      {/* Between the subline and the store buttons on desktop, after the buttons on phones */}
      <div className="order-last lg:order-none">{slot}</div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.42, ease }}
        className="mt-10"
      >
        <DownloadButtons align="center" className="lg:justify-start" />
      </motion.div>
    </div>
  )
}

export function PlusNote({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs text-muted-foreground", className)}>
      Kindling is part of{" "}
      <span className="font-medium text-foreground">Xolace Plus</span> · one set
      a day
    </p>
  )
}
