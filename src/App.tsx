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
    <Suspense fallback={null}>
      <Site />
    </Suspense>
  )
}
