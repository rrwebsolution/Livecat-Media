import type { ReactNode } from "react"
import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { SiteBackground } from "@/components/SiteBackground"

/** The frame of every page other than the home page: the same background, navigation bar and footer. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteBackground />
      <div className="relative z-10">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
