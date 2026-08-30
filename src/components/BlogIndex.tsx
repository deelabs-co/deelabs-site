"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/site";
import type { th } from "@/content/th";
import { localePath } from "@/lib/site";

type Dict = typeof th;

export interface PostSummary {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: "poc" | "strategy" | "sales" | "choose";
}

const ORDER: (keyof Dict["blog"]["categories"])[] = ["all", "poc", "strategy", "sales", "choose"];

export default function BlogIndex({ locale, d, posts }: { locale: Locale; d: Dict; posts: PostSummary[] }) {
  const [cat, setCat] = useState<(typeof ORDER)[number]>("all");
  const shown = cat === "all" ? posts : posts.filter((p) => p.category === cat);

  return (
    <>
      <div className="wrap post-hero" style={{ borderBottom: "none", paddingBottom: 0 }}>
        <span className="eyebrow">{d.blog.eyebrow}</span>
        <h1>{d.blog.title}</h1>
        <p className="dek">{d.blog.dek}</p>
        <div className="chip-filter" role="group" aria-label={d.blog.eyebrow}>
          {ORDER.map((k) => (
            <button
              key={k}
              type="button"
              className="chip"
              aria-pressed={cat === k}
              onClick={() => setCat(k)}
            >
              {d.blog.categories[k]}
            </button>
          ))}
        </div>
      </div>
      <section className="band" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <div className="post-list">
            {shown.map((p) => (
              <Link key={p.slug} href={localePath(locale, `/blog/${p.slug}`)} className="post-card">
                <span className="meta">
                  {p.date} · {d.blog.categories[p.category]}
                </span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span style={{ color: "var(--signal-deep)", fontWeight: 600, fontSize: "0.9rem" }}>
                  {d.blog.readMore} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
