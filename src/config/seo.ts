import { ownerContact } from "./content"
import { brand } from "./site"

/**
 * Search engine information for every page: the one place for titles, descriptions, canonical addresses and
 * structured data. The build (scripts/prerender.mjs) writes each page's HTML with these tags already in <head>,
 * and lists every page here in sitemap.xml.
 */
export const siteUrl = "https://www.getlivecat.com"

export type SeoPage = {
  /** The address, without a trailing slash ("/" for the home page) */
  path: string
  /** The built file Vercel serves at that address (cleanUrls: "features.html" answers /features) */
  file: string
  title: string
  description: string
  /** Lower for pages that matter less, as a hint in sitemap.xml */
  priority: number
  /** The module the page loads lazily (App.tsx), preloaded in its HTML so it does not wait for the main script */
  module: string
  /** Left out of sitemap.xml and marked noindex */
  noindex?: boolean
}

export const seoPages: SeoPage[] = [
  {
    path: "/",
    file: "index.html",
    module: "src/designs/ClassicSite.tsx",
    title: "LiveCat Multimedia | Church Presentation & Live Production Software",
    description:
      "LiveCat Multimedia helps churches and event teams present worship lyrics, Bible passages, multimedia, and live productions. Present. Produce. Go Live.",
    priority: 1,
  },
  {
    path: "/features",
    file: "features.html",
    module: "src/pages/landing.tsx",
    title: "Features | LiveCat Multimedia: Lyrics, Bible, Scenes, Streaming & Remote",
    description:
      "Every LiveCat Multimedia feature: song lyrics, Bible verses, PowerPoint, videos, Preview and Program, scenes, cameras, livestreaming, recording and phone remote control.",
    priority: 0.9,
  },
  {
    path: "/download",
    file: "download.html",
    module: "src/pages/DownloadPage.tsx",
    title: "Download LiveCat Multimedia for Windows and macOS",
    description:
      "Download the newest LiveCat Multimedia installer for Windows 10 and 11 (64-bit) or macOS on Apple Silicon, with system requirements and step-by-step install instructions.",
    priority: 0.9,
  },
  {
    path: "/church-presentation-software",
    file: "church-presentation-software.html",
    module: "src/pages/landing.tsx",
    title: "Church Presentation Software | LiveCat Multimedia",
    description:
      "Run Sunday services from one app: song lyrics, Bible verses, PowerPoint, videos and announcements on the projector, with a service order and safe Preview before anything goes live.",
    priority: 0.8,
  },
  {
    path: "/worship-lyrics-software",
    file: "worship-lyrics-software.html",
    module: "src/pages/landing.tsx",
    title: "Worship Lyrics Software for Projection | LiveCat Multimedia",
    description:
      "Project worship song lyrics on screens and the livestream. Search your song library, click each slide as it is sung, import lyrics, and set the font once for every song.",
    priority: 0.8,
  },
  {
    path: "/live-production-software",
    file: "live-production-software.html",
    module: "src/pages/landing.tsx",
    title: "Live Production & Church Livestream Software | LiveCat Multimedia",
    description:
      "Cameras, scenes, transitions, an audio mixer, RTMP livestreaming and local recording in the same app as your lyrics and Bible verses. Built for church and event livestreams.",
    priority: 0.8,
  },
  {
    path: "/404",
    file: "404.html",
    module: "src/pages/NotFoundPage.tsx",
    title: "Page not found | LiveCat Multimedia",
    description: "This page does not exist. Go back to LiveCat Multimedia.",
    priority: 0,
    noindex: true,
  },
]

/** Static pages outside the React app that still belong in sitemap.xml. */
export const staticSitemapPaths = [{ path: "/user-manual", priority: 0.6 }]

export const absoluteUrl = (path: string) => (path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`)

const logoUrl = `${siteUrl}/LiveCat%20logo/icon-512.png`

/** Schema.org JSON-LD: only facts the site states. No prices, ratings or reviews, since none have been given. */
export function structuredData(page: SeoPage) {
  const organization = {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: brand.name,
    url: `${siteUrl}/`,
    logo: logoUrl,
    email: ownerContact.email,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: ownerContact.email,
      telephone: ownerContact.phone,
    },
  }

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: brand.name,
    url: `${siteUrl}/`,
    publisher: { "@id": `${siteUrl}/#organization` },
  }

  const software = {
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}/#software`,
    name: brand.name,
    alternateName: "LiveCat",
    description: brand.description,
    url: `${siteUrl}/`,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Windows 10, Windows 11, macOS 13 or newer (Apple Silicon)",
    downloadUrl: absoluteUrl("/download"),
    image: logoUrl,
    screenshot: `${siteUrl}/og-image.png`,
    publisher: { "@id": `${siteUrl}/#organization` },
  }

  const webPage = {
    "@type": "WebPage",
    "@id": `${absoluteUrl(page.path)}#webpage`,
    url: absoluteUrl(page.path),
    name: page.title,
    description: page.description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#software` },
  }

  const graph = page.path === "/" ? [organization, website, software, webPage] : [organization, software, webPage]
  return { "@context": "https://schema.org", "@graph": graph }
}
