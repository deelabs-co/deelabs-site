import { OgCard } from "@/lib/og";
import { th } from "@/content/th";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = th.work.title;

export default function Image() {
  return OgCard({
    kicker: "What we build",
    headline: "งานที่เราสร้างให้ธุรกิจไทย — AI app ภายในองค์กร ระบบอัตโนมัติ และเว็บไซต์",
  });
}
