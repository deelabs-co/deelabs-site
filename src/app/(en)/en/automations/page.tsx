import { AutomationsPage } from "@/components/pages";
import { en } from "@/content/en";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "/automations", en.automations.title, en.automations.description);

export default function Page() {
  return <AutomationsPage locale="en" d={en} />;
}
