export function MockupSection() {
  return (
    <section className="py-40 px-8 bg-xo-surface-lowest/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-20">
        <div className="md:w-1/2 text-left space-y-8 order-2 md:order-1">
          <div className="space-y-4">
            <p className="text-3xl md:text-4xl text-foreground leading-tight italic font-light">
              A reflection of the unspoken.
            </p>
            <p className="text-lg text-muted-foreground max-w-sm leading-relaxed">
              A glimpse into the quiet dialogue between you and the Mirror. No
              judgments, just clarity.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center order-1 md:order-2">
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="relative w-[300px] h-[600px] phone-mockup rounded-[3rem] bg-background p-3 border-[6px] border-xo-surface-bright">
      <div className="screen-content-gradient w-full h-full rounded-[2.2rem] overflow-hidden p-8 flex flex-col justify-center space-y-12 relative">
        {/* Dynamic Island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-full" />

        <div className="space-y-10">
          <div className="space-y-3">
            <p className="text-[10px] tracking-[0.05rem] text-muted-foreground/50 uppercase">
              User
            </p>
            <p className="text-base text-foreground/90 italic leading-relaxed">
              &ldquo;I don&apos;t even know why I feel this way.&rdquo;
            </p>
          </div>
          <div className="space-y-4 border-l-2 border-primary/30 pl-6">
            <p className="text-[10px] tracking-[0.05rem] text-primary/60 uppercase">
              The Mirror
            </p>
            <p className="text-xl text-foreground font-light italic leading-relaxed">
              &ldquo;Something&apos;s there but it doesn&apos;t have a shape
              yet. Like fog you&apos;re trying to walk through.&rdquo;
            </p>
          </div>
        </div>

        {/* Decorative glow */}
        <div className="absolute bottom-[-50px] left-[-20px] w-48 h-48 bg-primary/5 blur-[40px] rounded-full pointer-events-none" />
      </div>
    </div>
  )
}
