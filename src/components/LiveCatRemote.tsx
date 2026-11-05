import { m } from "motion/react"
import remotePhone from "@/assets/screenshots/remote-phone.webp"
import remoteTablet from "@/assets/screenshots/remote-tablet.webp"
import { capabilities, devices, remoteIntro } from "@/config/content"
import { fadeUp, inView, stagger } from "@/lib/motion"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

export function LiveCatRemote() {
  return (
    <section id="remote" className="relative">
      <div aria-hidden="true" className="section-line mx-auto max-w-5xl" />
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading align="left" eyebrow="LiveCat Remote" title="Control LiveCat from anywhere in the room.">
              {remoteIntro}
            </SectionHeading>

            <Reveal>
              <ul aria-label="Supported devices" className="mt-8 flex flex-wrap gap-2">
                {devices.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium"
                  >
                    <Icon className="size-4 text-brand" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>

            <m.ul
              aria-label="What LiveCat Remote offers"
              variants={stagger(0.06)}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2"
            >
              {capabilities.map(({ label, icon: Icon }) => (
                <m.li key={label} variants={fadeUp} className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  {label}
                </m.li>
              ))}
            </m.ul>
          </div>

          <Reveal className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(0_102_255/0.35),transparent_65%)] blur-2xl"
            />
            <figure className="relative">
              <div className="relative pb-[9%]">
                <div className="w-[88%] overflow-hidden rounded-2xl border border-white/15 bg-panel p-1.5 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.9)] sm:p-2">
                  <img
                    src={remoteTablet}
                    width={1200}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    alt="LiveCat Remote on a tablet, with the service schedule, scenes, Preview and Program status, and a TAKE button."
                    className="block h-auto w-full rounded-xl"
                  />
                </div>
                <div className="absolute right-0 bottom-0 w-[29%] rounded-[1.25rem] border-4 border-navy bg-panel p-1 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.9)] sm:p-1.5">
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
              <figcaption className="mt-4 text-sm text-muted-foreground">LiveCat Remote screens, shown in Demo Mode.</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
