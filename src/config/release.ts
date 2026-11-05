/**
 * The one place for download and release information. Nothing else in the site hardcodes it.
 *
 * - Every Windows button downloads the newest .exe on GitHub Releases, found when the page loads (latestInstaller.ts),
 *   so a new release needs no change here. windowsDownloadUrl is where they go if GitHub cannot be asked.
 * - The version inside the buttons comes from the release tag; version here overrides it. Never guess it.
 * - windowsFileSize and releaseDate stay hidden until they are filled in. Never guess them.
 * - To launch on macOS, set macAvailable to true and fill in macDownloadUrl.
 */
const releasesRepo = "rrwebsolution/jamc-worship-presenter"

export const latestReleaseApi = `https://api.github.com/repos/${releasesRepo}/releases/latest`

export const releaseConfig = {
  windowsAvailable: true,
  windowsDownloadUrl: `https://github.com/${releasesRepo}/releases/latest`,
  macAvailable: false,
  macDownloadUrl: "",
  version: "",
  windowsFileSize: "",
  releaseDate: "",
}

export const windowsDownloadReady =
  releaseConfig.windowsAvailable && releaseConfig.windowsDownloadUrl.trim() !== ""

export const macDownloadReady =
  releaseConfig.macAvailable && releaseConfig.macDownloadUrl.trim() !== ""
