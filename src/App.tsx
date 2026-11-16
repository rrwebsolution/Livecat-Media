import { domAnimation, LazyMotion, MotionConfig } from "motion/react"
import { createElement, lazy, Suspense } from "react"
import { activeDesign } from "@/config/site"
import { normalizePath, requestedDesign } from "@/lib/routing"

const designs = {
  classic: lazy(() => import("./designs/ClassicSite")),
  studio: lazy(() => import("./designs/studio/StudioSite")),
}

/** The pages other than the home page. Each one is built to its own HTML file (scripts/prerender.mjs). */
const pages: Record<string, ReturnType<typeof lazy>> = {
  "/features": lazy(() => import("./pages/landing").then((page) => ({ default: page.FeaturesPage }))),
  "/download": lazy(() => import("./pages/DownloadPage")),
  "/church-presentation-software": lazy(() => import("./pages/landing").then((page) => ({ default: page.ChurchPage }))),
  "/worship-lyrics-software": lazy(() => import("./pages/landing").then((page) => ({ default: page.LyricsPage }))),
  "/live-production-software": lazy(() =>
    import("./pages/landing").then((page) => ({ default: page.ProductionPage })),
  ),
}

const NotFound = lazy(() => import("./pages/NotFoundPage"))

function choosePage(path: string, design: "classic" | "studio") {
  const clean = normalizePath(path)
  if (clean === "/") return designs[design]
  return pages[clean] ?? NotFound
}

/** path and search come from the browser, or from the prerender script at build time. */
export default function App({ path, search = "" }: { path: string; search?: string }) {
  const page = createElement(choosePage(path, requestedDesign(search) ?? activeDesign))
  return (
    // "user" follows the visitor's reduced-motion setting: movement is dropped, only fades remain
    <MotionConfig reducedMotion="user">
      {/* Loads only the animation features the site uses, keeping the bundle small */}
      <LazyMotion features={domAnimation} strict>
        <Suspense fallback={null}>
          {page}
        </Suspense>
      </LazyMotion>
    </MotionConfig>
  )
}
