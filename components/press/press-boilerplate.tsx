"use client"

import { m as motion } from "motion/react"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

const descriptions = [
  {
    key: "short",
    label: "Short description",
    sublabel: "~60 words",
    text: "Xolace is an emotional processing app for the moments that don't have a name yet - when something is sitting on your chest and you can't explain it, but you know it isn't fine. It offers three paths: Mirror (AI that reflects your emotion back with precision), Vent (ephemeral voice release - nothing stored), and Glimpses (short videos of real people describing a similar feeling). Free to download on iOS and Android.",
  },
  {
    key: "long",
    label: "Full description",
    sublabel: "~120 words",
    text: `Xolace is emotional processing infrastructure - built for the gap between "everything is fine" and "I need therapy." Most people spend most of their emotional lives in that gap, and almost nothing has been built specifically for it.

The app offers three paths. Mirror uses AI to reflect the user's emotion back with more precision than they could find on their own - in 1 to 3 sentences that make them think: yes, that's exactly it. Vent is ephemeral voice release: an affirming presence listens without advising, and when the session ends, the recording is gone. Glimpses shows short videos of real people describing similar emotions - not advice, not diagnosis, just human recognition.

Xolace was founded in 2024 and is available free on iOS and Android. For press inquiries: press@xolaceinc.com`,
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
