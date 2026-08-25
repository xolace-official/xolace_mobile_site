"use client"

import Link from "next/link"
import Image from "next/image"
import { m as motion } from "motion/react"
import { Lock, EyeOff, UserX, Ban, FileText } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const WHITEPAPER_URL = "https://xolace-official.github.io/wp.pdf"

type Promise = {
  title: string
  description: string
  image: string
  Icon: LucideIcon
}

const promises: Promise[] = [
  {
    title: "Private by design",
    description:
      "Encrypted in transit and at rest. No human at Xolace reviews what you write.",
    image: "/trsut-section/01_private_by_design.svg",
    Icon: Lock,
  },
  {
    title: "Anonymous, always",
    description:
      "Your name is never attached to anything. You are not a profile.",
    image: "/trsut-section/02_anonymous_always.svg",
    Icon: EyeOff,
  },
  {
    title: "No followers, no feed",
    description: "There is nothing to perform here.",
    image: "/trsut-section/03_no_followers_no_feed.svg",
    Icon: UserX,
  },
  {
    title: "No ads, no data sold",
    description: "Ever. The trust is the product.",
    image: "/trsut-section/04_no_ads_no_data_sold.svg",
    Icon: Ban,
  },
]

function PromiseCard({ promise, index }: { promise: Promise; index: number }) {
  const { Icon } = promise
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className=""
    >
      <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-2xl">
        <Image
          src={promise.image}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div className="mb-1 flex items-center gap-1">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border/60 bg-background/60">
          <Icon className="size-[15px] text-foreground/70" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-semibold text-foreground">
          {promise.title}
        </h3>
      </div>
      <p className="leading-relaxed text-muted-foreground/70">
        {promise.description}
      </p>
    </motion.div>
  )
}

export function TrustSection() {
  return (
    <section className="relative section-spacing overflow-hidden bg-muted">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="mb-2 font-serif text-5xl leading-[1.1] font-semibold text-foreground md:text-6xl lg:text-[4.25rem]">
            When you&apos;re at your most honest,
            <br /> you deserve to feel safe.
          </h2>
          {/* Signature-style flourish — echoes the mark under the advisors heading */}
          <svg
            aria-hidden
            width="140"
            height="16"
            viewBox="0 0 140 16"
            fill="none"
            className="mb-6"
          >
            <path
              d="M2 10c10-8 20-8 28 0s18 8 28 0 18-8 28 0 18 8 28 0 14-6 24-2"
              stroke="url(#trust-signature-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="trust-signature-gradient"
                x1="0"
                y1="0"
                x2="140"
                y2="0"
              >
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--accent)" />
              </linearGradient>
            </defs>
          </svg>
          <p className="mb-8 leading-relaxed text-muted-foreground/70">
            We built Xolace for ourselves first — we know what it feels like to
            need a space that won&apos;t sell you out.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/privacy"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/85 sm:w-auto"
            >
              Our privacy promise
            </Link>
            <a
              href={WHITEPAPER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-accent/40 bg-accent/[0.08] px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent/60 hover:bg-accent/[0.14] sm:w-auto"
            >
              <FileText className="size-4 text-accent" strokeWidth={1.5} />
              Read the Xolace whitepaper
            </a>
          </div>
        </motion.div>

        {/* 2x2 grid reads more balanced for four items than 3+1 */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {promises.map((p, i) => (
            <PromiseCard key={p.title} promise={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
