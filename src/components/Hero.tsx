import { Smartphone } from "lucide-react"
import desktop1600 from "@/assets/screenshots/desktop-1600.webp"
import desktop960 from "@/assets/screenshots/desktop-960.webp"
import { brand } from "@/config/site"
import { BrandIcon } from "./BrandIcon"
import { MacButton, WindowsDownloadButton } from "./PlatformButtons"
import { Reveal } from "./Reveal"

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20 lg:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] lg:gap-14">
        <div>
          <p className="flex items-center gap-2 text-base font-semibold text-muted-foreground">
            <BrandIcon className="size-7" />
            {brand.name}
          </p>

          <h1 className="mt-5 text-[3.25rem] leading-[1.04] font-extrabold tracking-tight sm:text-7xl lg:text-[4.5rem] xl:text-[5rem]">
            <span className="block">Present.</span>{" "}
            <span className="block">Produce.</span>{" "}
            <span className="mt-2 inline-block rounded-lg bg-brand px-3 pb-1.5">Go Live.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            One powerful multimedia platform for presentations, media, cameras, live production, and streaming.
          </p>

          <p className="mt-4 max-w-xl text-lg font-semibold sm:text-xl">
            Think OBS and EasyWorship, combined into one software.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WindowsDownloadButton className="w-full sm:w-auto" />
            <MacButton label="macOS · Coming Soon" className="w-full sm:w-auto" />
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Smartphone className="size-4 shrink-0" aria-hidden="true" />
            LiveCat Remote works on phones and tablets.
          </p>
        </div>

        <Reveal>
          <figure>
            <div className="rounded-xl border border-brand bg-panel-2 p-1.5 sm:p-2.5">
              <img
                src={desktop1600}
                srcSet={`${desktop960} 960w, ${desktop1600} 1600w`}
                sizes="(min-width: 1280px) 760px, (min-width: 1024px) 60vw, 100vw"
                width={1600}
                height={878}
                fetchPriority="high"
                alt="LiveCat Multimedia on Windows, with a Bible passage in Preview and on Program, the TAKE button between them, and saved scenes on the right."
                className="block h-auto w-full rounded-md"
              />
            </div>
            <div aria-hidden="true" className="mx-auto h-6 w-20 bg-panel-2 sm:h-9 sm:w-28" />
            <div aria-hidden="true" className="mx-auto h-1.5 w-40 rounded-t-md bg-panel-2 sm:h-2 sm:w-56" />
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
