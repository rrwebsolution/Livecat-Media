import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { MacButton, WindowsDownloadButton } from "@/components/PlatformButtons"
import { Reveal } from "@/components/Reveal"
import { brand } from "@/config/site"
import { container, whiteButton } from "./layout"
import { StudioDownload } from "./StudioDownload"
import { StudioFaq } from "./StudioFaq"
import { StudioFeatures } from "./StudioFeatures"
import { StudioHero } from "./StudioHero"
import { StudioRemote } from "./StudioRemote"
import { StudioWorkflow } from "./StudioWorkflow"
import "./studio.css"

export default function StudioSite() {
  return (
    <div className="studio">
      <Navbar square />
      <main>
        <StudioHero />
        <StudioFeatures />
        <StudioWorkflow />
        <StudioRemote />
        <StudioDownload />
        <StudioFaq />

        <section className="bg-brand">
          <Reveal className={`${container} py-16 lg:py-28`}>
            <h2 className="studio-display max-w-5xl text-[clamp(2.5rem,7vw,6.5rem)]">
              Ready to take control of your presentation?
            </h2>
            <p className="mt-6 text-xl font-medium">{brand.tagline}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <WindowsDownloadButton className={`w-full sm:w-auto ${whiteButton}`} />
              <MacButton onSolidBlue label="macOS — Coming Soon" className="w-full rounded-none sm:w-auto" />
            </div>
          </Reveal>
        </section>
      </main>
      <Footer wide />
    </div>
  )
}
