import { useEffect, useState } from "react"
import { latestReleaseApi, releaseConfig } from "./release"

type Release = { tag_name?: string; assets?: { name: string; browser_download_url: string }[] }

type LatestInstaller = { url: string; version: string | null }

/** The installer of a release: its one .exe and the version from the release tag. Null when it has no .exe. */
export function installerOf(release: Release): LatestInstaller | null {
  const installer = release.assets?.find((asset) => asset.name.toLowerCase().endsWith(".exe"))
  if (!installer) return null
  return { url: installer.browser_download_url, version: release.tag_name?.replace(/^v/, "") || null }
}

let lookup: Promise<LatestInstaller | null> | undefined

/** Asks GitHub once per page load. A failure (offline, rate limit) gives null: the button then opens the releases page. */
export function latestInstaller(): Promise<LatestInstaller | null> {
  lookup ??= fetch(latestReleaseApi, { headers: { Accept: "application/vnd.github+json" } })
    .then((response) => (response.ok ? response.json() : {}))
    .then((release: Release) => installerOf(release))
    .catch(() => null)
  return lookup
}

/**
 * Where a Windows button goes: the newest installer, whichever version that is. A click before GitHub has answered
 * waits for the answer, so it still downloads the file. A version set in releaseConfig wins over the release tag.
 */
export function useWindowsDownload() {
  const [installer, setInstaller] = useState<LatestInstaller | null>(null)

  useEffect(() => {
    let current = true
    void latestInstaller().then((found) => {
      if (current) setInstaller(found)
    })
    return () => {
      current = false
    }
  }, [])

  const href = installer?.url ?? releaseConfig.windowsDownloadUrl
  const version = releaseConfig.version.trim() || installer?.version || null
  const waitThenDownload = (event: { preventDefault: () => void }) => {
    if (installer) return
    event.preventDefault()
    void latestInstaller().then((found) => {
      window.location.href = found?.url ?? releaseConfig.windowsDownloadUrl
    })
  }

  return { href, version, waitThenDownload }
}
