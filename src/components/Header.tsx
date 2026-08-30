"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/site";

interface HeaderProps {
  locale: Locale;
  nav: { work: string; internalAi: string; automations: string; websites: string; blog: string; about: string };
  contactCta: string;
  homeHref: string;
}

const NAV_ITEMS: { key: keyof HeaderProps["nav"]; href: string }[] = [
  { key: "work", href: "/work" },
  { key: "internalAi", href: "/internal-ai" },
  { key: "automations", href: "/automations" },
  { key: "websites", href: "/websites" },
  { key: "blog", href: "/blog" },
  { key: "about", href: "/about" },
];

function localeHref(locale: Locale, path: string) {
  return locale === "th" ? path : `/en${path === "/" ? "" : path}`;
}

export default function Header({ locale, nav, contactCta, homeHref }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  // Route to the counterpart locale at the same path (e.g. /websites <-> /en/websites).
  const counterpart =
    locale === "th"
      ? `/en${pathname === "/" ? "" : pathname}`
      : pathname.replace(/^\/en/, "");

  return (
    <header className="site-header">
      <div className="wrap bar">
        <Link href={homeHref} className="wordmark" aria-label="DeeLabs">
          Dee<span>Labs</span>
        </Link>
        <nav className="main-nav" aria-label={locale === "th" ? "เมนูหลัก" : "Main navigation"}>
          <ul>
            {NAV_ITEMS.map(({ key, href }) => (
              <li key={key}>
                <Link href={localeHref(locale, href)}>{nav[key]}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <div className="locale-switch" role="group" aria-label="Language">
            <a
              href={locale === "th" ? "/" : counterpart}
              aria-current={locale === "th" ? "true" : undefined}
              lang={locale === "th" ? undefined : "th"}
            >
              ไทย
            </a>
            <a
              href={locale === "th" ? counterpart : "/en"}
              aria-current={locale === "en" ? "true" : undefined}
            >
              EN
            </a>
          </div>
          <Link href={localeHref(locale, "/contact")} className="btn btn-primary" style={{ padding: "8px 18px" }}>
            {contactCta}
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={locale === "th" ? "เปิดเมนู" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="tick" />
            <span className="tick" />
            <span className="tick" />
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={`mobile-panel${open ? " open" : ""}`}>
        <ul>
          {NAV_ITEMS.map(({ key, href }) => (
            <li key={key}>
              <Link href={localeHref(locale, href)} onClick={() => setOpen(false)}>
                {nav[key]}
              </Link>
            </li>
          ))}
          <li>
            <Link href={localeHref(locale, "/contact")} onClick={() => setOpen(false)} style={{ fontWeight: 600, color: "var(--signal-deep)" }}>
              {contactCta}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
