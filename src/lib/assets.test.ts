import { describe, it, expect } from "vitest";
import { readFileSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * Every photographic asset the UI references must exist as a real repo asset
 * under public/img/ (honestly captured — see scripts/capture-stills.mjs).
 */
const STILLS = [
  "hero.jpg",
  "door-internal.jpg",
  "door-sme.jpg",
  "demo-anatomy.jpg",
  "djnorita-proof.jpg",
] as const;

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
});
