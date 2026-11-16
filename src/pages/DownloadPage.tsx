import { ApiKeys } from "@/components/ApiKeys"
import { Download } from "@/components/Download"
import { PageShell } from "./PageShell"

/** /download: the download cards with requirements and install steps, then the API keys some features need. */
export default function DownloadPage() {
  return (
    <PageShell>
      <Download asPage />
      <ApiKeys />
    </PageShell>
  )
}
