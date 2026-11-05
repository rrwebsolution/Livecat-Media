import desktop1600 from "@/assets/screenshots/desktop-1600.webp"
import desktop960 from "@/assets/screenshots/desktop-960.webp"
import { MacButton, WindowsDownloadButton } from "@/components/PlatformButtons"
import { Reveal } from "@/components/Reveal"
import { heroText, positioningText } from "@/config/content"
import { brand } from "@/config/site"
import { container, whiteButton } from "./layout"

/** Numbered markers sit on the matching parts of the screenshot, in percent of its size. */
const callouts = [
  { name: "Preview", text: "Prepare and verify your next content.", left: "33.4%", top: "10%" },
  { name: "TAKE", text: "Send Preview to Program.", left: "58.2%", top: "16.3%" },
  { name: "Program", text: "Output to projector, livestream, or recording.", left: "65.8%", top: "13.1%" },
  { name: "Scenes", text: "Reusable production layouts.", left: "82.9%", top: "7.4%" },
]

export function StudioHero() {
  return (
    <>
      <section id="top" className="bg-brand">
        <div className={`${container} pt-10 pb-[24vw] lg:pt-14 lg:pb-[15vw]`}>
          <p className="studio-label">{brand.name}</p>

          <h1 className="studio-display mt-6 text-[clamp(3.25rem,min(14.2vw,21vh),13rem)]">
            <span className="block">Present.</span>{" "}
            <span className="block pl-[6vw]">Produce.</span>{" "}
            <span className="block pl-[12vw]">Go Live.</span>
          </h1>

          <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-2 lg:items-end">
            <p className="max-w-xl text-lg leading-snug font-medium sm:text-2xl">{heroText}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start lg:justify-end">
              <WindowsDownloadButton className={`w-full sm:w-auto ${whiteButton}`} />
              <MacButton onSolidBlue label="macOS · Coming Soon" className="w-full rounded-none sm:w-auto" />
            </div>
          </div>
          <p className="mt-6 text-sm font-medium lg:text-right">LiveCat Remote works on phones and tablets.</p>
        </div>
      </section>

      <div className={`${container} -mt-[18vw] lg:-mt-[11vw]`}>
        <Reveal>
          <figure>
            <div className="relative border-4 border-navy sm:border-8">
              <img
                src={desktop1600}
                srcSet={`${desktop960} 960w, ${desktop1600} 1600w`}
                sizes="(min-width: 1440px) 1360px, 100vw"
                width={1600}
                height={878}
                fetchPriority="high"
                alt="LiveCat Multimedia on Windows, with a Bible passage in Preview and on Program, the TAKE button between them, and saved scenes on the right."
                className="block h-auto w-full"
              />
              {callouts.map((callout, index) => (
                <span
                  key={callout.name}
                  aria-hidden="true"
                  style={{ left: callout.left, top: callout.top }}
                  className="studio-label absolute flex size-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white text-navy sm:size-7"
                >
                  {index + 1}
                </span>
              ))}
            </div>
            <figcaption>
              <ol className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
                {callouts.map((callout, index) => (
                  <li key={callout.name} className="flex gap-3">
                    <span className="studio-label flex size-6 shrink-0 items-center justify-center bg-white text-navy">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{callout.name}</p>
                      <p className="mt-0.5 text-sm leading-snug text-muted-foreground">{callout.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal>
          <p className="mt-20 max-w-5xl text-[clamp(1.875rem,4.6vw,4rem)] leading-[1.05] font-semibold tracking-tight lg:mt-28">
            {positioningText}
          </p>
        </Reveal>
      </div>
    </>
  )
}
