import {
  ArrowRightLeft,
  CalendarDays,
  Circle,
  ClipboardList,
  Download,
  Eye,
  Layers,
  Monitor,
  MonitorPlay,
  Music,
  Presentation,
  QrCode,
  Radio,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Tablet,
  Video,
  Wifi,
  type LucideIcon,
} from "lucide-react"

/** The site's wording, shared by every design so the designs cannot drift apart. */

export const heroText =
  "Powerful multimedia presentation and live production software built for seamless control."

export const positioningText = "Think OBS and EasyWorship, combined into one software."

export const remoteIntro =
  "LiveCat Remote is the companion remote-control interface for LiveCat Multimedia. It allows authorized users to control supported features from their own devices."

export const features: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Presentations",
    text: "Manage lyrics, Bible content, PowerPoint presentations, images, videos, and multimedia content.",
    icon: Presentation,
  },
  {
    title: "YouTube Playback",
    text: "Add YouTube videos to your library and play them through the official embedded YouTube player. An internet connection is required.",
    icon: MonitorPlay,
  },
  {
    title: "Preview & Program",
    text: "Prepare content safely in Preview before sending it to Program.",
    icon: ArrowRightLeft,
  },
  { title: "Multi-Camera", text: "Use webcams and compatible video capture devices.", icon: Video },
  {
    title: "Scenes",
    text: "Combine cameras, lyrics, presentations, media, and graphics into reusable production layouts.",
    icon: Layers,
  },
  {
    title: "Live Streaming",
    text: "Stream Program output using supported livestream and RTMP integrations.",
    icon: Radio,
  },
  { title: "Recording", text: "Record Program output locally.", icon: Circle },
  {
    title: "Service Schedule",
    text: "Prepare and organize the complete presentation or event flow.",
    icon: CalendarDays,
  },
  { title: "LiveCat Remote", text: "Control authorized LiveCat features from phones and tablets.", icon: Smartphone },
]

/** The six feature cards of the main design. The Studio design shows the longer list above. */
export const coreFeatures: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Lyrics and Presentation Management",
    text: "Keep lyrics, Bible passages, PowerPoint presentations, images, and videos in one organized library.",
    icon: Presentation,
  },
  {
    title: "Media Playback",
    text: "Play videos and images, and add YouTube videos through the official embedded player.",
    icon: MonitorPlay,
  },
  {
    title: "Preview and Program Control",
    text: "Prepare the next item safely in Preview, then TAKE it to Program when you are ready.",
    icon: ArrowRightLeft,
  },
  {
    title: "Remote Control",
    text: "Run authorized controls from phones and tablets with LiveCat Remote over your local network.",
    icon: Smartphone,
  },
  {
    title: "Live Production Workflow",
    text: "Plan the whole service schedule, then stream Program output over RTMP or record it locally.",
    icon: Radio,
  },
  {
    title: "Scene and Source Management",
    text: "Combine cameras, capture devices, lyrics, media, and graphics into reusable scenes.",
    icon: Layers,
  },
]

/** The three steps of the main design's How It Works section. */
export const setupSteps: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Download and install",
    text: "Download LiveCat Multimedia for Windows and run the installer.",
    icon: Download,
  },
  {
    title: "Prepare your content",
    text: "Add lyrics, presentations, media, cameras, and scenes to your service schedule.",
    icon: ClipboardList,
  },
  {
    title: "Control and go live",
    text: "Line up each item in Preview, TAKE it to Program, and project, stream, or record.",
    icon: Radio,
  },
]

export const steps: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Prepare", text: "Add your content, media, cameras, and scenes.", icon: ClipboardList },
  { title: "Preview", text: "Prepare and verify your next content.", icon: Eye },
  { title: "Take", text: "Send Preview to Program.", icon: Send },
  { title: "Go Live", text: "Output to projector, livestream, or recording.", icon: Radio },
]

export const workflow = ["SELECT", "PREVIEW", "TAKE", "PROGRAM"]

export const devices: { label: string; icon: LucideIcon }[] = [
  { label: "Android phones", icon: Smartphone },
  { label: "Android tablets", icon: Tablet },
  { label: "iPhone", icon: Smartphone },
  { label: "iPad", icon: Tablet },
  { label: "Laptop/browser", icon: Monitor },
]

export const capabilities: { label: string; icon: LucideIcon }[] = [
  { label: "QR pairing", icon: QrCode },
  { label: "Local Wi-Fi/LAN connection", icon: Wifi },
  { label: "Permission-based controls", icon: ShieldCheck },
  { label: "Lyrics control", icon: Music },
  { label: "Presentation control", icon: Presentation },
  { label: "Preview controls", icon: Eye },
  { label: "Authorized production controls", icon: SlidersHorizontal },
]

// Confirmed requirements only. Add CPU, RAM, GPU or storage here once they have been provided.
export const windowsRequirements = ["Windows 10 or Windows 11", "64-bit"]

export const macRequirementsText =
  "macOS system requirements will be announced when the macOS version becomes available."

export const macStatusText = "We're working on bringing LiveCat Multimedia to macOS."

export const installerPendingText = "The Windows installer will be available here soon."

export const questions = [
  {
    question: "What is LiveCat Multimedia?",
    answer:
      "LiveCat Multimedia is a multimedia presentation and live-production application designed for presentations, events, churches, schools, conferences, organizations, and livestream productions.",
  },
  {
    question: "Is LiveCat like OBS and EasyWorship?",
    answer:
      "Think of LiveCat as OBS and EasyWorship combined into one software: lyrics, Bible, presentations, and media together with cameras, scenes, streaming, and recording.",
  },
  {
    question: "Is LiveCat available for Windows?",
    answer: "Yes. Windows is currently the supported downloadable desktop platform.",
  },
  {
    question: "Is LiveCat available for macOS?",
    answer: "Not yet. The macOS version is planned for the future.",
  },
  {
    question: "Can I use LiveCat with a projector?",
    answer: "Yes, through supported external display and output functionality.",
  },
  {
    question: "Can I control LiveCat using my phone or tablet?",
    answer: "Yes. LiveCat Remote provides authorized remote controls through the local network.",
  },
  {
    question: "Does LiveCat require OBS?",
    answer:
      "LiveCat is designed with its own presentation and live-production workflow. OBS may still be used optionally depending on the production setup.",
  },
  {
    question: "Does LiveCat require internet?",
    answer:
      "Core local presentation functionality is designed to work locally. Online services such as livestreaming and online APIs require an internet connection.",
  },
  {
    question: "How do I get API keys for Pixabay, YouTube or Bible versions?",
    answer:
      "See the API Keys section above for a link to each official site. For help, contact the owner: rrwebsolutions1998@gmail.com or 09358554398.",
  },
]

/**
 * LiveCat next to OBS Studio. Only what each has built in, stated fairly: no logos, no "better than" claims.
 * "yes" = built in, "extra" = possible with plugins, other programs or more setup, "no" = not built in.
 */
export type CompareMark = "yes" | "extra" | "no"

export const compareIntro =
  "OBS Studio is a great tool for cameras and streaming. LiveCat adds what a church service needs on top: lyrics, Bible, presentations and the service order, all in the same app."

export const compareColumns = { livecat: "LiveCat", others: "OBS Studio" }

export const comparison: { feature: string; livecat: CompareMark; others: CompareMark; note?: string }[] = [
  { feature: "Cameras, scenes and transitions", livecat: "yes", others: "yes" },
  { feature: "Livestream and recording", livecat: "yes", others: "yes" },
  { feature: "Projector and TV outputs", livecat: "yes", others: "yes" },
  { feature: "Song lyrics library", livecat: "yes", others: "extra", note: "Plugin or another program" },
  { feature: "Bible verses", livecat: "yes", others: "extra", note: "Plugin or another program" },
  { feature: "PowerPoint presentations", livecat: "yes", others: "extra", note: "Window or screen capture" },
  { feature: "Lyrics as a lower third on the livestream", livecat: "yes", others: "extra", note: "Set up by hand" },
  { feature: "Service order and schedule", livecat: "yes", others: "no" },
  { feature: "AI Auto Director: several shots from one camera", livecat: "yes", others: "no" },
  { feature: "Control from a phone or tablet", livecat: "yes", others: "extra", note: "Needs a separate remote app" },
]

export const compareFootnote =
  "Compared on built-in features. Plugins and other programs can add more to OBS Studio. Already using OBS Studio? LiveCat can send its Program picture, lyrics included, to an OBS window."

/** Where to get each API key LiveCat asks for (Settings in the app), with the owner's contact for help. */
export const apiKeysIntro =
  "Some online features use your church's own API key. Get each key from the official site below, then paste it in LiveCat where it asks."

export const apiKeys: {
  name: string
  usedFor: string
  href: string
  linkLabel: string
  getKey: string[]
  inLiveCat: string[]
  note?: string
}[] = [
  {
    name: "Pixabay",
    usedFor: "Free background videos",
    href: "https://pixabay.com/api/docs/",
    linkLabel: "pixabay.com/api/docs",
    getKey: [
      "Create a free account at pixabay.com, or sign in.",
      "Open pixabay.com/api/docs.",
      "Under Parameters, find \"key (required)\": your API key is shown there. Copy it.",
    ],
    inLiveCat: [
      "Open Settings → Integrations → Pixabay.",
      "Click Set Key… and paste the key, then OK.",
      "LiveCat checks the key with Pixabay before saving it.",
    ],
  },
  {
    name: "YouTube Data API v3",
    usedFor: "Searching YouTube by words",
    href: "https://console.cloud.google.com/apis/library/youtube.googleapis.com",
    linkLabel: "Google Cloud console",
    getKey: [
      "Open the Google Cloud console and sign in with a Google account.",
      "Create a project (top bar → Select a project → New project).",
      "APIs & Services → Library → search \"YouTube Data API v3\" → Enable.",
      "APIs & Services → Credentials → Create credentials → API key. Copy it.",
    ],
    inLiveCat: [
      "Open Settings → Integrations → Lyrics → YouTube Reference.",
      "Click Set Key…, paste the key, then OK.",
      "Or use the YouTube API Key… button in the YouTube search.",
    ],
    note: "Pasting YouTube links works without a key.",
  },
  {
    name: "ESV API",
    usedFor: "English Standard Version Bible",
    href: "https://api.esv.org/",
    linkLabel: "api.esv.org",
    getKey: [
      "Open api.esv.org and create an account, or sign in.",
      "Create an API application (your church's name and how you will use it).",
      "Copy the API key (token) of that application.",
    ],
    inLiveCat: [
      "In Bible, click the Bible Versions button (sliders icon).",
      "Paste the key in \"ESV API key\".",
      "Select ESV, click Set Up…, then Test.",
    ],
    note: "Read the ESV API terms for church use.",
  },
  {
    name: "NLT API",
    usedFor: "New Living Translation Bible",
    href: "https://api.nlt.to/",
    linkLabel: "api.nlt.to",
    getKey: [
      "Open api.nlt.to.",
      "Sign up for an API key with your e-mail address.",
      "Copy the key you receive.",
    ],
    inLiveCat: [
      "In Bible, click the Bible Versions button (sliders icon).",
      "Paste the key in \"NLT API key\".",
      "Select NLT, click Set Up…, then Test.",
    ],
  },
  {
    name: "API.Bible",
    usedFor: "Other licensed Bible versions",
    href: "https://scripture.api.bible/",
    linkLabel: "scripture.api.bible",
    getKey: [
      "Open scripture.api.bible and sign up, or sign in.",
      "Create an app and copy its API key.",
      "Open the list of Bibles in your account and copy the Bible ID of the version your church may use.",
    ],
    inLiveCat: [
      "In Bible, click the Bible Versions button (sliders icon).",
      "Paste the key in \"API.Bible key\".",
      "Select or add the version, click Set Up…, choose API.Bible, paste the Bible ID, then Test.",
    ],
  },
]

export const apiKeysFootnote =
  "These sites sometimes change their pages. If a step looks different, or you need help, contact the owner below."

export const ownerContact = { email: "rrwebsolutions1998@gmail.com", phone: "09358554398" }
