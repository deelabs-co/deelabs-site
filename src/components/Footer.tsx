import Link from "next/link";
import { SITE, localePath, type Locale } from "@/lib/site";
import type { th } from "@/content/th";

type Dict = typeof th;

export default function Footer({ locale, d }: { locale: Locale; d: Dict }) {
  const nav = [
    { href: "/work", label: d.nav.work },
    { href: "/internal-ai", label: d.nav.internalAi },
    { href: "/automations", label: d.nav.automations },
    { href: "/websites", label: d.nav.websites },
    { href: "/blog", label: d.nav.blog },
    { href: "/about", label: d.nav.about },
    { href: "/contact", label: d.nav.contactCta },
  ];

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <p className="wordmark" style={{ marginBottom: 12 }}>
              Dee<span>Labs</span>
            </p>
            <p style={{ color: "var(--ink-muted)", fontSize: "0.93rem", maxWidth: "42ch" }}>{d.footer.tagline}</p>
            <p className="mono" style={{ fontSize: "0.85rem" }}>
              {SITE.line} · {SITE.instagram}
            </p>
          </div>
          <div>
            <h4>{d.footer.explore}</h4>
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={localePath(locale, n.href)}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{d.footer.contact}</h4>
            <ul>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <a href={`tel:${SITE.phoneHref}`} className="mono">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href="https://line.me/R/ti/p/@deelabs" rel="noopener noreferrer" target="_blank">
                  LINE {SITE.line}
                </a>
              </li>
              <li>
                <a href="https://instagram.com/deelabs_th" rel="noopener noreferrer" target="_blank">
                  Instagram {SITE.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-legal">
          <strong className="mono" style={{ fontSize: "0.78rem" }}>
            {d.footer.legal}
          </strong>
          <br />
          {locale === "th" ? SITE.legalNameTh : SITE.legalNameEn} / {locale === "th" ? SITE.legalNameEn : SITE.legalNameTh}
          <br />
          {locale === "th" ? SITE.legalAddressTh : SITE.legalAddressEn}
          <br />
          © {new Date().getFullYear()} {SITE.name} · {d.footer.rights} · {SITE.domain}
        </div>
      </div>
    </footer>
  );
}
