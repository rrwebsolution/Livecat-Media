import { Check, Minus, Square, X } from "lucide-react"
import { m, useReducedMotion, useScroll, useTransform } from "motion/react"
import desktop1600 from "@/assets/screenshots/desktop-1600.webp"
import desktop960 from "@/assets/screenshots/desktop-960.webp"
import { heroText } from "@/config/content"
import { brand } from "@/config/site"
import { BrandIcon } from "./BrandIcon"
import { MacButton, WindowsDownloadButton } from "./PlatformButtons"
import { easeOut, fadeUp, stagger } from "@/lib/motion"

const highlights = ["Windows 10 & 11 (64-bit)", "Preview and Program workflow", "LiveCat Remote for phones & tablets"]

/** The app screenshot in a Windows-style window, tilted back slightly until the page scrolls, and floating gently. */
function AppPreview() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const rotateX = useTransform(scrollY, [0, 500], [reduceMotion ? 0 : 12, 0])
  const scale = useTransform(scrollY, [0, 500], [reduceMotion ? 1 : 0.94, 1])

  return (
    <m.div
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: easeOut, delay: 0.35 }}
      className="relative mx-auto mt-16 max-w-6xl [perspective:1800px] sm:mt-20"
    >
      {/* Blue light behind the window */}
      <div
        aria-hidden="true"
        className="absolute -inset-x-8 -top-10 bottom-0 bg-[radial-gradient(ellipse_at_center,rgb(0_102_255/0.5),transparent_68%)] blur-2xl sm:-inset-x-20"
      />

      <m.div style={{ rotateX, scale }} className="relative origin-top">
        <m.figure
          animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-xl border border-white/15 bg-panel shadow-[0_40px_120px_-30px_rgb(0_0_0/0.9)] sm:rounded-2xl">
            <div aria-hidden="true" className="flex h-8 items-center justify-between border-b border-white/10 bg-navy px-3 sm:h-10 sm:px-4">
              <span className="flex items-center gap-2 text-[0.6875rem] font-medium text-muted-foreground sm:text-xs">
                <BrandIcon className="size-4 sm:size-5" />
                {brand.name}
              </span>
              <span className="flex items-center gap-3 text-muted-foreground sm:gap-4">
                <Minus className="size-3.5" />
                <Square className="size-3" />
                <X className="size-3.5" />
              </span>
            </div>
            <img
              src={desktop1600}
              srcSet={`${desktop960} 960w, ${desktop1600} 1600w`}
              sizes="(min-width: 1200px) 1152px, 100vw"
              width={1600}
              height={878}
              fetchPriority="high"
              alt="LiveCat Multimedia on Windows, with a Bible passage in Preview and on Program, the TAKE button between them, and saved scenes on the right."
              className="block h-auto w-full"
            />
          </div>

          {/* Floating status chips, decorative */}
          <div
            aria-hidden="true"
            className="absolute -top-4 right-4 hidden items-center gap-2 rounded-full border border-white/15 bg-navy/80 px-3.5 py-2 text-xs font-semibold tracking-wide backdrop-blur-md sm:flex lg:-right-6"
          >
            <span className="live-dot size-2 rounded-full bg-live" />
            PROGRAM · LIVE
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-5 left-4 hidden items-center gap-2 rounded-full border border-white/15 bg-navy/80 px-3.5 py-2 text-xs font-semibold tracking-wide backdrop-blur-md sm:flex lg:-left-6"
          >
            PREVIEW
            <span className="rounded bg-brand px-1.5 py-0.5 text-[0.625rem]">TAKE</span>
            PROGRAM
          </div>
        </m.figure>
      </m.div>
    </m.div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft radial light behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[60rem] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgb(0_102_255/0.32),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-20 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24 lg:pb-28">
        <m.div variants={stagger(0.1)} initial="hidden" animate="show" className="mx-auto max-w-4xl text-center">
          <m.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur"
          >
            <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
            Presentation and live production in one app
          </m.p>

          <m.h1
            variants={fadeUp}
            className="mt-7 text-[clamp(2.75rem,9vw,6rem)] leading-[1.02] font-extrabold tracking-[-0.035em] text-balance"
          >
            Present. Produce. <span className="text-brand">Go Live.</span>
          </m.h1>

          <m.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl"
          >
            {heroText}
          </m.p>

          <m.div variants={fadeUp} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <WindowsDownloadButton className="w-full sm:w-auto" />
            <MacButton label="macOS · Coming Soon" className="w-full sm:w-auto" />
          </m.div>

          <m.ul
            variants={fadeUp}
            className="mt-8 flex flex-col items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap"
          >
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="size-4 text-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </m.ul>
        </m.div>

        <AppPreview />
      </div>
    </section>
  )
}
