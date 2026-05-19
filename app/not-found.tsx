"use client"

import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

type Props = {
  reset: () => void
}

export default function Error({ reset }: Props) {
  const router = useRouter();

  return (
    <div className="relative mt-20 flex h-screen items-center justify-center overflow-hidden px-4">
      <span
        className="pointer-events-none absolute font-black text-destructive italic select-none"
        style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: "clamp(80px, 22vw, 260px)",
          opacity: 0.06,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        ERROR
      </span>

      <div
        className="pointer-events-none absolute h-125 w-125 rounded-full bg-destructive opacity-10 blur-[120px]"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center gap-6 rounded-3xl border border-destructive/20 bg-secondary/30 p-8 text-center backdrop-blur-sm">
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-destructive/30 bg-destructive/15"
          style={{ animation: "float 3s ease-in-out infinite" }}
        >
          <div style={{ animation: "spin 8s linear infinite" }}>
            <AlertTriangle
              size={32}
              className="text-destructive"
              strokeWidth={1.5}
            />
          </div>
        </div>

        <span className="rounded-full border border-destructive/25 bg-destructive/15 px-4 py-1.5 text-[10px] font-black tracking-[0.18em] text-destructive uppercase">
          Something went wrong
        </span>

        <h1
          className="text-5xl leading-[0.9] font-black text-primary uppercase italic md:text-7xl"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
          }}
        >
          Our <span className="text-destructive">bad.</span>
        </h1>

        <div className="h-0.5 w-10 rounded-full bg-destructive/40" />

        <p className="max-w-xs text-sm leading-relaxed text-secondary-foreground/50">
          An unexpected error occurred. Please try again or head back home.
        </p>

        <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Button
            onClick={reset}
            variant={"destructive"}
            className="w-full rounded-full px-10 py-4 text-[11px] font-black tracking-[0.14em] uppercase transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-85 sm:w-auto"
          >
            Try again
          </Button>
          <Button
            onClick={() => router.push("/")}
            variant={"outline"}
            className="w-full rounded-full px-10 py-4 text-[11px] font-black tracking-[0.14em] uppercase transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-85 sm:w-auto"
          >
            Back to home
          </Button>
        </div>
      </div>

      <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50%      { transform: translateY(-10px); }
                }
            `}</style>
    </div>
  )
}