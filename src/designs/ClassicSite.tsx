import { CTA } from "@/components/CTA"
import { Download } from "@/components/Download"
import { FAQ } from "@/components/FAQ"
import { Features } from "@/components/Features"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { HowItWorks } from "@/components/HowItWorks"
import { LiveCatRemote } from "@/components/LiveCatRemote"
import { Navbar } from "@/components/Navbar"
import { SystemRequirements } from "@/components/SystemRequirements"

export default function ClassicSite() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <LiveCatRemote />
        <Download />
        <SystemRequirements />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
