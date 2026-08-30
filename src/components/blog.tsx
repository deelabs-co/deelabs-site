import Link from "next/link";
import type { Post } from "@/lib/blog";
import type { th } from "@/content/th";
import type { Locale } from "@/lib/site";
import { localePath } from "@/lib/site";

type Dict = typeof th;

export function PostView({ locale, d, post }: { locale: Locale; d: Dict; post: Post }) {
  const fm = post.frontmatter;
  const counterpartHref = localePath(locale === "th" ? "en" : "th", `/blog/${fm.counterpart}`);
  const isPilot = fm.cta === "pilot";
  return (
    <article>
      <div className="wrap post-hero">
        <span className="meta">
          {new Date(fm.date).toLocaleDateString(locale === "th" ? "th-TH" : "en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {d.blog.categories[fm.category]}
        </span>
        <h1>{fm.title}</h1>
        <p className="dek">{fm.description}</p>
        <p className="byline">
          {d.blog.bylinePrefix} <strong>{d.blog.founderName}</strong> · {post.words}{" "}
          {locale === "th" ? "คำ" : "words"}
        </p>
      </div>
      <div className="wrap">
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className={`prose post-cta ${isPilot ? "enterprise" : "sme"}`} style={{ maxWidth: 720 }}>
          {isPilot ? (
            <>
              <h2>{d.internalAi.cta.heading}</h2>
              <p>{d.internalAi.cta.dek}</p>
              <Link href={localePath(locale, "/contact")} className="btn btn-primary">
                {d.blog.ctaPilot}
              </Link>
            </>
          ) : (
            <>
              <h2>{d.websites.cta.heading}</h2>
              <p>{d.websites.dek}</p>
              <Link href={localePath(locale, "/contact")} className="btn btn-primary">
                {d.blog.ctaSite}
              </Link>
            </>
          )}
        </div>
        <p style={{ maxWidth: 720, marginTop: 24 }}>
          <a href={counterpartHref} lang={locale === "th" ? "en" : "th"}>
            {locale === "th" ? "Read this article in English" : "อ่านบทความนี้เป็นภาษาไทย"}
          </a>
        </p>
      </div>
    </article>
  );
}
