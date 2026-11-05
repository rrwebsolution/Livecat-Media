import { Check, Laptop } from "lucide-react"
import { m } from "motion/react"
import {
  installerPendingText,
  macRequirementsText,
  macStatusText,
  windowsRequirements,
} from "@/config/content"
import { macDownloadReady, releaseConfig, windowsDownloadReady } from "@/config/release"
import { MacButton, WindowsCardButton } from "./PlatformButtons"
import { fadeUp, inView, stagger } from "@/lib/motion"
import { SectionHeading } from "./SectionHeading"
import { WindowsIcon } from "./WindowsIcon"

export function Download() {
  // Release details appear only when they have really been configured.
  const details = [
    { label: "File size", value: releaseConfig.windowsFileSize },
    { label: "Released", value: releaseConfig.releaseDate },
  ].filter((detail) => detail.value.trim() !== "")

  return (
    <section id="download" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel/70 px-5 py-16 backdrop-blur-sm sm:px-10 lg:px-16 lg:py-24">
          {/* Spotlight from above and a faint grid, decorative */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 h-[36rem] bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgb(0_102_255/0.45),transparent_70%)]"
          />
          <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
          <div aria-hidden="true" className="section-line absolute inset-x-10 top-0" />

          <div className="relative">
            <SectionHeading eyebrow="Download" title="Get LiveCat Multimedia">
              Install LiveCat on Windows today. The macOS version is on its way.
            </SectionHeading>

            <m.div
              variants={stagger(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2"
            >
              <m.article
                variants={fadeUp}
                className="flex flex-col rounded-2xl border border-brand bg-navy/85 p-7 shadow-[0_30px_80px_-30px_rgb(0_102_255/0.6)] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand">
                    <WindowsIcon className="size-6" />
                  </span>
                  <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">Available now</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight">Windows</h3>
                <ul className="mt-4 space-y-2.5">
                  {windowsRequirements.map((requirement) => (
                    <li key={requirement} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="size-4 shrink-0 text-brand" aria-hidden="true" />
                      {requirement}
                    </li>
                  ))}
                </ul>

                {details.length > 0 && (
                  <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                    {details.map((detail) => (
                      <div key={detail.label}>
                        <dt className="text-muted-foreground">{detail.label}</dt>
                        <dd className="font-medium">{detail.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                <div className="mt-auto pt-8">
                  <WindowsCardButton label="Download Now" className="w-full" />
                  {!windowsDownloadReady && <p className="mt-3 text-sm text-muted-foreground">{installerPendingText}</p>}
                </div>
              </m.article>

              <m.article
                variants={fadeUp}
                className="flex flex-col rounded-2xl border border-white/10 bg-navy/60 p-7 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-panel-2">
                    <Laptop className="size-6" aria-hidden="true" />
                  </span>
                  {!macDownloadReady && (
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-muted-foreground">
                      Coming soon
                    </span>
                  )}
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight">macOS</h3>
                {!macDownloadReady && (
                  <>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{macStatusText}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{macRequirementsText}</p>
                  </>
                )}
                <div className="mt-auto pt-8">
                  <MacButton className="w-full" />
                </div>
              </m.article>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  )
}
