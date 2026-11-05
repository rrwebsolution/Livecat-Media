import { brand } from "@/config/site"
import { MacButton, WindowsDownloadButton } from "./PlatformButtons"
import { Reveal } from "./Reveal"

export function CTA() {
  return (
    <section className="bg-brand">
      <Reveal className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Ready to take control of your presentation?
        </h2>
        <p className="mt-5 text-xl font-medium">{brand.tagline}</p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          {/* White on the blue band, because a blue button would disappear here */}
          <WindowsDownloadButton className="w-full bg-white text-brand-dark hover:bg-muted-foreground sm:w-auto" />
          <MacButton onSolidBlue label="macOS — Coming Soon" className="w-full sm:w-auto" />
        </div>
      </Reveal>
    </section>
  )
}
