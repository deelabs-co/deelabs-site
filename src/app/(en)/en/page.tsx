import { HomePage } from "@/components/pages";
import { en } from "@/content/en";
import { pageMeta } from "@/lib/meta";
import { getPosts } from "@/lib/blog";

export const metadata = pageMeta("en", "/", en.home.headline, en.home.sub);

export default function Page() {
  const posts = getPosts("en").map((p) => ({
    slug: p.slug,
    title: p.frontmatter.title,
    description: p.frontmatter.description,
    date: p.frontmatter.date,
    category: p.frontmatter.category,
  }));
  return <HomePage locale="en" d={en} posts={posts} />;
}
