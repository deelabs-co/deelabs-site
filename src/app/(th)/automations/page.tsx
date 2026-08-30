import { AutomationsPage } from "@/components/pages";
import { th } from "@/content/th";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("th", "/automations", th.automations.title, th.automations.description);

export default function Page() {
  return <AutomationsPage locale="th" d={th} />;
}
