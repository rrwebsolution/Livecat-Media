export const brand = {
  name: "LiveCat Multimedia",
  tagline: "Present. Produce. Go Live.",
  icon: {
    small: "/LiveCat logo/icon-96.png",
    medium: "/LiveCat logo/icon-192.png",
  },
}

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "LiveCat Remote", href: "#remote" },
  { label: "Download", href: "#download" },
  { label: "User Manual", href: "/user-manual.html" },
  { label: "FAQ", href: "#faq" },
]

export const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "LiveCat Remote", href: "#remote" },
  { label: "Download", href: "#download" },
  { label: "User Manual", href: "/user-manual.html" },
  { label: "FAQ", href: "#faq" },
  // Paste the real addresses here. An empty address shows the name as plain text, not a dead link.
  { label: "Support", href: "" },
  { label: "Privacy", href: "" },
  { label: "Terms", href: "" },
]

/** The design visitors get. Add ?design=classic or ?design=studio to the address to view either one. */
export const activeDesign: "classic" | "studio" = "classic"
