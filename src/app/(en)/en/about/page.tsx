import { AboutPage } from "@/components/pages";
import { en } from "@/content/en";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "/about", en.about.title, en.about.description);

export default function Page() {
  return <AboutPage locale="en" d={en} />;
}
