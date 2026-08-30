import { WorkPage } from "@/components/pages";
import { th } from "@/content/th";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("th", "/work", th.work.title, th.work.description);

export default function Page() {
  return <WorkPage locale="th" d={th} />;
}
