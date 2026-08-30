import { ContactPage } from "@/components/pages";
import { th } from "@/content/th";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("th", "/contact", th.contact.title, th.contact.description);

export default function Page() {
  return <ContactPage locale="th" d={th} />;
}
