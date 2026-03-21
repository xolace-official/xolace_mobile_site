import { Spotlight } from "@/components/ui/spotlight"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Spotlight effect */}
      <Spotlight
        duration={8}
        xOffset={80}
      />

      <div className="max-w-4xl text-center z-10 space-y-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight tracking-tight font-medium">
          Not everything needs fixing.{" "}
          <br />
          <span className="italic font-light opacity-90">
            Some things just need to be said.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto leading-relaxed">
          Xolace is a digital space for the moments between. Not a feed. Not a
          clinic. A quiet place to be human.
        </p>
      </div>

      {/* Abstract background shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-40">
        <div className="absolute w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full top-1/4 left-1/4" />
        <div className="absolute w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full bottom-1/4 right-1/4" />
      </div>
    </section>
  )
}
