import { WebsitesPage } from "@/components/pages";
import { en } from "@/content/en";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "/websites", en.websites.title, en.websites.description);

export default function Page() {
  return <WebsitesPage locale="en" d={en} />;
}
