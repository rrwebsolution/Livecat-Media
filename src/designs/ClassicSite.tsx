import { Download } from "@/components/Download"
import { FAQ } from "@/components/FAQ"
import { Features } from "@/components/Features"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { HowItWorks } from "@/components/HowItWorks"
import { LiveCatRemote } from "@/components/LiveCatRemote"
import { Navbar } from "@/components/Navbar"
import { SiteBackground } from "@/components/SiteBackground"

export default function ClassicSite() {
  return (
    <>
      <SiteBackground />
      {/* Above the fixed background */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <LiveCatRemote />
          <Download />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  )
}
