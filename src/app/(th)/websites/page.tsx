import { WebsitesPage } from "@/components/pages";
import { th } from "@/content/th";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("th", "/websites", th.websites.title, th.websites.description);

export default function Page() {
  return <WebsitesPage locale="th" d={th} />;
}
