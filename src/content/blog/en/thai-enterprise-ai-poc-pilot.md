---
title: "Why most Thai enterprise AI is still stuck in PoC (and what a paid pilot should prove)"
description: "Most Thai enterprise AI dies between the proof-of-concept and the second budget line. Here is why the PoC shape itself is the problem — and what a 4–8 week paid pilot must prove instead."
date: 2026-07-02
category: poc
cta: pilot
lang: en
counterpart: ai-enterprise-thai-poc
---

If you talk to innovation leads at Thai banks, insurers, telcos, hospital groups, and retail conglomerates, a pattern repeats almost word for word: *we did an AI proof of concept. It worked. Then nothing happened.*

The PoC is not failing technically. The demos are good. The models answer the sample questions. So why does so little of it survive into production? In our work building internal AI tools for Thai companies, we keep seeing the same three structural reasons — and none of them are about model quality.

## Reason 1: The PoC was designed to impress, not to operate

A PoC is usually built to win a meeting. It runs on curated sample data, one person knows how to drive it, and the demo path is rehearsed. The moment it has to face a real queue of messy inputs — a scanned invoice in mixed Thai and English, a customer message with no clear intent, a reconciliation file with the wrong date format — the gap between demo and operation appears.

Nobody budgets for closing that gap, because the PoC was never scoped to include it. So the project returns to the deck it came from.

## Reason 2: Nobody owns the number

Ask who is accountable for the outcome and you will often get silence. The innovation team ran the PoC, but the P&L owner — operations, finance, customer service — never signed up for a metric. Without a number that a business owner cares about, there is no honest way to say the pilot succeeded or failed, and without that, the second budget line has nothing to stand on.

## Reason 3: The scope was infinite

"Let's AI the contact centre" is not a scope. It is a wish. When the boundary of the work is undefined, the pilot cannot end — and a pilot that cannot end is indistinguishable from a failure that hasn't been announced yet. Bounded work ends. Unbounded work dissolves.

## What a paid pilot should prove instead

A pilot is not a longer demo. It is a short contract with reality. When we scope a 4–8 week paid pilot with a Thai enterprise, we insist on four properties:

| Property | The question it answers | Typical failure when missing |
|---|---|---|
| One job | What single task is getting measurably better? | Scope drift into "an AI platform" |
| A baseline number | What does this task cost or take today? | Success gets argued, not measured |
| Real data, real users | Who uses it daily, on live inputs? | Demo works, operation doesn't |
| An exit rule | What result scales it, reshapes it, or stops it? | The pilot never concludes |

The exit rule deserves emphasis. Deciding *in advance* that "if the tool saves fewer than X hours a week, we stop" is uncomfortable to negotiate — and it is exactly what makes the pilot credible in the steering committee afterwards. A pilot that was allowed to end is one whose results anyone can trust.

## A flow that fits one quarter

```
Week 0      Weeks 1–3        Weeks 4–6         Weeks 7–8
┌───────┐   ┌──────────┐    ┌───────────┐     ┌──────────┐
│ Pick   │   │ Build v1 │    │ Supervised│     │ Decide   │
│ job +  │ → │ on real  │ →  │ daily use │  →  │ on the   │
│ metric │   │ data     │    │ + logging │     │ numbers  │
└───────┘   └──────────┘    └───────────┘     └──────────┘
```

Notice that only three weeks are build time. The rest is operation and judgement — the parts PoCs skip, and the parts that produce the evidence your CFO needs.

## Why "paid" matters

We only run pilots that are paid, and we recommend you be suspicious of any vendor who offers to do one free. Payment changes behaviour on both sides: the vendor scopes tightly, because a free unlimited experiment is a loss they cannot carry; and the buyer takes it seriously, because money committed is attention committed. A paid pilot with an exit rule is the smallest honest unit of enterprise AI.

## The Thai context makes this easier, not harder

Thai enterprises have real advantages here: strong LINE-based customer channels, concentrated decision-making that can approve a bounded pilot quickly, and teams with deep process knowledge that AI tools need as ground truth. The blockers in the list above are structural, not cultural — and they are fixed by how the first engagement is shaped.

Pick one job. Baseline it. Run it on real data with the team who owns it. Agree in advance what success means. That is the whole discipline — and it is the difference between the next PoC and your first production AI tool.

---

**Is there one job in your company worth proving this quarter?** Tell us the P&L metric you want to move, and we will tell you honestly whether a 4–8 week pilot fits — or whether you should not do it yet.
