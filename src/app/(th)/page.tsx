import { HomePage } from "@/components/pages";
import { th } from "@/content/th";
import { pageMeta } from "@/lib/meta";
import { getPosts } from "@/lib/blog";

export const metadata = pageMeta("th", "/", th.home.headline, th.home.sub);

export default function Page() {
  const posts = getPosts("th").map((p) => ({
    slug: p.slug,
    title: p.frontmatter.title,
    description: p.frontmatter.description,
    date: p.frontmatter.date,
    category: p.frontmatter.category,
  }));
  return <HomePage locale="th" d={th} posts={posts} />;
}
