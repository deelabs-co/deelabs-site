import { describe, it, expect } from "vitest";
import { PLANS, yearlyPrice, effectiveMonthlyPrice, YEARLY_COPY } from "@/lib/plans";

describe("pricing plans (single source of truth)", () => {
  it("exposes exactly the four signed plans", () => {
    expect(PLANS.map((p) => p.id)).toEqual(["starter", "growth", "pro", "customize"]);
  });

  it("uses the signed monthly prices: 490 / 790 / 990 / talk", () => {
    expect(PLANS.map((p) => p.monthlyPrice)).toEqual([490, 790, 990, null]);
  });

  it("computes yearly as 10 months (2 months free)", () => {
    expect(yearlyPrice(PLANS[0])).toBe(4900);
    expect(yearlyPrice(PLANS[1])).toBe(7900);
    expect(yearlyPrice(PLANS[2])).toBe(9900);
    expect(yearlyPrice(PLANS[3])).toBeNull();
  });

  it("yearly effective monthly is the averaged rate", () => {
    expect(effectiveMonthlyPrice(PLANS[0], "yearly")).toBe(408); // 4900 / 12 rounded
    expect(effectiveMonthlyPrice(PLANS[1], "yearly")).toBe(658);
    expect(effectiveMonthlyPrice(PLANS[2], "yearly")).toBe(825);
  });

  it("monthly mode returns the signed price unchanged", () => {
    expect(effectiveMonthlyPrice(PLANS[0], "monthly")).toBe(490);
    expect(effectiveMonthlyPrice(PLANS[3], "monthly")).toBeNull();
  });

  it("encodes the signed yearly card copy: 2 months free, no setup fee", () => {
    expect(YEARLY_COPY.freeMonths).toBe(2);
    expect(YEARLY_COPY.setupFee).toBe(false);
  });

  it("never invents a fifth plan or enterprise pricing", () => {
    expect(PLANS).toHaveLength(4);
  });
});
