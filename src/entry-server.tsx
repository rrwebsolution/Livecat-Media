import { prerender } from "react-dom/static"
import App from "./App"

export { absoluteUrl, seoPages, siteUrl, staticSitemapPaths, structuredData } from "./config/seo"

/** The HTML of one page, with every lazily loaded part already in it. Used only at build time. */
export async function render(path: string) {
  const { prelude } = await prerender(<App path={path} />)
  return await new Response(prelude).text()
}
