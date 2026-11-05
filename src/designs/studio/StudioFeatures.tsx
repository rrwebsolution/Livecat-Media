import { useState } from "react"
import cameraShot from "@/assets/screenshots/features/camera.webp"
import presentationsShot from "@/assets/screenshots/features/presentations.webp"
import previewProgramShot from "@/assets/screenshots/features/preview-program.webp"
import recordingShot from "@/assets/screenshots/features/recording.webp"
import remoteShot from "@/assets/screenshots/features/remote.webp"
import scenesShot from "@/assets/screenshots/features/scenes.webp"
import scheduleShot from "@/assets/screenshots/features/schedule.webp"
import streamingShot from "@/assets/screenshots/features/streaming.webp"
import youtubeShot from "@/assets/screenshots/features/youtube.webp"
import { features } from "@/config/content"
import { cn } from "@/lib/utils"
import { container, sectionTitle } from "./layout"

const shots: Record<string, { src: string; alt: string }> = {
  Presentations: { src: presentationsShot, alt: "Bible verses shown as slide cards, with the live card marked." },
  "YouTube Playback": { src: youtubeShot, alt: "The Videos library with its Local, YouTube, and Backgrounds tabs." },
  "Preview & Program": { src: previewProgramShot, alt: "The Preview and Program monitors with the TAKE button between them." },
  "Multi-Camera": { src: cameraShot, alt: "The scene editor with a camera layer in its list of sources." },
  Scenes: { src: scenesShot, alt: "The Scenes page with saved layouts such as Worship, Camera + Lyrics, and Sermon." },
  "Live Streaming": { src: streamingShot, alt: "The Stream page with the destination, server, and video quality settings." },
  Recording: { src: recordingShot, alt: "The Stream page with the Start Rec button in the top bar." },
  "Service Schedule": { src: scheduleShot, alt: "The Services page with a saved service and templates." },
  "LiveCat Remote": { src: remoteShot, alt: "LiveCat Remote on a tablet in Demo Mode, with the service schedule and a TAKE button." },
}

/**
 * A list of features beside one large screenshot. Pointing at or tapping a row shows that feature.
 * On small screens the screenshot and text open inside the selected row instead.
 */
export function StudioFeatures() {
  const [active, setActive] = useState(0)

  return (
    <section id="features" className={`${container} py-20 lg:py-28`}>
      <h2 className={`${sectionTitle} max-w-4xl`}>Powerful Features for Your Production</h2>

      <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
        <ol className="border-b border-panel-2">
          {features.map((feature, index) => {
            const selected = index === active
            return (
              <li key={feature.title} className="border-t border-panel-2">
                <button
                  type="button"
                  aria-expanded={selected}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  className={cn(
                    "flex min-h-14 w-full items-center gap-4 px-3 py-3 text-left transition-colors duration-150",
                    selected ? "bg-brand" : "hover:bg-panel",
                  )}
                >
                  <span className={cn("studio-label w-6", !selected && "text-muted-foreground")}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold sm:text-xl">{feature.title}</h3>
                </button>
                {selected && (
                  <div className="px-3 pt-4 pb-6 lg:hidden">
                    <p className="leading-relaxed text-muted-foreground">{feature.text}</p>
                    <img
                      src={shots[feature.title].src}
                      alt={shots[feature.title].alt}
                      width={800}
                      height={450}
                      loading="lazy"
                      className="mt-4 block h-auto w-full"
                    />
                  </div>
                )}
              </li>
            )
          })}
        </ol>

        <div className="hidden lg:block">
          <div className="sticky top-24">
            {/* Every image stays in place so that switching rows never waits for a download */}
            <div className="relative aspect-video border border-panel-2 bg-panel">
              {features.map((feature, index) => (
                <img
                  key={feature.title}
                  src={shots[feature.title].src}
                  alt={index === active ? shots[feature.title].alt : ""}
                  width={800}
                  height={450}
                  loading="lazy"
                  className={cn(
                    "absolute inset-0 h-full w-full transition-opacity duration-150",
                    index === active ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
            </div>
            <p aria-live="polite" className="mt-5 max-w-2xl text-xl leading-snug font-medium">
              {features[active].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
