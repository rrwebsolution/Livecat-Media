import cameraShot from "@/assets/screenshots/features/camera.webp"
import presentationsShot from "@/assets/screenshots/features/presentations.webp"
import previewProgramShot from "@/assets/screenshots/features/preview-program.webp"
import recordingShot from "@/assets/screenshots/features/recording.webp"
import remoteShot from "@/assets/screenshots/features/remote.webp"
import scenesShot from "@/assets/screenshots/features/scenes.webp"
import scheduleShot from "@/assets/screenshots/features/schedule.webp"
import streamingShot from "@/assets/screenshots/features/streaming.webp"
import youtubeShot from "@/assets/screenshots/features/youtube.webp"
import type { ShotName } from "@/config/landing"

/** The app screenshots of the landing pages, each with a description of what it shows. */
export const shots: Record<ShotName, { src: string; alt: string }> = {
  presentations: { src: presentationsShot, alt: "LiveCat Multimedia showing Bible verses as slide cards, with the live card marked." },
  youtube: { src: youtubeShot, alt: "The LiveCat Videos library with its Local, YouTube and Backgrounds tabs." },
  previewProgram: { src: previewProgramShot, alt: "The LiveCat Preview and Program monitors with the TAKE button between them." },
  camera: { src: cameraShot, alt: "The LiveCat scene editor with a camera layer in its list of sources." },
  scenes: { src: scenesShot, alt: "The LiveCat Scenes page with saved layouts such as Worship, Camera + Lyrics and Sermon." },
  streaming: { src: streamingShot, alt: "The LiveCat Stream page with the destination, server and video quality settings." },
  recording: { src: recordingShot, alt: "The LiveCat Stream page with the Start Recording button in the top bar." },
  schedule: { src: scheduleShot, alt: "The LiveCat Services page with a saved service and templates." },
  remote: { src: remoteShot, alt: "LiveCat Remote on a tablet, with the service schedule and a TAKE button." },
}
