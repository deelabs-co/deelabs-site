import { OgCard } from "@/lib/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "DeeLabs — Internal AI & done-for-you websites for Thai business";

export default function Image() {
  return OgCard({
    kicker: "AI-native · Thai team",
    headline: "The AI company for Thai business — from internal systems to websites that sell",
  });
}
