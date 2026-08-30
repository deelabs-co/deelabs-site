import { describe, it, expect } from "vitest";
import { th } from "@/content/th";
import { en } from "@/content/en";
import { ROUTES } from "@/lib/site";

/** Recursively collect the key paths of an object. */
function keysOf(obj: unknown, prefix = ""): string[] {
  if (obj === null || typeof obj !== "object") return [prefix];
  return Object.entries(obj as Record<string, unknown>).flatMap(([k, v]) =>
    keysOf(v, prefix ? `${prefix}.${k}` : k)
  );
}

describe("locale dictionary parity", () => {
  it("th and en expose exactly the same key tree", () => {
    const thKeys = keysOf(th).sort();
    const enKeys = keysOf(en).sort();
    expect(enKeys).toEqual(thKeys);
  });

  it("has no empty strings in either dictionary", () => {
    for (const [name, dict] of [["th", th], ["en", en]] as const) {
      for (const key of keysOf(dict)) {
        const parts = key.split(".");
        let val: unknown = dict;
        for (const p of parts) val = (val as Record<string, unknown>)[p];
        if (typeof val === "string") {
          expect(val.trim().length, `${name}:${key} is empty`).toBeGreaterThan(0);
        }
      }
    }
  });
});

describe("locale route parity", () => {
  it("declares all eight required routes", () => {
    expect(ROUTES).toEqual([
      "/",
      "/work",
      "/internal-ai",
      "/automations",
      "/websites",
      "/blog",
      "/about",
      "/contact",
    ]);
  });
});
