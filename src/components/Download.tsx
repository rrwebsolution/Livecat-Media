import { Laptop } from "lucide-react"
import { macDownloadReady, releaseConfig, windowsDownloadReady } from "@/config/release"
import { MacButton, WindowsCardButton } from "./PlatformButtons"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"
import { WindowsIcon } from "./WindowsIcon"

export function Download() {
  // Release details appear only when they have really been configured.
  const details = [
    { label: "File size", value: releaseConfig.windowsFileSize },
    { label: "Released", value: releaseConfig.releaseDate },
  ].filter((detail) => detail.value.trim() !== "")

  return (
    <section id="download" className="border-y border-panel-2 bg-panel">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading title="Download LiveCat Multimedia" />

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-[3fr_2fr]">
          <Reveal>
            <article className="flex h-full flex-col rounded-xl border-2 border-brand bg-navy p-6 sm:p-8">
              <span className="flex size-12 items-center justify-center rounded-lg bg-brand">
                <WindowsIcon className="size-6" />
              </span>
              <h3 className="mt-5 text-2xl font-bold tracking-tight">LiveCat Multimedia for Windows</h3>
              <ul className="mt-3 space-y-1 text-lg text-muted-foreground">
                <li>Windows 10 / Windows 11</li>
                <li>64-bit</li>
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
                <WindowsCardButton className="w-full sm:w-auto" />
                {!windowsDownloadReady && (
                  <p className="mt-3 text-sm text-muted-foreground">The Windows installer will be available here soon.</p>
                )}
              </div>
            </article>
          </Reveal>

          <Reveal delay={80}>
            <article className="flex h-full flex-col rounded-xl border border-panel-2 bg-navy p-6 sm:p-8">
              <span className="flex size-12 items-center justify-center rounded-lg bg-panel-2">
                <Laptop className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-2xl font-bold tracking-tight">LiveCat Multimedia for macOS</h3>
              {!macDownloadReady && (
                <>
                  <p className="mt-3 text-lg font-semibold">Coming Soon</p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    We&apos;re working on bringing LiveCat Multimedia to macOS.
                  </p>
                </>
              )}
              <div className="mt-auto pt-8">
                <MacButton className="w-full sm:w-auto" />
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
