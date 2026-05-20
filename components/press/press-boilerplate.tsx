"use client"

import { motion } from "motion/react"
import { Copy } from "lucide-react"
import { toast } from "sonner"

const descriptions = [
  {
    key: "short",
    label: "Short description",
    text: "Xolace is an emotional processing app for the moments that don't have a name yet - when something is sitting on your chest and you can't explain it, but you know it isn't fine. It offers three paths: Mirror (AI that reflects your emotion back with precision), Vent (ephemeral voice release - nothing stored), and Glimpses (short videos of real people describing a similar feeling). Free to download on iOS and Android.",
  },
  {
    key: "long",
    label: "Full description",
    text: `Xolace is emotional processing infrastructure - built for the gap between "everything is fine" and "I need therapy." Most people spend most of their emotional lives in that gap, and almost nothing has been built specifically for it.

The app offers three paths. Mirror uses AI to reflect the user's emotion back with more precision than they could find on their own - in 1 to 3 sentences that make them think: yes, that's exactly it. Vent is ephemeral voice release: an affirming presence listens without advising, and when the session ends, the recording is gone. Glimpses shows short videos of real people describing similar emotions - not advice, not diagnosis, just human recognition.

Xolace was founded in 2024 and is available free on iOS and Android. For press inquiries: press@xolaceinc.com`,
  },
]

function CopyButton({ text, label }: { text: string; label: string }) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    toast.success(`${label} copied to clipboard`)
  }
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.12em] text-muted-foreground/50 hover:text-foreground transition-colors duration-200"
    >
      <Copy className="size-3" />
      Copy text
    </button>
  )
}

export function PressBoilerplate() {
  return (
    <section className=" border-t border-border/10">
      <div className="section-container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="section-label mb-5">About Xolace</span>
          <h2 className="text-3xl md:text-4xl text-foreground font-light mb-3 leading-snug">
            Ready-to-use copy.
          </h2>
          <p className="font-serif text-muted-foreground leading-relaxed max-w-lg">
            Use these directly in your article. If you&apos;d like to describe Xolace differently, email us first so we can make sure it&apos;s accurate.
          </p>
        </motion.div>

        <div className="space-y-8">
          {descriptions.map(({ key, label, text }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-border/15 pt-8"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="section-label">{label}</span>
                <CopyButton text={text} label={label} />
              </div>
              <p className="font-serif text-base md:text-lg text-foreground/80 leading-relaxed whitespace-pre-line max-w-3xl">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
