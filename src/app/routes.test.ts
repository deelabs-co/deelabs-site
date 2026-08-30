import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { ROUTES } from "@/lib/site";

const APP = path.join(process.cwd(), "src", "app");
const TH_DIR = path.join(APP, "(th)");
const EN_DIR = path.join(APP, "(en)", "en");

/** Map a locale-relative route to its expected file in a route group. */
function routeFile(groupDir: string, route: string): string {
  const rel = route === "/" ? "page.tsx" : `${route}/page.tsx`;
  return path.join(groupDir, rel);
}

describe("every Thai route has an /en counterpart", () => {
  for (const route of ROUTES) {
    it(`mirrors ${route}`, () => {
      expect(fs.existsSync(routeFile(TH_DIR, route)), `missing Thai route file for ${route}`).toBe(true);
      expect(fs.existsSync(routeFile(EN_DIR, route)), `missing English route file for ${route}`).toBe(true);
    });
  }

  it("sets lang=th in the Thai root layout and lang=en in the English one", () => {
    expect(fs.readFileSync(path.join(TH_DIR, "layout.tsx"), "utf8")).toMatch(/<html lang="th"/);
    expect(fs.readFileSync(path.join(EN_DIR, "../layout.tsx"), "utf8")).toMatch(/<html lang="en"/);
  });
});

describe("blog frontmatter validity", () => {
  const BLOG = path.join(process.cwd(), "src", "content", "blog");
  const locales = ["th", "en"] as const;

  function posts(locale: (typeof locales)[number]): { slug: string; fm: Record<string, unknown>; body: string }[] {
    const dir = path.join(BLOG, locale);
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => {
        const raw = fs.readFileSync(path.join(dir, f), "utf8");
        const { data, content } = matter(raw);
        return { slug: f.replace(/\.md$/, ""), fm: data, body: content };
      });
  }

  it("ships at least 4 posts per locale", () => {
    for (const locale of locales) {
      expect(posts(locale).length).toBeGreaterThanOrEqual(4);
    }
  });

  it("has required frontmatter fields on every post", () => {
    for (const locale of locales) {
      for (const p of posts(locale)) {
        expect(p.fm.title, `${p.slug} title`).toBeTruthy();
        expect(p.fm.description, `${p.slug} description`).toBeTruthy();
        expect(p.fm.date, `${p.slug} date`).toBeTruthy();
        expect(["poc", "strategy", "sales", "choose"]).toContain(p.fm.category);
        expect(["pilot", "site"]).toContain(p.fm.cta);
        expect(p.fm.lang).toBe(locale);
        expect(p.fm.counterpart, `${p.slug} counterpart`).toBeTruthy();
      }
    }
  });

  it("pairs every post with an existing counterpart in the other locale", () => {
    for (const locale of locales) {
      const other = locale === "th" ? "en" : "th";
      const slugs = new Set(posts(other).map((p) => p.slug));
      for (const p of posts(locale)) {
        expect(slugs.has(String(p.fm.counterpart)), `${p.slug} -> ${p.fm.counterpart}`).toBe(true);
      }
    }
  });

  it("bodies are long-form (800–1500 English words; Thai measured by character volume)", () => {
    for (const p of posts("en")) {
      const words = p.body.split(/\s+/).filter(Boolean).length;
      expect(words, `${p.slug}: ${words} words`).toBeGreaterThanOrEqual(800);
      expect(words).toBeLessThanOrEqual(1600);
    }
    for (const p of posts("th")) {
      // Thai has no whitespace word breaks; use length as the long-form proxy.
      expect(p.body.length, `${p.slug}: ${p.body.length} chars`).toBeGreaterThanOrEqual(2800);
    }
  });

  it("contains at least one table or diagram per post", () => {
    for (const locale of locales) {
      for (const p of posts(locale)) {
        const hasTable = p.body.includes("|") && p.body.split("\n").some((l) => /^\s*\|[-\s|:]+\|\s*$/.test(l));
        const hasDiagram = p.body.includes("```");
        expect(hasTable || hasDiagram, `${p.slug} lacks a table/diagram`).toBe(true);
      }
    }
  });
});
