import { ImageResponse } from "next/og";

/**
 * Shared OG card per design.md §7: warm ivory canvas, wordmark top-left,
 * one headline centered, thin brass rule, one red accent, deelabs.co in mono at bottom.
 * Thai headlines render when the Anuphan TTF fetch succeeds; otherwise Latin-only fallback.
 */

export const OG_SIZE = { width: 1200, height: 630 };

const FONT_CSS = "https://fonts.googleapis.com/css2?family=Anuphan:wght@700";

export async function loadAnuphan(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(FONT_CSS, {
      headers: { "User-Agent": "curl/8.0" }, // non-woff2 UA → Google serves TTF
      cache: "no-store",
    });
    if (!css.ok) return null;
    const m = (await css.text()).match(/url\((https:[^)]+\.ttf)\)/);
    if (!m) return null;
    const font = await fetch(m[1], { cache: "no-store" });
    if (!font.ok) return null;
    return await font.arrayBuffer();
  } catch {
    return null;
  }
}

export async function OgCard({ headline, kicker }: { headline: string; kicker: string }) {
  const font = await loadAnuphan();
  const hasThai = /[\u0E00-\u0E7F]/.test(headline);
  // If the headline contains Thai but the font failed to load, fall back to Latin-only text.
  const text = hasThai && !font ? "Internal AI & done-for-you websites for Thai business" : headline;
  const bodyFont = font ? "Anuphan" : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FBF8F2",
          color: "#181620",
          padding: "56px 64px",
          ...(bodyFont ? { fontFamily: bodyFont } : {}),
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 34, fontWeight: 700, display: "flex" }}>
            Dee<span style={{ color: "#C9432B" }}>Labs</span>
          </div>
          <div style={{ fontSize: 20, color: "#B98A2F", letterSpacing: 3, textTransform: "uppercase" }}>{kicker}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
          <div
            style={{
              width: 120,
              height: 3,
              background: "#B98A2F",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: text.length > 90 ? 44 : 56,
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1.25,
              maxWidth: 940,
              display: "flex",
            }}
          >
            {text}
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ width: 18, height: 18, background: "#C9432B", display: "flex" }} />
            <div style={{ width: 120, height: 3, background: "#B98A2F", display: "flex" }} />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", fontSize: 24, color: "#5A5663", letterSpacing: 2 }}>
          deelabs.co
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: font ? [{ name: "Anuphan", data: font, weight: 700, style: "normal" }] : undefined,
    }
  );
}
