"use client"

// PROTOTYPE tooling: floating variant switcher. Never renders in production builds.
import { useCallback, useEffect } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function useSetSearchParam() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  return useCallback(
    (key: string, value: string | null) => {
      const next = new URLSearchParams(params)
      if (value === null) next.delete(key)
      else next.set(key, value)
      router.replace(`${pathname}?${next}`, { scroll: false })
    },
    [params, pathname, router]
  )
}

type PrototypeSwitcherProps = {
  param: string
  variants: { key: string; name: string }[]
  current: string
  // turn off when two switchers share a page, so ← → drive only one
  arrowKeys?: boolean
  className?: string
  children?: React.ReactNode
}

export function PrototypeSwitcher({
  param,
  variants,
  current,
  arrowKeys = true,
  className,
  children,
}: PrototypeSwitcherProps) {
  const setParam = useSetSearchParam()
  const index = Math.max(
    0,
    variants.findIndex((v) => v.key === current)
  )

  const cycle = useCallback(
    (dir: 1 | -1) => {
      const next = variants[(index + dir + variants.length) % variants.length]
      setParam(param, next.key)
    },
    [index, param, setParam, variants]
  )

  useEffect(() => {
    if (!arrowKeys) return
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null
      if (el?.closest("input, textarea, [contenteditable]")) return
      if (e.key === "ArrowLeft") cycle(-1)
      if (e.key === "ArrowRight") cycle(1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [arrowKeys, cycle])

  if (process.env.NODE_ENV === "production") return null

  const v = variants[index]
  return (
    <div
      className={cn(
        "fixed top-2 left-1/2 z-100 flex max-w-[calc(100vw-2rem)] -translate-x-1/2 flex-col items-center gap-1.5 rounded-2xl bg-foreground px-3 py-2 font-sans text-background shadow-2xl md:top-auto md:bottom-6",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => cycle(-1)}
          aria-label="Previous variant"
          className="rounded-full p-1 hover:bg-background/15"
        >
          <ChevronLeft className="size-4" />
        </button>
        <span className="min-w-40 text-center text-sm font-medium">
          {v.key} ({v.name})
        </span>
        <button
          type="button"
          onClick={() => cycle(1)}
          aria-label="Next variant"
          className="rounded-full p-1 hover:bg-background/15"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
      {children}
    </div>
  )
}
