/**
 * The words of the landing pages (/features and the three topic pages). Only what LiveCat really does, taken from
 * the user manual. Each page answers a different question, so the pages do not repeat each other.
 */
export type ShotName =
  | "presentations"
  | "youtube"
  | "previewProgram"
  | "camera"
  | "scenes"
  | "streaming"
  | "recording"
  | "schedule"
  | "remote"

export type LandingSection = { heading: string; text: string; points?: string[]; shot?: ShotName }

export type LandingPage = {
  path: string
  eyebrow: string
  h1: string
  intro: string
  sections: LandingSection[]
  /** A short question-and-answer list at the end of the page */
  questions?: { question: string; answer: string }[]
  /** Other pages to read next */
  related: string[]
}

export const pageLabels: Record<string, string> = {
  "/": "Home",
  "/features": "All features",
  "/download": "Download",
  "/church-presentation-software": "Church presentation software",
  "/worship-lyrics-software": "Worship lyrics software",
  "/live-production-software": "Live production software",
  "/user-manual": "User manual",
}

export const featuresPage: LandingPage = {
  path: "/features",
  eyebrow: "Features",
  h1: "Everything LiveCat Multimedia can do",
  intro:
    "LiveCat Multimedia puts presentation and live production in one Windows and macOS app: lyrics, Bible verses, PowerPoint and media on one side, cameras, scenes, livestreaming and recording on the other. Here is each part in detail.",
  sections: [
    {
      heading: "Song lyrics",
      text: "Search the song library, click a song, and its slides appear as cards. Click a lyric card and it goes live; use the arrow keys for the next and previous slide.",
      points: [
        "Add songs by typing or pasting the words, or import them from a lyrics file or from YouTube",
        "Lyrics are reviewed before saving and then work offline",
        "Font, size, color, shadow and outline are set once for every song",
      ],
      shot: "presentations",
    },
    {
      heading: "Bible verses",
      text: "Choose a version, type a reference such as John 3:16 or pick the book and chapter, and click the verse. Long verses split across slides by themselves.",
      points: [
        "Add more Bible versions, including ESV, NLT and API.Bible versions with your own API key",
        "Choose where the reference and version name appear",
      ],
    },
    {
      heading: "PowerPoint presentations",
      text: "Import a .pptx or .ppt file. Slides look exactly as they do in PowerPoint, and NEXT moves Preview and Program together.",
    },
    {
      heading: "Videos, images and YouTube",
      text: "Play local videos and images, or add YouTube videos through the official embedded player. Send media to Preview, show it fullscreen, add it to the service, or use it as the background behind lyrics.",
      points: [
        "Back and forward 10 seconds, play, pause, stop, volume, mute and loop",
        "Preview sound plays only in your headphones, never in the room",
        "YouTube videos need an internet connection while they play",
      ],
      shot: "youtube",
    },
    {
      heading: "Preview and Program",
      text: "You prepare in Preview, and the audience sees Program. Nothing reaches the projector until you press TAKE, so mistakes stay on your own screen.",
      shot: "previewProgram",
    },
    {
      heading: "Scenes and cameras",
      text: "A scene is a saved screen layout, such as Camera + Lyrics or Worship. Add cameras, capture devices, lyrics, images, videos, presentations and text, then switch scenes with a transition.",
      points: [
        "Webcams and compatible video capture devices",
        "Separate Layouts: the church TV can keep one scene while the livestream keeps another",
        "AI Auto Director: several shots from one camera",
      ],
      shot: "scenes",
    },
    {
      heading: "Projectors and TVs",
      text: "Screens are listed by their real name, for example TCL SMART TV. Show Program fullscreen or windowed, and the output comes back by itself when a loose cable is reconnected.",
    },
    {
      heading: "Livestreaming",
      text: "Stream the Program picture to Facebook, YouTube or any RTMP server. Run the Pre-stream Check first; if the internet drops, the stream tries to reconnect.",
      shot: "streaming",
    },
    {
      heading: "Recording",
      text: "Record Program to an MP4 file on the computer, at the same time as the livestream or on its own. Both use the same audio mixer for microphones, aux and media.",
      shot: "recording",
    },
    {
      heading: "Service schedule",
      text: "Build this week's running order from the library, drag items to reorder them, and step through with Page Up and Page Down.",
      shot: "schedule",
    },
    {
      heading: "LiveCat Remote",
      text: "Control authorized features from phones and tablets on the same Wi-Fi. Scan a QR code to join, and choose what each device may do; new devices can control lyrics only.",
      shot: "remote",
    },
  ],
  related: ["/download", "/church-presentation-software", "/live-production-software", "/user-manual"],
}

export const churchPage: LandingPage = {
  path: "/church-presentation-software",
  eyebrow: "Church presentation software",
  h1: "Church presentation software for the whole Sunday service",
  intro:
    "Songs, Scripture, sermon slides, announcement videos and the livestream usually need several programs and several volunteers. LiveCat Multimedia runs them from one screen, in the order of your service.",
  sections: [
    {
      heading: "Plan the service once",
      text: "Open the Service page, choose this week's service or start a new one, and add songs, verses, slides and videos in order. During the service, Page Down moves to the next item.",
      shot: "schedule",
    },
    {
      heading: "Everything the congregation needs to see",
      text: "Worship lyrics, Bible passages, PowerPoint sermon slides, images, videos and YouTube clips all come from the same library and go to the same projector.",
      points: [
        "Lyrics and Bible verses go live with a single click",
        "PowerPoint slides keep their own design and fonts",
        "Background videos and images run behind the lyrics",
      ],
    },
    {
      heading: "No surprises on the big screen",
      text: "Every item can be checked in Preview before you press TAKE. Need a clean screen? B shows black, W hides the text, and L turns lyrics on and off.",
      shot: "previewProgram",
    },
    {
      heading: "Projector, TVs and the livestream together",
      text: "Send Program to the projector and the TVs in the hall, and stream or record the same picture. Scenes add the pastor's camera next to the lyrics for people watching online.",
    },
    {
      heading: "Easy for volunteers",
      text: "The user manual walks a new volunteer through a Sunday step by step: what to do 30 minutes before, during the service, and after people leave. Songs, services and settings save automatically.",
    },
  ],
  questions: [
    {
      question: "Can LiveCat replace several programs at the media desk?",
      answer:
        "LiveCat combines presentation (lyrics, Bible, PowerPoint, media) with live production (cameras, scenes, streaming, recording), so many churches can run the service and the livestream from one app. OBS Studio can still be used alongside it if you want.",
    },
    {
      question: "Which computers does it run on?",
      answer: "Windows 10 and 11 (64-bit), and macOS 13 or newer on Apple Silicon (M1 or newer).",
    },
  ],
  related: ["/worship-lyrics-software", "/live-production-software", "/features", "/download"],
}

export const lyricsPage: LandingPage = {
  path: "/worship-lyrics-software",
  eyebrow: "Worship lyrics software",
  h1: "Worship lyrics software that keeps up with the band",
  intro:
    "The worship leader repeats the chorus, skips a verse, or adds a song at the last minute. LiveCat Multimedia lets the operator follow along with one click per slide, on the projector and the livestream at the same time.",
  sections: [
    {
      heading: "Find the song in seconds",
      text: "Open Library → Lyrics and type part of the song name, or press Ctrl+F. Favorite Lyrics keeps the songs your church sings most within reach.",
    },
    {
      heading: "One click per slide",
      text: "Each song shows as slide cards. Click the card being sung and it goes live straight away, or use → and ← to move through the song. With Separate Lyrics turned on, the slide waits in Preview until you press TAKE.",
      shot: "presentations",
    },
    {
      heading: "Add new songs your way",
      text: "Press ADD LYRICS and type or paste the words, or import them from a lyrics file or from YouTube. Lyrics are reviewed before saving, and saved songs work without the internet.",
    },
    {
      heading: "Readable on every screen",
      text: "Choose the font, thickness, size, color, position, shadow and outline once in Lyrics Typography, and every song follows it. Any font installed on the computer can be used.",
      points: [
        "Background videos and images behind the words",
        "Themes for different moments of the service",
        "Lyrics as a lower third on the livestream, over the camera",
      ],
    },
    {
      heading: "Control the lyrics from a phone",
      text: "With LiveCat Remote, a worship leader or volunteer can move the lyrics from a phone or tablet on the church Wi-Fi. New devices may control lyrics only until you give them more.",
      shot: "remote",
    },
  ],
  questions: [
    {
      question: "Do the lyrics work without the internet?",
      answer:
        "Yes. Saved songs are stored on the computer. Only online features, such as importing lyrics from YouTube, need a connection.",
    },
    {
      question: "Can the lyrics show on the livestream too?",
      answer:
        "Yes. Lyrics can be part of a scene, for example as a lower third over the camera, and that picture is what the livestream and the recording use.",
    },
  ],
  related: ["/church-presentation-software", "/features", "/download", "/user-manual"],
}

export const productionPage: LandingPage = {
  path: "/live-production-software",
  eyebrow: "Live production software",
  h1: "Live production and church livestream software",
  intro:
    "LiveCat Multimedia is a live production switcher and a presentation app in one. Cameras, scenes, the audio mixer, livestreaming and recording sit next to the lyrics and Bible verses they show.",
  sections: [
    {
      heading: "Cameras and capture devices",
      text: "Use webcams and compatible video capture devices as sources in your scenes. AI Auto Director can make several shots from one camera.",
      shot: "camera",
    },
    {
      heading: "Scenes and transitions",
      text: "Save layouts such as Worship, Camera + Lyrics or Sermon, and switch between them with a transition. With Separate Layouts, the TV in the hall and the livestream can each keep a different scene.",
      shot: "scenes",
    },
    {
      heading: "Livestream over RTMP",
      text: "Pick the platform, such as Facebook or YouTube, enter the stream key once, and choose the quality. 1080p at 30 FPS suits most churches; 720p helps on a slower computer or connection.",
      points: [
        "Pre-stream Check before going live",
        "Reconnects by itself if the internet drops",
        "Hardware or automatic encoder",
      ],
      shot: "streaming",
    },
    {
      heading: "Record while you stream",
      text: "Record Program to an MP4 file on the computer. Recording keeps going when the internet drops, so the service is still saved.",
      shot: "recording",
    },
    {
      heading: "Clean audio",
      text: "One mixer for microphones, aux, media and master feeds both the livestream and the recording. While a video or music plays, the microphones can mute themselves so room noise is not mixed in.",
    },
    {
      heading: "Works with OBS Studio",
      text: "Already using OBS Studio? LiveCat can send its Program picture, lyrics included, to a window that OBS captures.",
    },
  ],
  questions: [
    {
      question: "What upload speed do I need?",
      answer:
        "About 5 Mbps for a 720p livestream, and 10 Mbps or faster for 1080p. One hour of 1080p recording takes about 3 GB.",
    },
    {
      question: "Do I need OBS Studio?",
      answer:
        "No. LiveCat has its own cameras, scenes, streaming and recording. OBS Studio can still be used alongside it if your setup needs it.",
    },
  ],
  related: ["/features", "/church-presentation-software", "/download", "/user-manual"],
}

export const landingPages = [featuresPage, churchPage, lyricsPage, productionPage]
