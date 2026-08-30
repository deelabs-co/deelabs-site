import { PostView } from "@/components/blog";
import { notFound } from "next/navigation";
import { th } from "@/content/th";
import { articleMeta } from "@/lib/meta";
import { getPost, getPosts } from "@/lib/blog";
import { SITE } from "@/lib/site";
import { localePath } from "@/lib/site";

export function generateStaticParams() {
  return getPosts("th").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost("th", slug);
  if (!post) return {};
  return articleMeta("th", slug, post.frontmatter.title, post.frontmatter.description, post.frontmatter.date);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost("th", slug);
  if (!post) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    inLanguage: "th",
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    mainEntityOfPage: SITE.url + localePath("th", `/blog/${slug}`),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PostView locale="th" d={th} post={post} />
    </>
  );
}
