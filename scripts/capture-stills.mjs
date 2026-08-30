/**
 * Capture real photo stills of DeeLabs properties (djnorita.co + the labeled
 * live-demo surface) into public/img/ as repo assets.
 *
 * Honest-sourcing rule: every still is a Playwright capture of a real DeeLabs
 * property. The script fails loudly (non-zero exit) if a target is unreachable —
 * it never fabricates a placeholder image as a "photo".
 *
 * Run: node scripts/capture-stills.mjs   (from output/)
 */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, "..", "public", "img");

const CLIENT_SITE = "https://djnorita.co";
const DEMO_SITE = process.env.DEMO_URL || "https://repo-nu-jade.vercel.app";

const VIEWPORT = { width: 1280, height: 800 };
const SCALE = 1.5; // 1280 * 1.5 = 1920px wide (≤ 2000px per plan)

const shots = [
  { file: "hero.jpg", url: CLIENT_SITE, kind: "viewport" },
  { file: "door-internal.jpg", url: `${DEMO_SITE}/automations`, kind: "viewport" },
  { file: "door-sme.jpg", url: CLIENT_SITE, kind: "services" },
  { file: "demo-anatomy.jpg", url: `${DEMO_SITE}/automations`, kind: "demo-section" },
  { file: "djnorita-proof.jpg", url: CLIENT_SITE, kind: "venues" },
];

async function reachable(url) {
  try {
    const res = await fetch(url, { method: "HEAD", redirect: "follow" });
    return res.ok;
  } catch {
    return false;
  }
}

async function capture(page, shot) {
  await page.goto(shot.url, { waitUntil: "networkidle", timeout: 45_000 });
  await page.waitForTimeout(1200); // fonts + images settle

  if (shot.kind === "viewport") {
    await page.screenshot({ path: join(outDir, shot.file), type: "jpeg", quality: 82 });
    return;
  }

  if (shot.kind === "demo-section") {
    // The automations demo band on the live demo surface (labeled live demo).
    const section = page
      .locator("section", { hasText: /สายสอบถามถึงการยืนยัน|inquiry to confirmation|inquiry/i })
      .filter({ has: page.locator("h2") })
      .last();
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await section.screenshot({ path: join(outDir, shot.file), type: "jpeg", quality: 82 });
    return;
  }

  // djnorita.co section crops
  const targets = {
    services: "Services",
    venues: "Where I Play",
  };
  const heading = page.locator("h1, h2, h3", { hasText: targets[shot.kind] }).first();
  const section = heading.locator("xpath=ancestor::section[1]");
  const el = (await section.count()) ? section.first() : heading;
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await el.screenshot({ path: join(outDir, shot.file), type: "jpeg", quality: 82 });
}

async function main() {
  mkdirSync(outDir, { recursive: true });

  const urls = [...new Set(shots.map((s) => s.url))];
  for (const url of urls) {
    if (!(await reachable(url))) {
      console.error(`FAIL: target unreachable, refusing to fabricate a photo: ${url}`);
      process.exit(1);
    }
  }

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: VIEWPORT,
    deviceScaleFactor: SCALE,
  });

  for (const shot of shots) {
    try {
      await capture(page, shot);
      console.log(`captured ${shot.file}  <-  ${shot.url} (${shot.kind})`);
    } catch (err) {
      console.error(`FAIL capturing ${shot.file} from ${shot.url}: ${err.message}`);
      await browser.close();
      process.exit(1);
    }
  }

  await browser.close();
  console.log("all stills captured into public/img/");
}

main();
