import { SITE } from "@/lib/site";

/**
 * Sticky contact strip (design contract §4): in flow via position: sticky;
 * bottom: 0 — never an overlay, no display toggling. Exactly three 44px-min
 * targets with the only signed contact channels. Rendered once in SiteShell
 * so both locales get it.
 */
export default function StickyContact({ aria }: { aria: string }) {
  return (
    <div className="sticky-contact" role="region" aria-label={aria}>
      <a
        href="https://line.me/R/ti/p/@deelabs"
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-link"
      >
        LINE {SITE.line}
      </a>
      <a href={`mailto:${SITE.email}`} className="sticky-link">
        {SITE.email}
      </a>
      <a href={`tel:${SITE.phoneHref}`} className="sticky-link mono">
        {SITE.phone}
      </a>
    </div>
  );
}
