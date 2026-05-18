import { FadeIn } from "@/components/shared/fade-in"
import { Iphone } from "@/components/ui/iphone"

type Layer = {
  heading: string
  body: string
  // null = no matching asset yet — render placeholder
  imageSrc: string | null
  imageAlt: string
}

const layers: Layer[] = [
  {
    heading: "The Mirror",
    body: "You say what's here. The Mirror reflects it back — not advice, not a fix, just the words for what you couldn't say. Sometimes that's the whole session.",
    imageSrc: "/app-images/see-it-clearly.jpeg",
    imageAlt: "Xolace Mirror screen, showing a reflection on the user's feeling",
  },
  {
    heading: "The Echo",
    body: "After a session, you can see one anonymous reflection from someone else who felt something with the same shape. Not a feed. Not a forum. Just proof that you're not the only one carrying this tonight.",
    imageSrc: "/app-images/choose-whats-next.jpeg",
    imageAlt: "Xolace Echo screen, showing anonymous reflections from other users",
  },
  {
    heading: "The Timeline",
    body: "Your own past sessions, private, searchable by feeling. So that months from now, when something familiar returns, past-you is a resource for present-you.",
    imageSrc: null,
    imageAlt: "Xolace Timeline screen, showing a private record of past sessions",
  },
]

function ScreenPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ minHeight: "600px" }}
    >
      <p className="text-sm text-muted-foreground/40 italic font-light">{label}</p>
    </div>
  )
}

export function ThreeLayers() {
  return (
    <FadeIn className="py-20 md:py-32 px-6">
      <div className="max-w-[680px] mx-auto">
        <h2 className="font-serif font-normal text-[1.625rem] md:text-[2.25rem] text-foreground leading-[1.25]">
          Three things, each its own quiet moment.
        </h2>

        {layers.map((layer, i) => (
          <div key={layer.heading}>
            {/* Hairline divider between layers, 1px at 40% muted opacity */}
            <hr className="my-16 md:my-20 border-none h-px bg-muted-foreground/20" />

            <div className="space-y-6">
              <h3 className="font-serif font-normal text-xl md:text-2xl text-foreground leading-[1.3]">
                {layer.heading}
              </h3>
              <p className="text-[1.0625rem] md:text-[1.1875rem] text-foreground font-light leading-[1.65]">
                {layer.body}
              </p>
              <div className="flex justify-center pt-4">
                <div className="w-[260px] md:w-[300px]">
                  {layer.imageSrc ? (
                    <Iphone src={layer.imageSrc} />
                  ) : (
                    // Placeholder when no screenshot is available yet
                    <div className="relative border border-muted-foreground/20 rounded-3xl overflow-hidden aspect-[9/19]">
                      <ScreenPlaceholder label={layer.heading} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </FadeIn>
  )
}
