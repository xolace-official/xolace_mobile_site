import { PressHero } from "@/components/press/press-hero"
import { PressBoilerplate } from "@/components/press/press-boilerplate"
import { PressAssets } from "@/components/press/press-assets"
import { PressContact } from "@/components/press/press-contact"

export function PressPage() {
  return (
    <main className="pt-32 pb-28">
      <PressHero />
      <PressBoilerplate />
      <PressAssets />
      <PressContact />
    </main>
  )
}
