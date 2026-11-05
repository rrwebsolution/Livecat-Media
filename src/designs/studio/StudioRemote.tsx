import remotePhone from "@/assets/screenshots/remote-phone.webp"
import remoteTablet from "@/assets/screenshots/remote-tablet.webp"
import { Reveal } from "@/components/Reveal"
import { capabilities, devices, remoteIntro } from "@/config/content"
import { container, sectionTitle } from "./layout"

export function StudioRemote() {
  return (
    <section id="remote" className="overflow-hidden">
      <div className={`${container} grid items-center gap-14 py-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:py-28`}>
        <div>
          <h2 className={sectionTitle}>Control LiveCat from anywhere in the room.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{remoteIntro}</p>

          <p className="studio-label mt-8 leading-relaxed">{devices.map((device) => device.label).join(" / ")}</p>

          <ul aria-label="What LiveCat Remote offers" className="mt-8 border-b border-panel-2">
            {capabilities.map((capability) => (
              <li key={capability.label} className="border-t border-panel-2 py-3 font-medium">
                {capability.label}
              </li>
            ))}
          </ul>
        </div>

        <Reveal>
          <figure>
            <div className="relative pb-[12%] lg:w-[118%]">
              <img
                src={remoteTablet}
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                alt="LiveCat Remote on a tablet, with the service schedule, scenes, Preview and Program status, and a TAKE button."
                className="block h-auto w-full border-4 border-panel-2 sm:border-8"
              />
              <img
                src={remotePhone}
                width={520}
                height={1125}
                loading="lazy"
                decoding="async"
                alt="LiveCat Remote on a phone, with a song's lyrics cards and the card in Preview highlighted."
                className="absolute bottom-0 left-[6%] block h-auto w-[27%] border-4 border-navy outline-4 -outline-offset-8 outline-panel-2 sm:border-8"
              />
            </div>
            <figcaption className="studio-label mt-5 text-muted-foreground">
              LiveCat Remote screens, shown in Demo Mode.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
