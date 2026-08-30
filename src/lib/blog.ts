import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Locale } from "./site";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string; // ISO date
  category: "poc" | "strategy" | "sales" | "choose";
  /** Which CTA this post ends with: enterprise pilot or SME website. */
  cta: "pilot" | "site";
  lang: Locale;
  /** Slug of the counterpart post in the other locale. */
  counterpart: string;
}

export interface Post {
  slug: string;
  locale: Locale;
  frontmatter: PostFrontmatter;
  /** Raw markdown body. */
  markdown: string;
  /** Rendered HTML (in-repo content only — never user HTML). */
  html: string;
  /** Approximate word count of the body. */
  words: number;
}

function parsePost(locale: Locale, slug: string): Post | null {
  const file = path.join(BLOG_DIR, locale, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;
  if (!fm.title || !fm.description || !fm.date || !fm.category || !fm.cta || !fm.counterpart) {
    throw new Error(`Post ${locale}/${slug}.md is missing required frontmatter`);
  }
  // YAML parses bare dates into Date objects — normalise to an ISO string.
  fm.date = new Date(fm.date as unknown as Date).toISOString().slice(0, 10);
  const words = content.split(/\s+/).filter(Boolean).length;
  return {
    slug,
    locale,
    frontmatter: fm,
    markdown: content,
    html: marked.parse(content, { async: false }) as string,
    words,
  };
}

export function getPost(locale: Locale, slug: string): Post | null {
  try {
    return parsePost(locale, slug);
  } catch {
    return null;
  }
}

export function getPosts(locale: Locale): Post[] {
  const dir = path.join(BLOG_DIR, locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parsePost(locale, f.replace(/\.md$/, "")))
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export function getCounterpart(locale: Locale, slug: string): string | null {
  const post = getPost(locale, slug);
  return post ? post.frontmatter.counterpart : null;
}
