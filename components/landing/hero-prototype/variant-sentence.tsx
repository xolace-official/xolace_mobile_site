"use client"

// PROTOTYPE (ticket #23) variant G: type is the diagram. The pipeline replaces the subline as one
// sentence that fills in clause by clause; unlit clauses stay faintly readable so the shape is visible.
import { m as motion } from "motion/react"
import { DownloadButtons } from "@/components/shared/download-buttons"
import { PlusNote } from "./hero-copy"
import { scenarioFor } from "./scenarios"
import { SUPPORTS_STAGE, type PipelineState } from "./use-pipeline-loop"

const ease = [0.16, 1, 0.3, 1] as const

export function VariantSentence({ state }: { state: PipelineState }) {
  const { stage, pass, still } = state
  const scenario = scenarioFor(pass)
  const names = scenario.picks.map((p) => p.kindling)

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease }}
        className="font-serif text-5xl leading-[1.1] font-semibold text-balance text-foreground md:text-6xl lg:text-[4.25rem]"
      >
        For the moments that don&apos;t have a name yet.
      </motion.h1>

      <motion.p
        key={pass}
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease }}
        className="mt-10 max-w-2xl text-left text-xl leading-[1.5] text-muted-foreground md:text-2xl"
      >
        <Clause on={stage >= 0}>
          You said{" "}
          <span className="text-foreground italic">
            &ldquo;{scenario.share}&rdquo;
          </span>
        </Clause>{" "}
        <Clause on={stage >= 1}>
          The Fire reflected it back:{" "}
          <span className="font-medium text-foreground">{scenario.mirror}</span>
        </Clause>{" "}
        <Clause on={stage >= 2}>Some support might help, so</Clause>{" "}
        <Clause on={stage >= 3}>Kindling lit four things for today:</Clause>{" "}
        {names.map((k, i) => (
          <motion.span
            key={k.id}
            className="font-medium text-foreground"
            initial={false}
            animate={{ opacity: stage >= SUPPORTS_STAGE ? 1 : 0.18 }}
            transition={{
              duration: 0.5,
              delay: stage >= SUPPORTS_STAGE && !still ? i * 0.15 : 0,
            }}
          >
            {/* Teal text fails contrast on the light theme, so the teal sits behind it */}
            <span className="rounded-sm bg-accent/20 box-decoration-clone px-0.5">
              {k.name}
            </span>
            {i < names.length - 2
              ? ", "
              : i === names.length - 2
                ? " and "
                : "."}
          </motion.span>
        ))}
      </motion.p>

      <PlusNote className="mt-5 max-w-2xl self-center text-left md:self-auto" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.42, ease }}
        className="mt-10"
      >
        <DownloadButtons align="center" />
      </motion.div>
    </div>
  )
}

function Clause({ on, children }: { on: boolean; children: React.ReactNode }) {
  return (
    <motion.span
      initial={false}
      animate={{ opacity: on ? 1 : 0.18 }}
      transition={{ duration: 0.7, ease }}
    >
      {children}
    </motion.span>
  )
}
