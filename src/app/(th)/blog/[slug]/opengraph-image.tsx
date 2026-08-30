import { OgCard } from "@/lib/og";
import { getPost } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPost("th", params.slug);
  return OgCard({
    kicker: "บทความ · Journal",
    headline: post ? post.frontmatter.title : "DeeLabs Journal",
  });
}
