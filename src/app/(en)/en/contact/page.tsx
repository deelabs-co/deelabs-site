import { ContactPage } from "@/components/pages";
import { en } from "@/content/en";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "/contact", en.contact.title, en.contact.description);

export default function Page() {
  return <ContactPage locale="en" d={en} />;
}
