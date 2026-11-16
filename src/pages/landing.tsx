import { churchPage, featuresPage, lyricsPage, productionPage } from "@/config/landing"
import { LandingView } from "./LandingView"

export const FeaturesPage = () => <LandingView page={featuresPage} />
export const ChurchPage = () => <LandingView page={churchPage} />
export const LyricsPage = () => <LandingView page={lyricsPage} />
export const ProductionPage = () => <LandingView page={productionPage} />
