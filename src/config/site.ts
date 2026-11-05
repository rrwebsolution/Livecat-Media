/** The design visitors get. Add ?design=classic or ?design=studio to the address to view either one. */
export const activeDesign: "classic" | "studio" = "classic"

export const brand = {
  name: "LiveCat Multimedia",
  tagline: "Present. Produce. Go Live.",
  description:
    "Multimedia presentation and live production software for churches, schools, events, and livestreams. Lyrics, media, cameras, and streaming in one app.",
  icon: {
    small: "/LiveCat logo/icon-96.png",
    medium: "/LiveCat logo/icon-192.png",
  },
}

/** The links in the navigation bar. */
export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "User Manual", href: "/user-manual.html" },
]

export const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "LiveCat Remote", href: "#remote" },
      { label: "Download", href: "#download" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "User Manual", href: "/user-manual.html" },
      { label: "FAQ", href: "#faq" },
      // Paste the real addresses here. An empty address shows the name as plain text, not a dead link.
      { label: "Support", href: "" },
      { label: "Privacy", href: "" },
      { label: "Terms", href: "" },
    ],
  },
]
