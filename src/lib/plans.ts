/**
 * Single source of truth for the website care-plan pricing table.
 * Signed commercial terms (per Mission): Starter 490 / Growth 790 / Pro 990 /
 * Customize = talk. Yearly = 10x monthly (2 months free, no setup fee).
 * Do not invent a fifth plan or enterprise pricing here.
 */

export type BillingMode = "monthly" | "yearly";

export interface Plan {
  id: "starter" | "growth" | "pro" | "customize";
  /** THB per month. `null` means "talk to us" (Customize). */
  monthlyPrice: number | null;
}

export const PLANS: Plan[] = [
  { id: "starter", monthlyPrice: 490 },
  { id: "growth", monthlyPrice: 790 },
  { id: "pro", monthlyPrice: 990 },
  { id: "customize", monthlyPrice: null },
];

/** Yearly price = 10 months (2 months free). Returns THB/year or null for Customize. */
export function yearlyPrice(plan: Plan): number | null {
  if (plan.monthlyPrice === null) return null;
  return plan.monthlyPrice * 10;
}

/** Effective THB/month for a billing mode (yearly shown as its monthly average). */
export function effectiveMonthlyPrice(plan: Plan, mode: BillingMode): number | null {
  if (plan.monthlyPrice === null) return null;
  if (mode === "monthly") return plan.monthlyPrice;
  return Math.round(yearlyPrice(plan)! / 12);
}

/** Signed yearly card copy: 2 months free, no setup fee. */
export const YEARLY_COPY = {
  freeMonths: 2,
  setupFee: false,
} as const;
