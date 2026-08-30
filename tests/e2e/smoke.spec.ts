import { test, expect } from "@playwright/test";

/**
 * In-repo E2E equivalents of the hold-out behaviors (hold-out lives outside output/).
 * Run with `npm run e2e` against `next start` (or set BASE_URL).
 */

test.describe("home — two doors", () => {
  for (const [base, lang] of [["/", "th"], ["/en", "en"]] as const) {
    test(`${lang} home shows both doors and no pricing above the fold`, async ({ page }) => {
      await page.goto(base);
      await expect(page).toHaveTitle(/DeeLabs/);
      // Both doors visible
      const doors = page.locator(".door");
      await expect(doors).toHaveCount(2);
      await expect(doors.first()).toBeVisible();
      await expect(doors.nth(1)).toBeVisible();
      // No pricing table above the fold (plan grid appears only in the lower band)
      const planGrid = page.locator(".plan-grid");
      if (await planGrid.count()) {
        const box = (await planGrid.boundingBox())!;
        expect(box.y).toBeGreaterThan(700);
      }
      // html lang is set correctly
      expect(await page.locator("html").getAttribute("lang")).toBe(lang);
    });
  }
});

test("English tree reachable at /en with real paths", async ({ page }) => {
  await page.goto("/en");
  expect(page.url()).toContain("/en");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("/en/websites mirrors the Thai pricing route", async ({ page }) => {
  await page.goto("/en/websites");
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator(".plan-card")).toHaveCount(4);
});

test("blog index lists posts", async ({ page }) => {
  await page.goto("/blog");
  await expect(page.locator(".post-card").first()).toBeVisible();
  // 4 posts
  await expect(page.locator(".post-card")).toHaveCount(4);
});

test("one post renders with prose and CTA", async ({ page }) => {
  await page.goto("/blog/ai-enterprise-thai-poc");
  await expect(page.locator(".prose").first()).toBeVisible();
  await expect(page.locator(".post-cta")).toBeVisible();
  await expect(page.locator(".post-hero h1")).toBeVisible();
});

test("Thai blog post renders", async ({ page }) => {
  await page.goto("/blog/ai-enterprise-thai-poc");
  await expect(page.locator(".post-hero h1")).toBeVisible();
});

test("contact page has form, hidden source, and channels", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.locator("form")).toBeVisible();
  await expect(page.locator('input[name="source"][type="hidden"]')).toHaveCount(1);
  await expect(page.locator("text=@deelabs").first()).toBeVisible();
  await expect(page.locator("text=support@deelabs.co").first()).toBeVisible();
});

test("no overlay is visible on first paint", async ({ page }) => {
  await page.goto("/");
  const overlays = page.locator(".overlay");
  const count = await overlays.count();
  for (let i = 0; i < count; i++) {
    await expect(overlays.nth(i)).toBeHidden();
  }
});

test("both doors carry a real still that loads", async ({ page }) => {
  await page.goto("/");
  const doors = page.locator(".door");
  for (let i = 0; i < 2; i++) {
    const img = doors.nth(i).locator("img");
    await expect(img).toHaveCount(1);
    const nw = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
    expect(nw).toBeGreaterThan(0);
  }
});

test("anatomy beat renders the demo still with 3–4 accessible callouts", async ({ page }) => {
  await page.goto("/");
  const anatomy = page.locator(".anatomy");
  await expect(anatomy).toHaveCount(1);
  const img = anatomy.locator(".anatomy-figure img");
  await expect(img).toHaveCount(1);
  await img.scrollIntoViewIfNeeded();
  await expect(async () => {
    const nw = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
    expect(nw).toBeGreaterThan(0);
  }).toPass({ timeout: 10_000 });
  const callouts = anatomy.locator(".anatomy-list li");
  expect(await callouts.count()).toBeGreaterThanOrEqual(3);
  expect(await callouts.count()).toBeLessThanOrEqual(4);
  await expect(callouts.first()).toBeVisible();
});

test("sticky contact shows exactly the three signed channels", async ({ page }) => {
  for (const base of ["/", "/en", "/websites", "/en/websites"]) {
    await page.goto(base);
    const strip = page.locator(".sticky-contact");
    await expect(strip).toHaveCount(1);
    const links = strip.locator("a");
    await expect(links).toHaveCount(3);
    const text = (await strip.innerText()).replace(/\s+/g, " ");
    expect(text).toContain("@deelabs");
    expect(text).toContain("support@deelabs.co");
    expect(text).toContain("+66 65 724 2988");
  }
});

test("reduced motion leaves all reveal sections fully visible", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const sections = page.locator(".reveal");
  const count = await sections.count();
  expect(count).toBeGreaterThan(3);
  for (let i = 0; i < count; i++) {
    await expect(sections.nth(i)).toHaveCSS("opacity", "1");
  }
});

test("reveal sections end fully visible with motion allowed", async ({ page }) => {
  await page.goto("/");
  // Scroll to the bottom so every reveal has fired.
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(900);
  const sections = page.locator(".reveal");
  const count = await sections.count();
  for (let i = 0; i < count; i++) {
    await expect(sections.nth(i)).toHaveCSS("opacity", "1");
  }
});

test("home FAQ collapse renders with details/summary", async ({ page }) => {
  for (const base of ["/", "/en", "/websites", "/en/websites"]) {
    await page.goto(base);
    await expect(page.locator("details.faq-item").first()).toBeVisible();
    const details = page.locator("details.faq-item").first();
    await expect(details.locator("summary")).toContainText(/.+/);
  }
});

test("post-pricing contact frame exists once per home", async ({ page }) => {
  for (const base of ["/", "/en"]) {
    await page.goto(base);
    await expect(page.locator(".contact-frame")).toHaveCount(1);
  }
});
