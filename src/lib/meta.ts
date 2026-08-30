import type { Metadata } from "next";
import { SITE, localePath, type Locale } from "./site";

/** Unique title/description + canonical + OG for every page, in both locales. */
export function pageMeta(locale: Locale, path: string, title: string, description: string): Metadata {
  // The layout template is unreliable at the group root, so append the brand here.
  // Dictionary titles may already end with a brand token — strip it to avoid duplication.
  const brand = SITE.name;
  const stripped = title.replace(/\s*[|—]\s*DeeLabs\s*$/, "").trim();
  const fullTitle = stripped.includes(brand) ? stripped : `${stripped} | ${brand}`;
  const canonical = SITE.url + localePath(locale, path);
  const otherLocale: Locale = locale === "th" ? "en" : "th";
  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
      languages: {
        th: SITE.url + localePath("th", path),
        en: SITE.url + localePath("en", path),
        "x-default": SITE.url + localePath("th", path),
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE.name,
      locale: locale === "th" ? "th_TH" : "en_US",
      alternateLocale: locale === "th" ? "en_US" : "th_TH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function articleMeta(
  locale: Locale,
  slug: string,
  title: string,
  description: string,
  published: string
): Metadata {
  const base = pageMeta(locale, `/blog/${slug}`, title, description);
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: published,
    },
  };
}
