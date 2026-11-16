/**
 * Runs after the client and server builds (npm run build). For every page in src/config/seo.ts it writes the page's
 * finished HTML into dist, so search engines and link previews get the content and the right <head> without
 * running JavaScript. It also writes sitemap.xml. The page in the browser then takes the HTML over (main.tsx).
 */
import { existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { join, resolve } from "node:path"
import { pathToFileURL } from "node:url"
import { loadEnv } from "vite"

const root = resolve(import.meta.dirname, "..")
const dist = join(root, "dist")
const ssrDir = join(root, "dist-ssr")

const { render, seoPages, staticSitemapPaths, absoluteUrl, structuredData, siteUrl } = await import(
  pathToFileURL(join(ssrDir, "entry-server.js")).href
)

const env = loadEnv("production", root, "")
const googleVerification = (env.VITE_GOOGLE_SITE_VERIFICATION ?? "").trim()

const escape = (text) =>
  String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

const template = readFileSync(join(dist, "index.html"), "utf8")
if (!/<!-- seo:start[\s\S]*?seo:end -->/.test(template) || !template.includes('<div id="root"></div>')) {
  throw new Error("prerender: index.html is missing the seo:start/seo:end block or the empty root element")
}

// The main font, so the headline is drawn in it right away instead of swapping fonts (layout shift)
const fontFile = readdirSync(join(dist, "assets")).find((name) => /^geist-latin-wght-normal-.*\.woff2$/.test(name))

// Vite manifest: the chunk and CSS of each page module, with the chunks it imports in turn
const manifestPath = join(dist, ".vite", "manifest.json")
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"))
const entryFile = Object.values(manifest).find((chunk) => chunk.isEntry)?.file

function preloadsFor(module) {
  const scripts = new Set()
  const styles = new Set()
  const visit = (key) => {
    const chunk = manifest[key]
    if (!chunk || scripts.has(chunk.file)) return
    if (chunk.file !== entryFile) scripts.add(chunk.file)
    for (const css of chunk.css ?? []) styles.add(css)
    for (const child of chunk.imports ?? []) visit(child)
  }
  if (!manifest[module]) throw new Error(`prerender: ${module} is not in the Vite manifest`)
  visit(module)
  // the template already loads the entry and its CSS
  const already = (file) => template.includes(`/${file}"`)
  return [
    ...[...styles].filter((file) => !already(file)).map((file) => `<link rel="stylesheet" href="/${file}" />`),
    ...[...scripts].filter((file) => !already(file)).map((file) => `<link rel="modulepreload" href="/${file}" />`),
  ]
}

const ogImage = `${siteUrl}/og-image.png`

function headFor(page) {
  const url = absoluteUrl(page.path)
  const tags = [
    `<title>${escape(page.title)}</title>`,
    `<meta name="description" content="${escape(page.description)}" />`,
    page.noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="LiveCat Multimedia" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:title" content="${escape(page.title)}" />`,
    `<meta property="og:description" content="${escape(page.description)}" />`,
    page.noindex ? "" : `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="LiveCat Multimedia. Present. Produce. Go Live." />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escape(page.title)}" />`,
    `<meta name="twitter:description" content="${escape(page.description)}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
    googleVerification && page.path === "/"
      ? `<meta name="google-site-verification" content="${escape(googleVerification)}" />`
      : "",
    ...preloadsFor(page.module),
    fontFile ? `<link rel="preload" href="/assets/${fontFile}" as="font" type="font/woff2" crossorigin />` : "",
    page.noindex
      ? ""
      : `<script type="application/ld+json">${JSON.stringify(structuredData(page)).replace(/</g, "\\u003c")}</script>`,
    // Without JavaScript the fade-in animations never run: show their content anyway
    `<noscript><style>#root [style*="opacity:0"]{opacity:1!important;transform:none!important}</style></noscript>`,
  ]
  return tags.filter(Boolean).join("\n    ")
}

for (const page of seoPages) {
  const body = await render(page.path)
  if (!body.trim()) throw new Error(`prerender: ${page.path} rendered nothing`)
  const html = template
    .replace(/<!-- seo:start[\s\S]*?seo:end -->/, () => headFor(page))
    .replace('<div id="root"></div>', () => `<div id="root">${body}</div>`)
  writeFileSync(join(dist, page.file), html)
  console.log(`prerendered ${page.path.padEnd(32)} -> dist/${page.file}`)
}

const today = new Date().toISOString().slice(0, 10)
const entries = [
  ...seoPages.filter((page) => !page.noindex).map(({ path, priority }) => ({ path, priority })),
  ...staticSitemapPaths,
]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    ({ path, priority }) =>
      `  <url>\n    <loc>${absoluteUrl(path)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority.toFixed(1)}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>
`
writeFileSync(join(dist, "sitemap.xml"), sitemap)
console.log(`wrote dist/sitemap.xml with ${entries.length} pages`)

rmSync(join(dist, ".vite"), { recursive: true, force: true })
if (existsSync(ssrDir)) rmSync(ssrDir, { recursive: true, force: true })
