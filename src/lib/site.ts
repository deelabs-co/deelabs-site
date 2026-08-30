/**
 * Site-wide constants. Facts come from the Mission / architect note only.
 * Do not invent contacts, prices, or client names here.
 */

export const SITE = {
  name: "DeeLabs",
  domain: "deelabs.co",
  url: "https://deelabs.co",
  email: "support@deelabs.co",
  phone: "+66 65 724 2988",
  phoneHref: "+66657242988",
  line: "@deelabs",
  instagram: "@deelabs_th",
  /** Legal footer only — unverified at DBD (per Mission). */
  legalNameEn: "D & B Holdings Co., Ltd.",
  legalNameTh: "บริษัท ดี แอนด์ บี โฮลดิ้งส์ จำกัด",
  legalAddressEn: "39/11 Moo 8, Bang Chalong, Bang Phli, Samut Prakan 10540",
  legalAddressTh: "39/11 หมู่ 8 ตำบลบางฉลอง อำเภอบางพลี จังหวัดสมุทรปราการ 10540",
} as const;

export const LOCALES = ["th", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export function localePath(locale: Locale, path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return locale === "th" ? p : `/en${p === "/" ? "" : p}`;
}

/** Every public route (locale-relative). Used by sitemap and route-parity tests. */
export const ROUTES = [
  "/",
  "/work",
  "/internal-ai",
  "/automations",
  "/websites",
  "/blog",
  "/about",
  "/contact",
] as const;
