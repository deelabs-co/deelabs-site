"use client";

import { useState } from "react";
import { PLANS, effectiveMonthlyPrice, yearlyPrice, type BillingMode } from "@/lib/plans";
import Link from "next/link";

interface PlanDict {
  billing: { monthly: string; yearly: string; yearlyNote: string };
  perMonth: string;
  perYear: string;
  talk: string;
  plans: Record<string, { name: string; tagline: string; features: string[] }>;
  footnote: string;
}

export default function PlanTable({ d, ctaLabel, ctaHref }: { d: PlanDict; ctaLabel: string; ctaHref: string }) {
  const [mode, setMode] = useState<BillingMode>("monthly");

  return (
    <div>
      <div
        className="billing-toggle"
        role="group"
        aria-label={d.billing.monthly + " / " + d.billing.yearly}
      >
        <button type="button" aria-pressed={mode === "monthly"} onClick={() => setMode("monthly")}>
          {d.billing.monthly}
        </button>
        <button type="button" aria-pressed={mode === "yearly"} onClick={() => setMode("yearly")}>
          {d.billing.yearly}
        </button>
      </div>
      <p className="plan-yearly-note" style={{ marginTop: 12, fontSize: "0.8rem" }}>
        {d.billing.yearlyNote}
      </p>

      <div className="plan-grid">
        {PLANS.map((plan, i) => {
          const info = d.plans[plan.id];
          const monthly = effectiveMonthlyPrice(plan, mode);
          const yearly = yearlyPrice(plan);
          return (
            <div key={plan.id} className={`plan-card${i === 1 ? " featured" : ""}`}>
              <div className="plan-name">{info.name}</div>
              <div className="plan-tagline">{info.tagline}</div>
              {monthly !== null ? (
                <>
                  <div className="plan-price" data-plan={plan.id} data-mode={mode}>
                    <span className="cur">฿</span>
                    {mode === "monthly" ? monthly : yearly}
                  </div>
                  <div className="plan-per">{mode === "monthly" ? d.perMonth : d.perYear}</div>
                  {mode === "yearly" && <div className="plan-yearly-note">≈ ฿{monthly} {d.perMonth}</div>}
                </>
              ) : (
                <div className="plan-price" style={{ fontSize: "1.3rem", paddingTop: "0.5em" }} data-plan="customize">
                  {d.talk}
                </div>
              )}
              <ul>
                {info.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <p className="plan-footnote">{d.footnote}</p>
      <p style={{ marginTop: 20 }}>
        <Link href={ctaHref} className="btn btn-primary">
          {ctaLabel}
        </Link>
      </p>
    </div>
  );
}
