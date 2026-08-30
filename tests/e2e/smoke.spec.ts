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
