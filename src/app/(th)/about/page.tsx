import { AboutPage } from "@/components/pages";
import { th } from "@/content/th";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("th", "/about", th.about.title, th.about.description);

export default function Page() {
  return <AboutPage locale="th" d={th} />;
}
