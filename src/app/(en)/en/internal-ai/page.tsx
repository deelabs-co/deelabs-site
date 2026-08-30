import { InternalAiPage } from "@/components/pages";
import { en } from "@/content/en";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "/internal-ai", en.internalAi.title, en.internalAi.description);

export default function Page() {
  return <InternalAiPage locale="en" d={en} />;
}
