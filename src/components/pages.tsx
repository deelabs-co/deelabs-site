import Link from "next/link";
import Reveal from "@/components/Reveal";
import PlanTable from "@/components/PlanTable";
import type { th } from "@/content/th";
import type { Locale } from "@/lib/site";
import { localePath } from "@/lib/site";

type Dict = typeof th;

export function PageHero({ eyebrow, title, dek }: { eyebrow: string; title: string; dek?: string }) {
  return (
    <div className="wrap post-hero">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {dek ? <p className="dek">{dek}</p> : null}
    </div>
  );
}

/* ---------- Home ---------- */

export function HomePage({ locale, d, posts }: { locale: Locale; d: Dict; posts: { slug: string; title: string; description: string; date: string; category: string }[] }) {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow">{d.home.eyebrow}</span>
          <h1>{d.home.headline}</h1>
          <p className="dek">{d.home.sub}</p>

          <p className="mono" style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--ink-muted)", margin: "36px 0 12px" }}>
            {d.home.doorsLabel}
          </p>
          <div className="doors">
            <Link href={localePath(locale, "/internal-ai")} className="door door-enterprise">
              <span className="door-kicker">{d.home.doorEnterprise.kicker}</span>
              <h2>{d.home.doorEnterprise.title}</h2>
              <p className="door-desc">{d.home.doorEnterprise.desc}</p>
              <ul>
                {d.home.doorEnterprise.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <span className="door-cta">
                {d.home.doorEnterprise.cta} <span className="arrow" aria-hidden="true">→</span>
              </span>
            </Link>
            <Link href={localePath(locale, "/websites")} className="door door-sme">
              <span className="door-kicker">{d.home.doorSme.kicker}</span>
              <h2>{d.home.doorSme.title}</h2>
              <p className="door-desc">{d.home.doorSme.desc}</p>
              <ul>
                {d.home.doorSme.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <span className="door-cta">
                {d.home.doorSme.cta} <span className="arrow" aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="band alt">
        <div className="wrap">
          <span className="eyebrow">{d.home.proof.eyebrow}</span>
          <h2>{d.home.proof.heading}</h2>
          <p className="dek">{d.home.proof.dek}</p>
          <div className="card-grid cols-3">
            {d.home.cards.map((c) => (
              <div className="card" key={c.title}>
                <span className={`tag tag-${c.tag}`}>{d.tags[c.tag]}</span>
                <h3 style={{ marginTop: 12 }}>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal>
            <div className="signal-band">
              <span className="eyebrow">{d.home.enterprise.eyebrow}</span>
              <h2>{d.home.enterprise.heading}</h2>
              <p className="dek">{d.home.enterprise.dek}</p>
              <ul>
                {d.home.enterprise.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p style={{ marginTop: 20 }}>
                <Link href={localePath(locale, "/internal-ai")} className="btn btn-brass">
                  {d.home.enterprise.cta}
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band alt">
        <div className="wrap">
          <span className="eyebrow">{d.home.sites.eyebrow}</span>
          <h2>{d.home.sites.heading}</h2>
          <p className="dek">{d.home.sites.dek}</p>
          <PlanTable
            d={d.websites}
            ctaLabel={d.home.sites.cta}
            ctaHref={localePath(locale, "/websites")}
          />
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <span className="eyebrow">{d.home.journal.eyebrow}</span>
          <h2>{d.home.journal.heading}</h2>
          <p className="dek">{d.home.journal.dek}</p>
          <div className="post-list">
            {posts.slice(0, 2).map((p) => (
              <Link
                key={p.slug}
                href={localePath(locale, `/blog/${p.slug}`)}
                className="post-card"
                lang={p.category}
              >
                <span className="meta">{p.date}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 24 }}>
            <Link href={localePath(locale, "/blog")} className="btn btn-ghost">
              {d.home.journal.cta}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

/* ---------- Work ---------- */

export function WorkPage({ locale, d }: { locale: Locale; d: Dict }) {
  return (
    <>
      <PageHero eyebrow={d.work.eyebrow} title={d.work.h1} dek={d.work.dek} />
      <section className="band" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="card-grid">
            {d.work.cards.map((c) => (
              <div className="card" key={c.title}>
                <span className={`tag tag-${c.tag}`}>{d.tags[c.tag]}</span>
                <h3 style={{ marginTop: 12 }}>{c.title}</h3>
                <p>
                  <strong>{c.pain}</strong>
                </p>
                <p>{c.what}</p>
                <p style={{ marginBottom: 0 }}>{c.pilot}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="band alt">
        <div className="wrap">
          <h2>{d.work.portfolio.heading}</h2>
          <p className="dek">{d.work.portfolio.dek}</p>
          <div className="card-grid cols-3">
            {d.work.portfolio.items.map((it) => (
              <div className="card" key={it.name}>
                <span className={`tag tag-${it.tag}`}>{d.tags[it.tag]}</span>
                <h3 style={{ marginTop: 12 }}>
                  {it.url ? (
                    <a href={it.url} target="_blank" rel="noopener noreferrer">
                      {it.name}
                    </a>
                  ) : (
                    it.name
                  )}
                </h3>
                <p>{it.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 16, fontSize: "0.88rem", color: "var(--ink-muted)" }}>{d.work.portfolio.demoNote}</p>
        </div>
      </section>
    </>
  );
}

/* ---------- Internal AI ---------- */

export function InternalAiPage({ locale, d }: { locale: Locale; d: Dict }) {
  const c = d.internalAi;
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.h1} dek={c.dek} />
      <section className="band" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="card-grid">
            {c.audiences.map((a) => (
              <div className="card" key={a.role}>
                <h3>{a.role}</h3>
                <p>{a.pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="band alt">
        <div className="wrap">
          <h2>{c.approach.heading}</h2>
          <div className="card-grid">
            {c.approach.items.map((it) => (
              <div className="card" key={it.title}>
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <Reveal>
            <div className="signal-band">
              <h2>{c.pilot.heading}</h2>
              <p className="dek">{c.pilot.dek}</p>
              <div className="card-grid">
                {c.pilot.steps.map((s) => (
                  <div key={s.title} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 12, padding: "18px" }}>
                    <h3 style={{ color: "#f4efe3" }}>{s.title}</h3>
                    <p style={{ color: "#cdc7bd", marginBottom: 0 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 24 }}>
                <Link href={localePath(locale, "/contact")} className="btn btn-brass">
                  {c.pilot.cta}
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="band alt">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2>{c.cta.heading}</h2>
          <p className="dek" style={{ margin: "0 auto 24px" }}>
            {c.cta.dek}
          </p>
          <Link href={localePath(locale, "/contact")} className="btn btn-primary">
            {c.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}

/* ---------- Automations ---------- */

export function AutomationsPage({ locale, d }: { locale: Locale; d: Dict }) {
  const c = d.automations;
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.h1} dek={c.dek} />
      <section className="band" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="card-grid">
            {c.channels.map((ch) => (
              <div className="card" key={ch.name}>
                <h3>{ch.name}</h3>
                <p>{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="band alt">
        <div className="wrap">
          <span className="eyebrow">{c.demo.eyebrow}</span>
          <h2>{c.demo.heading}</h2>
          <p className="dek">{c.demo.dek}</p>
          <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {c.demo.steps.map((s) => (
              <div className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20 }}>
            <strong className="mono" style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              {c.demo.verticalsLabel}:
            </strong>{" "}
            {c.demo.verticals.join(" · ")}
          </p>
          <p style={{ fontSize: "0.88rem", color: "var(--ink-muted)" }}>{c.demo.note}</p>
        </div>
      </section>
      <section className="band">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2>{c.cta.heading}</h2>
          <p className="dek" style={{ margin: "0 auto 24px" }}>
            {c.cta.dek}
          </p>
          <Link href={localePath(locale, "/contact")} className="btn btn-primary">
            {c.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}

/* ---------- Websites ---------- */

export function WebsitesPage({ locale, d }: { locale: Locale; d: Dict }) {
  const c = d.websites;
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.h1} dek={c.dek} />
      <section className="band" style={{ paddingTop: 12 }}>
        <div className="wrap">
          <PlanTable d={c} ctaLabel={c.cta.button} ctaHref={localePath(locale, "/contact")} />
        </div>
      </section>
      <section className="band alt">
        <div className="wrap">
          <h2>{c.included.heading}</h2>
          <ul style={{ maxWidth: "60ch", paddingLeft: "1.2em" }}>
            {c.included.items.map((it) => (
              <li key={it} style={{ marginBottom: 8 }}>
                {it}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

/* ---------- About ---------- */

export function AboutPage({ d }: { locale: Locale; d: Dict }) {
  const c = d.about;
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.h1} />
      <section className="band" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <h2>{c.mission.heading}</h2>
          <p className="dek">{c.mission.body}</p>
          <div className="card-grid" style={{ marginTop: 32 }}>
            {c.how.items.map((it) => (
              <div className="card" key={it.title}>
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="band alt">
        <div className="wrap" style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <div>
            <h2>{c.juniors.heading}</h2>
            <p className="dek">{c.juniors.body}</p>
          </div>
          <div>
            <h2>{c.citizenship.heading}</h2>
            <p className="dek">{c.citizenship.body}</p>
          </div>
          <div>
            <h2>{c.founder.heading}</h2>
            <p className="dek">{c.founder.body}</p>
            <h3 style={{ marginTop: 24 }}>{c.legal.heading}</h3>
            <p style={{ color: "var(--ink-muted)" }}>{c.legal.body}</p>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- Contact ---------- */

import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export function ContactPage({ d }: { locale: Locale; d: Dict }) {
  const c = d.contact;
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.h1} dek={c.dek} />
      <section className="band" style={{ paddingTop: 12 }}>
        <div className="wrap contact-layout">
          <div>
            <ContactForm d={c} />
          </div>
          <div>
            <h2 style={{ fontSize: "1.3rem" }}>{c.channels.heading}</h2>
            <ul className="channel-list">
              <li>
                <span className="k">LINE</span>
                <span>
                  <a href="https://line.me/R/ti/p/@deelabs" target="_blank" rel="noopener noreferrer">
                    {SITE.line}
                  </a>
                  <br />
                  <small style={{ color: "var(--ink-muted)" }}>{c.channels.lineNote}</small>
                </span>
              </li>
              <li>
                <span className="k">{d.footer.emailLabel}</span>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <span className="k">{d.footer.phoneLabel}</span>
                <a href={`tel:${SITE.phoneHref}`} className="mono">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <span className="k">{d.footer.igLabel}</span>
                <a href="https://instagram.com/deelabs_th" target="_blank" rel="noopener noreferrer">
                  {SITE.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
