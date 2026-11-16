import { useEffect, useState } from "react"
import { latestReleaseApi, releaseConfig } from "./release"

type Release = {
  tag_name?: string
  assets?: { name: string; browser_download_url: string; download_count?: number }[]
}

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

type MacInstaller = { url: string; version: string | null }

let macLookup: Promise<MacInstaller | null> | undefined

/**
 * The newest macOS preview (.dmg whose name ends in "-mac.dmg") on any recent release: the Mac build is made by hand
 * and attached to the release it was built from, so the newest Windows release may not have one yet.
 */
export function latestMacInstaller(): Promise<MacInstaller | null> {
  macLookup ??= fetch(`${latestReleaseApi.replace(/\/latest$/, "")}?per_page=30`, {
    headers: { Accept: "application/vnd.github+json" },
  })
    .then((response) => (response.ok ? response.json() : []))
    .then((releases: Release[]) => {
      for (const release of Array.isArray(releases) ? releases : []) {
        const dmg = release.assets?.find((asset) => asset.name.toLowerCase().endsWith("-mac.dmg"))
        if (dmg) return { url: dmg.browser_download_url, version: release.tag_name?.replace(/^v/, "") || null }
      }
      return null
    })
    .catch(() => null)
  return macLookup
}

/** The macOS preview download, or null while it is looked up or when there is none yet ("Coming Soon"). */
export function useMacDownload() {
  const [installer, setInstaller] = useState<MacInstaller | null>(null)

  useEffect(() => {
    let current = true
    void latestMacInstaller().then((found) => {
      if (current) setInstaller(found)
    })
    return () => {
      current = false
    }
  }, [])

  return installer
}

type DownloadTotals = { total: number; windows: number; mac: number }

let totalsLookup: Promise<DownloadTotals | null> | undefined

/**
 * How many times the installers were downloaded: GitHub's download count of every .exe and .dmg on every release,
 * added up. It also counts updates the app downloads by itself. Null when GitHub cannot be asked: the count then hides.
 */
export function downloadTotals(): Promise<DownloadTotals | null> {
  totalsLookup ??= (async () => {
    const base = latestReleaseApi.replace(/\/latest$/, "")
    const totals: DownloadTotals = { total: 0, windows: 0, mac: 0 }
    // 100 releases per page; stop at the first page that is not full (at most 10 pages)
    for (let page = 1; page <= 10; page++) {
      const response = await fetch(`${base}?per_page=100&page=${page}`, {
        headers: { Accept: "application/vnd.github+json" },
      })
      if (!response.ok) return null
      const releases = (await response.json()) as Release[]
      if (!Array.isArray(releases)) return null
      for (const release of releases) {
        for (const asset of release.assets ?? []) {
          const name = asset.name.toLowerCase()
          const count = asset.download_count ?? 0
          if (name.endsWith(".exe")) totals.windows += count
          else if (name.endsWith(".dmg")) totals.mac += count
        }
      }
      if (releases.length < 100) break
    }
    totals.total = totals.windows + totals.mac
    return totals
  })().catch(() => null)
  return totalsLookup
}

/** The download totals, or null while they load or when GitHub cannot be asked. */
export function useDownloadTotals() {
  const [totals, setTotals] = useState<DownloadTotals | null>(null)

  useEffect(() => {
    let current = true
    void downloadTotals().then((found) => {
      if (current) setTotals(found)
    })
    return () => {
      current = false
    }
  }, [])

  return totals
}
