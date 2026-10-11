"use client"

import { m as motion } from "motion/react"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

const descriptions = [
  {
    key: "short",
    label: "Short description",
    sublabel: "~60 words",
    text: "Xolace is skincare for your mind. It helps people reflect on what they're feeling in the moment, understand what's underneath it and catch what's building up, before it has a name. Its AI, the Fire, writes a short reflection called a Mirror, and Kindling routes people to support the team built, from guided exercises to trained peer listeners. Free to download on iOS and Android.",
  },
  {
    key: "long",
    label: "Full description",
    sublabel: "~120 words",
    text: `Xolace is skincare for your mind. It helps people reflect on what they're feeling in the moment, so they get clarity on it, understand what's underneath it and catch what's compounding while it's still small, so that real support can work.

A person types or speaks what's going on, and the Fire, Xolace's AI, writes back a short reflection called a Mirror. When they could use support, Kindling routes them to tools the team built: Sit with this, Vessa audio, the Lantern library, Xolacers (trained volunteer peer listeners) and Trusted Bridge, which helps draft a message to someone in their life. Vent is a place to say it out loud. Xolace doesn't diagnose or treat, and it isn't a crisis service.

The mirror is free, and always will be; Xolace Plus adds Kindling and more. Available on iOS and Android. For press inquiries: press@xolaceinc.com`,
  },
]

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] text-muted-foreground/40 uppercase transition-colors duration-200 hover:text-foreground"
      aria-label={`Copy ${label}`}
    >
      {copied ? (
        <>
          <Check className="size-3 text-accent" />
          Copied
        </>
      ) : (
        <>
          <Copy className="size-3" />
          Copy text
        </>
      )}
    </button>
  )
}

export function PressBoilerplate() {
  return (
    <section className="section-spacing relative overflow-hidden bg-xo-surface-lowest">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-gentle-pulse absolute -top-20 -right-10 h-[550px] w-[550px] rounded-full bg-primary/[0.05] blur-[140px]" />
        <div className="animate-gentle-pulse absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-accent/[0.04] blur-[120px] [animation-delay:3s]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="mb-5 font-mono text-[11px] tracking-[0.24em] text-muted-foreground/30 uppercase">
            Boilerplate copy
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-serif text-5xl leading-[1.1] font-semibold text-foreground md:text-6xl lg:text-[4.25rem]">
              Ready-to-use copy.
            </h2>
            <p className="max-w-xs pb-1 text-sm font-light text-muted-foreground/40 sm:text-right">
              Use these directly. Email us first if you&apos;d like to describe
              Xolace differently.
            </p>
          </div>
        </motion.div>

        <div className="space-y-5">
          {descriptions.map(({ key, label, sublabel, text }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-6 rounded-2xl border border-border/20 bg-background/40 p-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-medium text-foreground/80">
                    {label}
                  </p>
                  <span className="rounded-full border border-border/30 px-2 py-0.5 font-mono text-[10px] tracking-[0.14em] text-muted-foreground/30 uppercase">
                    {sublabel}
                  </span>
                </div>
                <CopyButton text={text} label={label} />
              </div>

              <div className="h-px bg-border/20" />

              <p className="font-serif text-base leading-relaxed whitespace-pre-line text-foreground/70 md:text-lg">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
