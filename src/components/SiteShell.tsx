import type { Metadata } from "next";
import "@/app/globals.css";
import { anuphan, plexMono } from "@/app/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { th } from "@/content/th";
import { en } from "@/content/en";
import { SITE, type Locale } from "@/lib/site";

export interface LayoutProps {
  locale: Locale;
}

/** Shared shell content used by both locale root layouts. */
export function Shell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const d = locale === "th" ? th : en;
  return (
    <>
      <a href="#main" className="skip-link">
        {locale === "th" ? "ไปที่เนื้อหาหลัก" : "Skip to content"}
      </a>
      <Header
        locale={locale}
        nav={d.nav}
        contactCta={d.nav.contactCta}
        homeHref={locale === "th" ? "/" : "/en"}
      />
      <main id="main">{children}</main>
      <Footer locale={locale} d={d} />
      <Analytics />
    </>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.name,
  icons: {
    icon: "/favicon.svg",
  },
};

export const fontVariables = `${anuphan.variable} ${plexMono.variable}`;
