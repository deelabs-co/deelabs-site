import BlogIndex from "@/components/BlogIndex";
import { en } from "@/content/en";
import { pageMeta } from "@/lib/meta";
import { getPosts } from "@/lib/blog";

export const metadata = pageMeta("en", "/blog", en.blog.title, en.blog.description);

export default function Page() {
  const posts = getPosts("en").map((p) => ({
    slug: p.slug,
    title: p.frontmatter.title,
    description: p.frontmatter.description,
    date: p.frontmatter.date,
    category: p.frontmatter.category,
  }));
  return <BlogIndex locale="en" d={en} posts={posts} />;
}
