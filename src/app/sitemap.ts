import type { MetadataRoute } from "next";
import { ROUTES, SITE, localePath } from "@/lib/site";
import { getPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];
  for (const route of ROUTES) {
    for (const locale of ["th", "en"] as const) {
      entries.push({
        url: SITE.url + localePath(locale, route),
        lastModified: now,
        changeFrequency: route === "/" ? "weekly" : "monthly",
        priority: route === "/" ? 1 : 0.8,
        alternates: {
          languages: {
            th: SITE.url + localePath("th", route),
            en: SITE.url + localePath("en", route),
          },
        },
      });
    }
  }
  // Blog posts in both locales
  for (const locale of ["th", "en"] as const) {
    for (const post of getPosts(locale)) {
      const url = SITE.url + localePath(locale, `/blog/${post.slug}`);
      entries.push({
        url,
        lastModified: new Date(post.frontmatter.date),
        changeFrequency: "yearly",
        priority: 0.6,
        alternates: {
          languages: {
            th: SITE.url + localePath("th", `/blog/${post.frontmatter.lang === "th" ? post.slug : post.frontmatter.counterpart}`),
            en: SITE.url + localePath("en", `/blog/${post.frontmatter.lang === "en" ? post.slug : post.frontmatter.counterpart}`),
          },
        },
      });
    }
  }
  return entries;
}
