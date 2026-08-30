import { describe, it, expect } from "vitest";
import { readFileSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * Every photographic asset the UI references must exist as a real repo asset
 * under public/img/. hero.jpg, door-sme.jpg, door-internal.jpg and
 * demo-anatomy.jpg are generated photography (factory image helper
 * /factory/generate-image.sh); djnorita-proof.jpg is the one real capture of
 * the Mission-named live URL https://djnorita.co (see scripts/capture-stills.mjs).
 */
const STILLS = [
  "hero.jpg",
  "door-internal.jpg",
  "door-sme.jpg",
  "demo-anatomy.jpg",
  "djnorita-proof.jpg",
] as const;

// Slots that must never be produced by browser capture (job 20260830-cf5e12
// regression): only djnorita-proof.jpg may come from capture-stills.mjs.
const GENERATED_SLOTS = ["hero.jpg", "door-internal.jpg", "door-sme.jpg", "demo-anatomy.jpg"] as const;

describe("repo photo assets", () => {
  for (const file of STILLS) {
    it(`${file} exists and is non-empty`, () => {
      const p = join(process.cwd(), "public", "img", file);
      expect(statSync(p).isFile()).toBe(true);
      expect(statSync(p).size).toBeGreaterThan(10_000);
    });
  }

  it("still references match the files the UI uses", () => {
    const pages = readFileSync(join(process.cwd(), "src", "components", "pages.tsx"), "utf8");
    for (const f of STILLS) {
      if (f === "djnorita-proof.jpg") continue; // referenced via dictionary thumb
      expect(pages.includes(`/img/${f}`) || f === "djnorita-proof.jpg").toBe(true);
    }
  });

  it("capture-stills.mjs captures only the djnorita.co proof — no generated slot", () => {
    const script = readFileSync(
      join(process.cwd(), "scripts", "capture-stills.mjs"),
      "utf8",
    );
    for (const slot of GENERATED_SLOTS) {
      expect(script.includes(slot)).toBe(false);
    }
    // The one legitimate capture target is the Mission-named live proof URL.
    expect(script.includes("djnorita-proof.jpg")).toBe(true);
    expect(script.includes("https://djnorita.co")).toBe(true);
  });
});
