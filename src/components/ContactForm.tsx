"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import type { th } from "@/content/th";

type Dict = typeof th["contact"];

const INTEREST_KEYS = ["ecommerce", "crm", "erp", "mobile", "api"] as const;
type InterestKey = (typeof INTEREST_KEYS)[number];

export default function ContactForm({ d }: { d: Dict }) {
  // Hidden UTM `source` — read from ?source or ?utm_source, never user-visible.
  const [source, setSource] = useState("direct");
  const [path, setPath] = useState<"enterprise" | "sme">("enterprise");
  const [interests, setInterests] = useState<Set<InterestKey>>(new Set());
  const [form, setForm] = useState({ name: "", email: "", org: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get("source") || params.get("utm_source");
    if (s) setSource(s.slice(0, 120));
  }, []);

  function toggleInterest(k: InterestKey) {
    setInterests((prev) => {
      const next = new Set(prev);
      if (next.has(k)) next.delete(k);
      else next.add(k);
      return next;
    });
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const d2 = form;
    const interestList = [...interests].map((k) => d.interestsOptions[k]).join(", ") || "-";
    const subject = `[deelabs.co] ${path === "enterprise" ? "Enterprise pilot" : "Website"} — ${d2.name || "-"}${d2.org ? ` (${d2.org})` : ""}`;
    const body = [
      `Interest: ${path === "enterprise" ? "Enterprise AI pilot" : "Website care plan"}`,
      `Source: ${source}`,
      "",
      `Name: ${d2.name}`,
      `Email: ${d2.email}`,
      `Organisation: ${d2.org || "-"}`,
      `Phone: ${d2.phone || "-"}`,
      `Interests: ${interestList}`,
      "",
      d2.message,
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={submit} noValidate={false}>
      <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
        <legend style={{ fontWeight: 600, fontSize: "0.92rem", padding: 0 }}>{d.path.legend}</legend>
        <div className="path-cards" role="radiogroup" aria-label={d.path.legend}>
          {(["enterprise", "sme"] as const).map((p) => (
            <label key={p} className={`path-card${path === p ? " checked" : ""}`}>
              <input
                type="radio"
                name="path"
                value={p}
                checked={path === p}
                onChange={() => setPath(p)}
              />
              <span className="path-title">
                <span className="dot" aria-hidden="true" />
                {d.path[p].title}
              </span>
              <p>{d.path[p].desc}</p>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="cf-name">{d.form.name}</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div className="field">
        <label htmlFor="cf-email">{d.form.email}</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div className="field">
        <label htmlFor="cf-org">{d.form.org}</label>
        <input
          id="cf-org"
          name="org"
          type="text"
          autoComplete="organization"
          value={form.org}
          onChange={(e) => setForm({ ...form, org: e.target.value })}
        />
      </div>
      <div className="field">
        <label htmlFor="cf-phone">{d.form.phone}</label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </div>

      <div className="field">
        <span id="interests-label" style={{ display: "block", fontWeight: 600, fontSize: "0.92rem", marginBottom: 8 }}>
          {d.form.interests}
        </span>
        <div className="chip-row" role="group" aria-labelledby="interests-label">
          {INTEREST_KEYS.map((k) => (
            <button
              key={k}
              type="button"
              className="chip"
              aria-pressed={interests.has(k)}
              onClick={() => toggleInterest(k)}
            >
              {d.interestsOptions[k]}
            </button>
          ))}
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-message">{d.form.message}</label>
        <textarea
          id="cf-message"
          name="message"
          required
          placeholder={d.form.messagePlaceholder}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>

      {/* Hidden UTM source field — part of the submission, never displayed. */}
      <input type="hidden" name="source" value={source} readOnly aria-hidden="true" />

      <button type="submit" className="btn btn-primary">
        {d.form.submit}
      </button>
      <p style={{ marginTop: 12, fontSize: "0.85rem", color: "var(--ink-muted)" }} role="status">
        {sent ? d.form.sent : d.form.privacy}
      </p>
    </form>
  );
}
