import {
  FcStart,
  FcMultipleSmartphones,
  FcFlashOn,
  FcRating,
  FcLandscape,
  FcGlobe,
  FcIdea,
  FcElectronics,
  FcMusic,
  FcSportsMode,
} from "react-icons/fc";

// Kids avatar artwork: download from https://www.vecteezy.com/free-vector/kids-avatar
// and save as public/avatars/<id>.png (or .svg — update `image` below to match).
// Free licence requires attribution — see README "Credits".
// Until an image file exists, the Fc icon is used as a fallback.
export const AVATARS = [
  { id: "rocket", image: "/avatars/rocket.png", Icon: FcStart, name: "Rocket", color: "#6366F1" },
  { id: "pixel", image: "/avatars/pixel.png", Icon: FcMultipleSmartphones, name: "Pixel", color: "#A855F7" },
  { id: "bolt", image: "/avatars/bolt.png", Icon: FcFlashOn, name: "Bolt", color: "#F59E0B" },
  { id: "star", image: "/avatars/star.png", Icon: FcRating, name: "Star", color: "#EAB308" },
  { id: "scout", image: "/avatars/scout.png", Icon: FcLandscape, name: "Scout", color: "#F97316" },
  { id: "globe", image: "/avatars/globe.png", Icon: FcGlobe, name: "Globe", color: "#64748B" },
  { id: "spark", image: "/avatars/spark.png", Icon: FcIdea, name: "Spark", color: "#10B981" },
  { id: "robot", image: "/avatars/robot.png", Icon: FcElectronics, name: "Bot", color: "#06B6D4" },
  { id: "melody", image: "/avatars/melody.png", Icon: FcMusic, name: "Melody", color: "#EC4899" },
  { id: "dash", image: "/avatars/dash.png", Icon: FcSportsMode, name: "Dash", color: "#84CC16" },
];

export function getAvatar(id) {
  return AVATARS.find((a) => a.id === id) ?? AVATARS[0];
}
