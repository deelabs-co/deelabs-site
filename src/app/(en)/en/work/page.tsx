import { WorkPage } from "@/components/pages";
import { en } from "@/content/en";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "/work", en.work.title, en.work.description);

export default function Page() {
  return <WorkPage locale="en" d={en} />;
}
