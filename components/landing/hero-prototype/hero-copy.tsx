"use client"

// PROTOTYPE (ticket #23): headline block shared by the variants. Subline stays as-is until the positioning ticket settles it.
import { m as motion } from "motion/react"
import { cn } from "@/lib/utils"
import { DownloadButtons } from "@/components/shared/download-buttons"

type HeroCopyProps = {
  align: "start" | "center"
  // Rendered between the subline and the store buttons on desktop, after the buttons on phones
  slot?: React.ReactNode
  // Smaller desktop headline for variants that give the pipeline more width
  compact?: boolean
}

export function HeroCopy({ align, slot, compact }: HeroCopyProps) {
  const centered = align === "center"
  return (
    <div
      className={cn("flex flex-col text-center", !centered && "lg:text-left")}
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "font-serif text-5xl leading-[1.1] font-semibold text-balance text-foreground md:text-6xl",
          compact ? "lg:text-[3.5rem]" : "lg:text-[4.25rem]"
        )}
      >
        For the moments that don&apos;t have a name yet.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg",
          !centered && "lg:mx-0"
        )}
      >
        {`A quiet place to say what's true, even without the words for it.`}
      </motion.p>
      {slot && <div className="order-last lg:order-none">{slot}</div>}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10"
      >
        <DownloadButtons
          align="center"
          className={cn(!centered && "lg:justify-start")}
        />
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
