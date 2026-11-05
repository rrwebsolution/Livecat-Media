import {
  ArrowRightLeft,
  CalendarDays,
  Circle,
  ClipboardList,
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
  "One powerful multimedia platform for presentations, media, cameras, live production, and streaming."

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
]
