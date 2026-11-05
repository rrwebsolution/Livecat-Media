import remotePhone from "@/assets/screenshots/remote-phone.webp"
import remoteTablet from "@/assets/screenshots/remote-tablet.webp"
import { capabilities, devices } from "@/config/content"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

export function LiveCatRemote() {
  return (
    <section id="remote" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading align="left" title="Control LiveCat from anywhere in the room.">
            LiveCat Remote is the companion remote-control interface for LiveCat Multimedia. It allows authorized users
            to control supported features from their own devices.
          </SectionHeading>

          <Reveal>
            <ul aria-label="Supported devices" className="mt-8 flex flex-wrap gap-2">
              {devices.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-lg border border-brand px-3 py-2 text-sm font-medium"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>

            <ul aria-label="What LiveCat Remote offers" className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {capabilities.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <figure>
            <div className="relative pb-[9%]">
              <div className="w-[88%] rounded-xl border border-brand bg-panel-2 p-1.5 sm:p-2.5">
                <img
                  src={remoteTablet}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  alt="LiveCat Remote on a tablet, with the service schedule, scenes, Preview and Program status, and a TAKE button."
                  className="block h-auto w-full rounded-md"
                />
              </div>
              <div className="absolute right-0 bottom-0 w-[29%] rounded-2xl border-4 border-navy bg-panel-2 p-1 sm:p-1.5">
                <img
                  src={remotePhone}
                  width={520}
                  height={1125}
                  loading="lazy"
                  decoding="async"
                  alt="LiveCat Remote on a phone, with a song's lyrics cards and the card in Preview highlighted."
                  className="block h-auto w-full rounded-xl"
                />
              </div>
            </div>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              LiveCat Remote screens, shown in Demo Mode.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
