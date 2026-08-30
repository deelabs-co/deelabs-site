/**
 * Capture the one Mission-named live proof still: public/img/djnorita-proof.jpg
 * from the real, live client site https://djnorita.co.
 *
 * Honest-sourcing rule (Factory-Brain, job 20260830-cf5e12): this script captures
 * ONLY the named live proof URL. The hero, door-sme, door-internal and
 * demo-anatomy slots are generated photography (factory image helper
 * /factory/generate-image.sh), never browser captures. The script fails loudly
 * (non-zero exit) if the target is unreachable — it never fabricates a
 * placeholder image as a "photo".
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

const VIEWPORT = { width: 1280, height: 800 };
const SCALE = 1.5; // 1280 * 1.5 = 1920px wide (≤ 2000px per plan)

// One shot only: the "Where I Play" section of the live client site.
const shots = [{ file: "djnorita-proof.jpg", url: CLIENT_SITE, kind: "venues" }];

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

  // djnorita.co section crop
  const targets = {
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
  console.log("proof still captured into public/img/");
}

main();
