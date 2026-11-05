import { MacButton, WindowsCardButton } from "@/components/PlatformButtons"
import { Reveal } from "@/components/Reveal"
import { installerPendingText, macRequirementsText, macStatusText, windowsRequirements } from "@/config/content"
import { macDownloadReady, releaseConfig, windowsDownloadReady } from "@/config/release"
import { container, sectionTitle, whiteButton } from "./layout"

export function StudioDownload() {
  // Release details appear only when they have really been configured.
  const details = [
    { label: "File size", value: releaseConfig.windowsFileSize },
    { label: "Released", value: releaseConfig.releaseDate },
  ].filter((detail) => detail.value.trim() !== "")

  return (
    <section id="download" className="bg-panel">
      <div className={`${container} py-20 lg:py-28`}>
        <h2 className={sectionTitle}>Download LiveCat Multimedia</h2>

        <Reveal className="mt-12 lg:mt-16">
          <article className="grid gap-8 bg-brand p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="studio-label">Windows 10 / Windows 11 · 64-bit</p>
              <h3 className="mt-4 text-3xl leading-tight font-bold tracking-tight sm:text-5xl">
                LiveCat Multimedia for Windows
              </h3>
              {details.length > 0 && (
                <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3">
                  {details.map((detail) => (
                    <div key={detail.label}>
                      <dt className="studio-label">{detail.label}</dt>
                      <dd className="mt-1 font-semibold">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
            <div>
              <WindowsCardButton className={`w-full lg:w-auto ${whiteButton}`} />
              {!windowsDownloadReady && <p className="mt-3 text-sm font-medium">{installerPendingText}</p>}
            </div>
          </article>

          <article className="grid gap-6 border border-t-0 border-panel-2 bg-navy p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              {!macDownloadReady && <p className="studio-label text-muted-foreground">Coming Soon</p>}
              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">LiveCat Multimedia for macOS</h3>
              {!macDownloadReady && <p className="mt-2 text-muted-foreground">{macStatusText}</p>}
            </div>
            <MacButton className="w-full rounded-none lg:w-auto" />
          </article>
        </Reveal>

        <div id="system-requirements" className="mt-20 grid gap-8 lg:mt-28 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <h2 className="studio-display text-[clamp(1.875rem,3.6vw,3.25rem)]">System Requirements</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="border-t-2 border-white pt-4">
              <h3 className="text-xl font-semibold">Windows</h3>
              <ul className="mt-3 space-y-1 text-muted-foreground">
                {windowsRequirements.map((requirement) => (
                  <li key={requirement}>{requirement}</li>
                ))}
              </ul>
            </div>
            <div className="border-t-2 border-panel-2 pt-4">
              <h3 className="text-xl font-semibold">macOS</h3>
              <p className="mt-3 text-muted-foreground">{macRequirementsText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
