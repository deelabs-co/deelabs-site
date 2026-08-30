import { OgCard } from "@/lib/og";
import { en } from "@/content/en";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = en.work.title;

export default function Image() {
  return OgCard({
    kicker: "What we build",
    headline: "The work we build for Thai business — internal AI, automations, websites",
  });
}
