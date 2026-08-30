import { InternalAiPage } from "@/components/pages";
import { th } from "@/content/th";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("th", "/internal-ai", th.internalAi.title, th.internalAi.description);

export default function Page() {
  return <InternalAiPage locale="th" d={th} />;
}
