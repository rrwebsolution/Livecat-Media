/** "/features/", "/features.html" and "/features" are the same page. */
export function normalizePath(path: string) {
  const clean = path.replace(/\.html$/, "").replace(/\/index$/, "/").replace(/(.)\/+$/, "$1")
  return clean || "/"
}

/** ?design=classic or ?design=studio shows that design of the home page (only in the browser). */
export function requestedDesign(search: string) {
  const requested = new URLSearchParams(search).get("design")
  return requested === "classic" || requested === "studio" ? requested : null
}
