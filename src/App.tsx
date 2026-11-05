import { domAnimation, LazyMotion, MotionConfig } from "motion/react"
import { lazy, Suspense } from "react"
import { activeDesign } from "@/config/site"

const designs = {
  classic: lazy(() => import("./designs/ClassicSite")),
  studio: lazy(() => import("./designs/studio/StudioSite")),
}

function chooseDesign() {
  const requested = new URLSearchParams(window.location.search).get("design")
  return requested === "classic" || requested === "studio" ? requested : activeDesign
}

export default function App() {
  const Site = designs[chooseDesign()]
  return (
    // "user" follows the visitor's reduced-motion setting: movement is dropped, only fades remain
    <MotionConfig reducedMotion="user">
      {/* Loads only the animation features the site uses, keeping the bundle small */}
      <LazyMotion features={domAnimation} strict>
        <Suspense fallback={null}>
          <Site />
        </Suspense>
      </LazyMotion>
    </MotionConfig>
  )
}
