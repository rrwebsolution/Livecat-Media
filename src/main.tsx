import { StrictMode } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { activeDesign } from "./config/site"
import { requestedDesign } from "./lib/routing"

const root = document.getElementById("root")!
const { pathname, search } = window.location
const app = (
  <StrictMode>
    <App path={pathname} search={search} />
  </StrictMode>
)

// The built pages already hold their HTML (scripts/prerender.mjs): React takes it over instead of drawing it again.
// The dev server, and ?design= asking for the other design, start from an empty page.
const otherDesign = (requestedDesign(search) ?? activeDesign) !== activeDesign
if (root.hasChildNodes() && !otherDesign) {
  hydrateRoot(root, app)
} else {
  root.replaceChildren()
  createRoot(root).render(app)
}
