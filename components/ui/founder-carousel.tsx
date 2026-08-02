"use client"

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  useCallback,
} from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatePresence, m as motion } from "motion/react"
import { useOutsideClick } from "@/hooks/use-outside-click"

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type Founder = {
  name: string
  role: string
  initials: string
  bio: string
  quote?: string
  gradient: string // tailwind gradient classes for the placeholder bg
  image?: string // path to founder photo
  expertise?: string // short domain tag, e.g. "Clinical Psychology" — renders as a pill
  linkedin?: string
  website?: string
  x?: string
}

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

const CarouselCtx = createContext<{
  onCardClose: (index: number) => void
  currentIndex: number
}>({
  onCardClose: () => {},
  currentIndex: 0,
})

/* ------------------------------------------------------------------ */
/*  Carousel                                                           */
/* ------------------------------------------------------------------ */

export function FounderCarousel({
  founders,
  initialScroll = 0,
}: {
  founders: Founder[]
  initialScroll?: number
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const checkScrollability = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = initialScroll
      checkScrollability()
    }
  }, [initialScroll, checkScrollability])

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = direction === "left" ? -340 : 340
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" })
  }

  const handleCardClose = (index: number) => {
    if (scrollRef.current) {
      const cardWidth =
        typeof window !== "undefined" && window.innerWidth < 768 ? 260 : 320
      const gap = 24
      scrollRef.current.scrollTo({
        left: (cardWidth + gap) * index,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  return (
    <CarouselCtx.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative mx-auto w-full max-w-screen-2xl">
        {/* Scroll track */}
        <div
          ref={scrollRef}
          onScroll={checkScrollability}
          className="flex w-full overflow-x-auto scroll-smooth py-6 [-ms-overflow-style:none] [scrollbar-width:none] md:py-10 [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex gap-6 pr-[clamp(2rem,15vw,12rem)] pl-[clamp(2rem,10vw,8rem)]">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.15 * i,
                    ease: "easeOut",
                  },
                }}
                className="shrink-0"
              >
                <FounderCard founder={founder} index={i} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="mt-2 flex gap-3 pl-[clamp(2rem,10vw,8rem)]">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="flex size-10 items-center justify-center rounded-full bg-xo-surface-bright/80 ring-1 ring-xo-outline-variant/15 transition-all duration-300 hover:bg-xo-surface-bright disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Scroll left"
          >
            <ArrowLeft className="size-4 text-foreground/70" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="flex size-10 items-center justify-center rounded-full bg-xo-surface-bright/80 ring-1 ring-xo-outline-variant/15 transition-all duration-300 hover:bg-xo-surface-bright disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Scroll right"
          >
            <ArrowRight className="size-4 text-foreground/70" />
          </button>
        </div>
      </div>
    </CarouselCtx.Provider>
  )
}

/* ------------------------------------------------------------------ */
/*  Card                                                               */
/* ------------------------------------------------------------------ */

function FounderCard({ founder, index }: { founder: Founder; index: number }) {
  const [open, setOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const { onCardClose } = useContext(CarouselCtx)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [open])

  const handleClose = useCallback(() => {
    setOpen(false)
    onCardClose(index)
  }, [onCardClose, index])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose()
    }
    if (open) window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open, handleClose])

  useOutsideClick(modalRef, handleClose)

  return (
    <>
      {/* Expanded modal */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/85 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              ref={modalRef}
              className="relative z-[60] mx-auto my-10 max-w-2xl rounded-2xl bg-xo-surface-low p-6 ring-1 ring-xo-outline-variant/10 md:p-10"
            >
              {/* Close */}
              <button
                onClick={handleClose}
                aria-label="Close"
                className="sticky top-4 float-right flex size-8 items-center justify-center rounded-full bg-xo-surface-bright/80 transition-colors hover:bg-muted"
              >
                <X className="size-4 text-foreground/70" />
              </button>

              {/* Avatar large */}
              <div
                className={cn(
                  "mb-8 flex size-36 items-center justify-center overflow-hidden rounded-2xl md:size-44",
                  founder.gradient
                )}
              >
                {founder.image ? (
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={176}
                    height={176}
                    className="size-full object-cover"
                  />
                ) : (
                  <span className="text-6xl font-light text-foreground/20 md:text-7xl">
                    {founder.initials}
                  </span>
                )}
              </div>

              {founder.expertise && (
                <span className="mb-4 inline-block rounded-full border border-accent/40 px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-accent uppercase dark:border-accent/25 dark:text-accent/70">
                  {founder.expertise}
                </span>
              )}
              <p className="mb-2 text-xs tracking-[0.25em] text-muted-foreground uppercase">
                {founder.role}
              </p>
              <h3 className="mb-6 text-3xl font-light text-foreground md:text-4xl">
                {founder.name}
              </h3>

              <p className="mb-8 font-serif text-base leading-relaxed text-muted-foreground md:text-lg">
                {founder.bio}
              </p>

              {founder.quote && (
                <blockquote className="border-l-2 border-primary/30 py-2 pl-6">
                  <p className="font-serif leading-relaxed text-muted-foreground/80 italic">
                    &ldquo;{founder.quote}&rdquo;
                  </p>
                </blockquote>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Card */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={cn(
          "group relative flex h-[22rem] w-[15rem] flex-col justify-end overflow-hidden rounded-2xl text-left md:h-[28rem] md:w-[20rem]",
          "ring-1 ring-xo-outline-variant/10 transition-shadow duration-500",
          "hover:shadow-[0_0_40px_var(--primary)/0.08] hover:ring-primary/20"
        )}
      >
        {/* Background — photo or gradient with initials */}
        {founder.image ? (
          <Image
            src={founder.image}
            alt={founder.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <>
            <div
              className={cn(
                "absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105",
                founder.gradient
              )}
            />
            <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] font-light text-foreground/[0.04] select-none md:text-[10rem]">
              {founder.initials}
            </span>
          </>
        )}

        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />

        {/* Content overlay */}
        <div className="relative z-10 p-6 md:p-8">
          {founder.expertise && (
            <span className="mb-2.5 inline-block rounded-full border border-accent/40 bg-background/40 px-2 py-0.5 font-mono text-[9px] tracking-[0.14em] text-accent uppercase backdrop-blur-sm dark:border-accent/25 dark:text-accent/70">
              {founder.expertise}
            </span>
          )}
          <p className="mb-1.5 text-[10px] tracking-[0.25em] text-primary/70 uppercase">
            {founder.role}
          </p>
          <h4 className="mb-3 text-xl font-light text-foreground md:text-2xl">
            {founder.name}
          </h4>
          <p className="line-clamp-2 font-serif text-sm leading-relaxed text-muted-foreground italic">
            {founder.bio}
          </p>
        </div>
      </motion.button>
    </>
  )
}
