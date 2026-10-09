"use client"

// PROTOTYPE (ticket #23) variant E: no boxes. The person's words fall into the fire, the
// reflection rises out of it, then four embers lift off and become today's Kindlings.
import { m as motion } from "motion/react"
import { HeroCopy, PlusNote } from "./hero-copy"
import { scenarioFor } from "./scenarios"
import { SUPPORTS_STAGE, type PipelineState } from "./use-pipeline-loop"

const ease = [0.16, 1, 0.3, 1] as const
const FIRE = { left: "50%", top: "76%" }
// Zigzag so labels don't collide on a narrow phone
const EMBER_TARGETS = [
  { left: "14%", top: "60%" },
  { left: "38%", top: "47%" },
  { left: "62%", top: "60%" },
  { left: "86%", top: "47%" },
]

export function VariantEmber({ state }: { state: PipelineState }) {
  const { stage, pass, still } = state
  const scenario = scenarioFor(pass)
  const words = scenario.share.split(" ")
  const burning = stage >= 1

  return (
    <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:gap-12">
      <div className="flex-1">
        <HeroCopy align="start" />
      </div>

      <div aria-hidden className="relative h-[27rem] w-full max-w-md shrink-0">
        <p
          key={`share-${pass}`}
          className="absolute inset-x-0 top-[4%] text-center text-xl leading-snug text-muted-foreground italic md:text-2xl"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block whitespace-pre"
              initial={{ opacity: 0, y: -6 }}
              animate={
                burning
                  ? { opacity: 0, y: 240, scale: 0.5, filter: "blur(6px)" }
                  : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
              }
              transition={{
                duration: burning ? 1.1 : 0.6,
                delay: burning ? i * 0.04 : i * 0.05,
                ease: burning ? [0.5, 0, 0.9, 0.6] : ease,
              }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </p>

        <motion.p
          key={`mirror-${pass}`}
          className="absolute inset-x-2 top-[6%] text-center text-2xl leading-snug font-medium text-balance text-foreground md:text-[1.7rem]"
          initial={{ opacity: 0, y: 160 }}
          animate={burning ? { opacity: 1, y: 0 } : { opacity: 0, y: 160 }}
          transition={{
            duration: 1.4,
            delay: burning && !still ? 0.9 : 0,
            ease,
          }}
        >
          {scenario.mirror}
        </motion.p>

        <Whisper show={stage === 2 || stage === 3}>
          {stage === 3
            ? "Kindling is choosing four for today"
            : "Would some support help right now?"}
        </Whisper>

        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={FIRE}
        >
          <motion.div
            className="relative flex items-center justify-center"
            animate={{ opacity: burning ? 1 : 0.35, scale: burning ? 1 : 0.8 }}
            transition={{ duration: 1, ease }}
          >
            <motion.div
              className="absolute size-52 rounded-full bg-primary/25 blur-3xl"
              animate={still ? undefined : { scale: [1, 1.08, 0.96, 1] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="absolute size-20 rounded-full bg-primary/60 blur-xl" />
            <motion.div
              className="size-7 rounded-full bg-chart-5/90 blur-md"
              animate={still ? undefined : { scale: [1, 1.25, 0.9, 1.1, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        {scenario.picks.map(({ kindling }, i) => {
          const lifted = stage >= SUPPORTS_STAGE
          return (
            <motion.div
              key={`${pass}-${kindling.id}`}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
              initial={{ ...FIRE, opacity: 0 }}
              animate={
                lifted
                  ? { ...EMBER_TARGETS[i], opacity: 1 }
                  : { ...FIRE, opacity: 0 }
              }
              transition={{
                duration: 1.3,
                delay: lifted && !still ? i * 0.15 : 0,
                ease,
              }}
            >
              <span className="size-2 rounded-full bg-chart-5 shadow-[0_0_14px_4px_var(--chart-5)]" />
              <span className="text-sm whitespace-nowrap text-foreground">
                {kindling.name}
              </span>
            </motion.div>
          )
        })}

        <PlusNote className="absolute inset-x-0 bottom-0 text-center" />
      </div>
    </div>
  )
}

function Whisper({
  show,
  children,
}: {
  show: boolean
  children: React.ReactNode
}) {
  return (
    <motion.p
      className="absolute inset-x-0 top-[50%] text-center text-sm text-muted-foreground"
      initial={false}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.6, ease }}
    >
      {children}
    </motion.p>
  )
}
