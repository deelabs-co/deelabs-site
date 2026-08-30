import type { th } from "./th";

/** English dictionary — shape must exactly mirror the Thai dictionary. */
export const en: typeof th = {
  meta: {
    localeName: "English",
    switchTo: "ไทย",
  },

  nav: {
    work: "What we build",
    internalAi: "Internal AI",
    automations: "Automations",
    websites: "Websites",
    blog: "Journal",
    about: "About",
    contactCta: "Contact",
  },

  footer: {
    tagline:
      "A Thai-native, AI-native company aiming to be the premier AI company in Thailand — demystifying AI into tools Thai companies actually use",
    explore: "Explore",
    contact: "Contact",
    legal: "Legal entity",
    lineLabel: "LINE",
    igLabel: "Instagram",
    emailLabel: "Email",
    phoneLabel: "Phone",
    rights: "All rights reserved",
  },

  sticky: {
    aria: "Contact channels",
  },

  tags: {
    liveDemo: "Live demo",
    internal: "Internal at DeeLabs",
    typical: "Typical engagement",
    commercial: "Commercial line",
  },

  home: {
    eyebrow: "AI-native · Thai team · Built to prove it",
    headline:
      "The AI company for Thai business — from internal systems to websites that sell",
    sub: "DeeLabs builds bounded internal AI apps, automations, and done-for-you websites. We start with work you can measure, not slides that impress.",
    doorsLabel: "Pick the door that matches you",
    photoCaption: "A real capture of djnorita.co — the client site we care for",
    photoAlt: "Screenshot of the djnorita.co website, a real DeeLabs client site, with its Book Now button",
    demoLabel: "ตัวอย่างสด · Live demo",
    doorEnterprise: {
      kicker: "For ops, finance, service and innovation leads",
      title: "Internal AI for your company",
      desc: "Bounded AI apps and agents built for one team's real work — starting with a 4–8 week paid pilot that proves value with numbers",
      bullets: [
        "One painful job at a time, never a multi-year programme",
        "A paid pilot with a clear P&L metric",
        "Your data stays in your systems — PDPA is a day-one constraint",
      ],
      cta: "Tell us your P&L metric",
      imgAlt: "Screenshot of the automations page of DeeLabs' live demo — inquiry and booking flow",
    },
    doorSme: {
      kicker: "For brand owners and small businesses",
      title: "Get a site live in days",
      desc: "A done-for-you website on a monthly or yearly care plan. We design, build, host, and look after it — you never touch code",
      bullets: [
        "From 490 THB/month, fully done for you",
        "Designed, hosted, and cared for by us",
        "Updates and fixes included in the plan",
      ],
      cta: "Start at ฿490/month",
      imgAlt: "Screenshot of djnorita.co's services section — a real client site we care for",
    },
    thumbs: [
      {
        src: "/img/door-internal.jpg",
        alt: "Screenshot of DeeLabs' live inquiry-and-booking demo (a demo, not a client)",
      },
      {
        src: "/img/djnorita-proof.jpg",
        alt: "Screenshot of the venues section of djnorita.co",
      },
    ],
    anatomy: {
      eyebrow: "Anatomy of a demo",
      heading: "One live demo screen, step by step",
      dek: "A real screenshot from our inquiry-and-booking demo — four stages that run end to end, from first chat to the admin summary",
      caption: "Screenshot of a live DeeLabs demo (inquiry and booking flow) — a demo, not a client",
      callouts: [
        {
          title: "1 · Inquiry arrives",
          desc: "The customer messages; the bot captures intent and preferred times",
        },
        {
          title: "2 · Pick a slot",
          desc: "The system shows availability and books inside the chat",
        },
        {
          title: "3 · Payment",
          desc: "A secure payment link is sent in the same chat",
        },
        {
          title: "4 · Confirm and summarise",
          desc: "Automatic confirmation to the customer and a summary to your admin view",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      heading: "What people ask before starting",
      items: [
        {
          q: "How do the prices on deelabs.co differ from this table",
          a: "deelabs.co currently still shows the older pricing terms, which are being reconciled — the table on this page is our latest offer (Starter 490 / Growth 790 / Pro 990 / Customize)",
        },
        {
          q: "What about PDPA and company data",
          a: "Your data stays inside your organisation. PDPA is a day-one constraint on every engagement — we connect to the systems you already run and never move data out of your org without permission",
        },
        {
          q: "How does the 4–8 week paid pilot work",
          a: "Start with the single most painful job, agree the P&L metric and success criteria up front, then prove it with real numbers before scaling — if the numbers do not pass, we close the pilot honestly",
        },
      ],
    },
    contactFrame: {
      eyebrow: "Contact",
      heading: "Talk to us on LINE @deelabs",
      dek: "Pick whichever channel suits you — we reply within business days",
      cta: "Message LINE @deelabs",
    },
    proof: {
      eyebrow: "What we build",
      heading: "Six kinds of work we actually ship",
      dek: "Every item is labelled honestly — a live demo you can try, something we run internally, or the kind of engagement we build for companies",
    },
    cards: [
      {
        title: "24/7 inquiry and booking",
        desc: "LINE / WhatsApp → availability → payment link → automatic confirmation → admin summary",
        tag: "liveDemo" as import("./th").TagId,
      },
      {
        title: "Customer-site machine",
        desc: "Brief → design variants → a hosted site on a monthly care plan",
        tag: "commercial" as import("./th").TagId,
      },
      {
        title: "Inbox / FAQ bot with human handoff",
        desc: "A LINE and Messenger bot that answers repeated questions and hands off to your team beyond its bounds",
        tag: "internal" as import("./th").TagId,
      },
      {
        title: "Internal ops agents",
        desc: "AR aging summaries, staged dunning drafts, customer reconciliation — the kind of internal tool we build for finance teams",
        tag: "typical" as import("./th").TagId,
      },
      {
        title: "Custom AI SaaS for one business",
        desc: "Membership, billing, and multi-tenant systems designed around a single business's workflow",
        tag: "typical" as import("./th").TagId,
      },
      {
        title: "Consulting and app development",
        desc: "E-commerce, CRM, ERP, mobile, and API work — connecting the systems you already run",
        tag: "typical" as import("./th").TagId,
      },
    ],
    enterprise: {
      eyebrow: "Enterprises and groups",
      heading: "Bounded AI, not a multi-year SI programme",
      dek: "We do not replace your core systems. We build scoped tools that plug into what you already run and prove themselves within a quarter",
      bullets: [
        "Start from the work your team repeats every week",
        "A 4–8 week pilot proven with real numbers before scaling",
        "Clear boundaries mean the pilot can actually end",
      ],
      cta: "See the enterprise offer",
    },
    sites: {
      eyebrow: "Websites + care plan",
      heading: "A website with someone behind it, not a handoff and gone",
      dek: "Monthly or yearly plans with design, hosting, and ongoing care included — from 490 THB/month",
      cta: "See website plans",
    },
    journal: {
      eyebrow: "Journal",
      heading: "We write what Thai teams can actually decide with",
      dek: "Not press releases — notes on how Thai firms really ship internal AI, step by step",
      cta: "Read the journal",
    },
  },

  work: {
    eyebrow: "What we build",
    h1: "The work we build for Thai business",
    title: "What we build — DeeLabs",
    description:
      "An honest overview of DeeLabs' work: internal AI apps, LINE / WhatsApp / booking automations, and done-for-you websites on care plans",
    dek: "Every item carries its real status — what you can try live, what we run internally, and what we build for companies as engagements. We do not paste client logos we have no right to claim.",
    cards: [
      {
        title: "24/7 inquiry and booking",
        pain: "Sales and admin staff answer the same chats until midnight and still miss overnight orders",
        what: "A bot on LINE / WhatsApp takes inquiries, checks availability, sends a payment link, confirms automatically, and summarises to your admin",
        pilot: "A 4-week pilot with one location: measure after-hours bookings and admin hours saved",
        tag: "liveDemo" as import("./th").TagId,
      },
      {
        title: "Inbox / FAQ bot with human handoff",
        pain: "The same questions on LINE and Messenger consume your service team's whole day",
        what: "A FAQ bot answering from your knowledge base, handing off to a real person when a question exceeds its bounds (deelabs-bot is the version we run internally)",
        pilot: "A 4-week pilot: measure the share of questions the bot closes alone and the average response time",
        tag: "internal" as import("./th").TagId,
      },
      {
        title: "Customer-site machine",
        pain: "SMEs wait months for a website and nobody maintains it after launch",
        what: "Our pipeline: brief → design variants → a real hosted site under a monthly care plan, updated continuously",
        pilot: "Already a commercial line: start with a first site live in days, on a care plan",
        tag: "commercial" as import("./th").TagId,
      },
      {
        title: "Internal ops agents",
        pain: "Finance teams spend every week on AR aging, dunning, and customer reconciliation that repeats the same way",
        what: "Bounded internal tools: aging summaries, staged dunning drafts, reconciliation checks before a human signs off — the kind of internal tool we build; we do not claim one is live at any named bank",
        pilot: "A 6–8 week pilot on your team's real data: measure time saved and accuracy before scaling",
        tag: "typical" as import("./th").TagId,
      },
      {
        title: "Custom AI SaaS for one business",
        pain: "Off-the-shelf systems do not match how your business actually works",
        what: "Membership, billing, and multi-tenant systems designed around one clear problem of yours",
        pilot: "Start with the single clearest scope, delivered as a system you own",
        tag: "typical" as import("./th").TagId,
      },
      {
        title: "Consulting and app development",
        pain: "Your e-commerce, CRM, ERP, and APIs do not talk to each other",
        what: "Project-based development: integrations, mobile apps, or APIs your internal teams can build on",
        pilot: "Start with the one integration that unblocks the biggest problem",
        tag: "typical" as import("./th").TagId,
      },
    ],
    portfolio: {
      heading: "Work you can actually see",
      dek: "We only show what is genuinely viewable — one named client site and design demos we publish on Vercel",
      items: [
        { name: "djnorita.co", desc: "A named client site we care for", tag: "liveDemo" as import("./th").TagId, url: "https://djnorita.co" },
        { name: "Steakhouse demo", desc: "A published restaurant-design demo", tag: "liveDemo" as import("./th").TagId },
        { name: "Restaurant demo", desc: "A dining demo with booking flow", tag: "liveDemo" as import("./th").TagId },
        { name: "Car rental demo", desc: "A rental-service design demo", tag: "liveDemo" as import("./th").TagId },
        { name: "Beauty clinic demo", desc: "A clinic demo with appointments", tag: "liveDemo" as import("./th").TagId },
      ],
      demoNote: "Entries without a link are design demos we built for display — not clients",
    },
  },

  internalAi: {
    eyebrow: "For enterprises",
    h1: "Internal AI apps for Thai companies",
    title: "Internal AI App Thailand — Bounded AI for Enterprises | DeeLabs",
    description:
      "DeeLabs builds bounded internal AI apps and agents for Thai enterprises — ops, finance, and service work, starting with a 4–8 week paid pilot measured on a real P&L metric",
    dek: "We build bounded internal AI tools — not floating platforms, not multi-year SI programmes. One painful job first, proven by a paid pilot",
    audiences: [
      {
        role: "Operations leads",
        pain: "Repetitive back-office work eats team time, but it is too small to hand a big SI",
      },
      {
        role: "Finance leads",
        pain: "AR aging, dunning, and reconciliation are routine work humans get wrong when tired",
      },
      {
        role: "Service leads",
        pain: "Message volume grows faster than the headcount you can justify",
      },
      {
        role: "Digital / innovation leads",
        pain: "You need a small, provable win within a quarter — not another PoC that dies in a slide deck",
      },
    ],
    approach: {
      heading: "How we work",
      items: [
        { title: "Boundaries set on day one", desc: "One job, one metric, and agreed pilot-exit criteria before any code is written" },
        { title: "Your data stays yours", desc: "We plug into the systems you already run; nothing leaves your estate without permission — PDPA is a day-one constraint" },
        { title: "Handover your team can hold", desc: "A tool your team can operate themselves, with documentation and a short training — not a black box" },
        { title: "The pilot can end", desc: "If the numbers fail, we close the pilot honestly — that is the point of clear boundaries" },
      ],
    },
    pilot: {
      heading: "What a 4–8 week paid pilot should prove",
      dek: "A good pilot does not prove that AI is promising — it proves that one job in your company got measurably better",
      steps: [
        { title: "Week 0 — pick the job and the metric", desc: "Agree on one job, a baseline number, and success criteria leadership signs off on" },
        { title: "Weeks 1–3 — build the first version", desc: "A real tool on one team's real data, not a demo on synthetic data" },
        { title: "Weeks 4–6 — supervised real use", desc: "The team uses it daily; results and failures are logged as they happen" },
        { title: "Weeks 7–8 — decide with numbers", desc: "Compare against the baseline: scale, reshape, or stop — explicitly" },
      ],
      cta: "Tell us the P&L metric you want to move",
    },
    cta: {
      heading: "Start with a conversation, not a contract",
      dek: "Tell us which P&L metric should improve. We will tell you honestly which pilot fits — or whether you should not do it at all",
      button: "Talk to DeeLabs",
    },
  },

  automations: {
    eyebrow: "Automations",
    h1: "AI automation for LINE, WhatsApp, email, and booking",
    title: "AI Automation LINE · WhatsApp · Booking — DeeLabs",
    description:
      "AI automations for LINE, WhatsApp, email, and booking — from inquiry to payment and confirmation. Live demo verticals: tours, spa/wellness, and beauty clinics",
    dek: "We connect the channels Thai customers actually use — LINE first — to your systems, from first inquiry to confirmation and an admin summary",
    channels: [
      { name: "LINE", desc: "Thai customers' main channel — one bot answers, books, and hands off inside a single chat" },
      { name: "WhatsApp", desc: "For international customers and businesses serving clients abroad" },
      { name: "Email", desc: "Queue incoming inquiries, categorise them, and draft replies for your team to review" },
      { name: "Booking and payment", desc: "Check availability, send a secure payment link, confirm automatically, and summarise to admin" },
    ],
    demo: {
      eyebrow: "Live demo",
      heading: "From inquiry to confirmation — in one demo",
      dek: "Our public demo shows this flow in three verticals, with every step actually connecting",
      steps: [
        { title: "1 · Inquiry arrives", desc: "A customer messages; the bot captures intent and preferred dates" },
        { title: "2 · Pick a slot", desc: "The system shows availability and lets them choose inside the chat" },
        { title: "3 · Pay", desc: "A secure payment link goes out in the same conversation" },
        { title: "4 · Confirm and summarise", desc: "The customer is confirmed automatically; your admin sees the summary" },
      ],
      verticalsLabel: "Demo verticals",
      verticals: ["Tours", "Spa / wellness", "Beauty clinic"],
      note: "The demo demonstrates the flow — your version connects to your own systems, pricing, and team",
    },
    cta: {
      heading: "Want to see your business's version",
      dek: "Tell us your channels and the work you want automated; we will propose a pilot with clear boundaries",
      button: "Talk about automations",
    },
  },

  websites: {
    eyebrow: "Websites + care plan",
    h1: "Done-for-you websites with a care plan",
    title: "Website Care Plan Thailand — From 490 THB/month | DeeLabs",
    description:
      "Done-for-you websites built on Next.js, hosted and cared for continuously, from 490 THB/month — Starter, Growth, Pro, or Customize, billed monthly or yearly (yearly: 2 months free, no setup fee)",
    dek: "We design, build on Next.js, host, and care for your site for the life of the plan — you never touch code",
    billing: { monthly: "Monthly", yearly: "Yearly", yearlyNote: "Yearly: 2 months free · no setup fee" },
    perMonth: "THB/month",
    perYear: "THB/year",
    talk: "Talk to us",
    plans: {
      starter: {
        name: "Starter",
        tagline: "For personal brands and small businesses getting started",
        features: ["One ready-to-use site", "Design from our templates", "Hosting and SSL included", "Small monthly content updates", "Care and backups"],
      },
      growth: {
        name: "Growth",
        tagline: "For businesses that need a storefront that actually sells",
        features: ["Everything in Starter", "Extended custom design", "Contact form + LINE", "SEO basics and OG sharing", "Monthly content updates"],
      },
      pro: {
        name: "Pro",
        tagline: "For businesses where the website is the main channel",
        features: ["Everything in Growth", "More pages and features", "Basic system integrations", "Site status reporting", "Priority fixes"],
      },
      customize: {
        name: "Customize",
        tagline: "Special scopes: booking, membership, or multilingual sites",
        features: ["Scope designed around the job", "Priced after we talk", "Connects to your current systems", "A care plan matched to real usage"],
      },
    },
    footnote:
      "Note: pricing terms currently shown on deelabs.co still differ from this table and are under review — this table is our latest offer",
    included: {
      heading: "Every plan includes",
      items: [
        "Built on Next.js — fast and future-proof",
        "Production-grade hosting with SSL",
        "Maintenance, security updates, and backups",
        "Content edits within your plan's scope — just message us",
      ],
    },
    cta: { heading: "Ready to get your site live", button: "Get a site" },
    faq: {
      eyebrow: "FAQ",
      heading: "Before you pick a plan",
      items: [
        {
          q: "How do the prices on deelabs.co differ from this table",
          a: "Note: pricing terms currently shown on deelabs.co still differ from this table and are under review — this table is our latest offer (Starter 490 / Growth 790 / Pro 990 / Customize)",
        },
        {
          q: "What about PDPA and our data",
          a: "Your website and form data stay in your own systems. PDPA is a day-one constraint — we host and care for the site, but your customer data is never used elsewhere",
        },
        {
          q: "What about internal AI for enterprises",
          a: "Internal AI work starts with a 4–8 week paid pilot: agree the P&L metric and pilot end-criteria first, with your data staying inside your org throughout",
        },
      ],
    },
  },

  blog: {
    eyebrow: "Journal",
    title: "Journal — DeeLabs",
    description:
      "Notes from DeeLabs: how Thai firms actually ship internal AI, how software gets bought over LINE, and how to choose a pilot you can measure",
    dek: "Notes from the team building internal AI apps and websites for Thai businesses — written to be finished and acted on",
    bylinePrefix: "By",
    readMore: "Read",
    ctaPilot: "Ready to talk pilots",
    ctaSite: "Get a site",
    founderName: "The DeeLabs team",
    categories: {
      all: "All",
      poc: "AI in enterprises",
      strategy: "Strategy",
      sales: "Buying software",
      choose: "Choosing a service",
    },
  },

  about: {
    eyebrow: "About",
    h1: "We intend to be the premier AI company in Thailand",
    title: "About DeeLabs — a Thai-native AI company",
    description:
      "DeeLabs is a Thai-native AI company building internal AI apps, automations, and websites — demystifying AI into tools Thai companies actually use",
    mission: {
      heading: "Mission",
      body: "DeeLabs aims to become the premier AI company in Thailand. We are a Thai team building on AI from day one, and we believe AI should be demystified and turned into valuable tools Thai companies can actually use — first for SMEs, then for enterprises",
    },
    how: {
      heading: "How we work",
      items: [
        { title: "We use what we sell", desc: "The bots and agents we build for clients, we run on our own work first" },
        { title: "Proof before promises", desc: "Every offer starts with something viewable or a pilot you can measure" },
        { title: "Honest about status", desc: "We say clearly what is live, what is internal, and what is the kind of work we do" },
      ],
    },
    juniors: {
      heading: "We hire and train juniors from Thai universities",
      body: "We believe people with fewer chances should get to do serious work early. We hire and train graduates from Thai universities to build real things from day one",
    },
    citizenship: {
      heading: "Profit for something bigger",
      body: "We run a profitable business so we can help people who did not get a chance — that is why this company exists, not just a slogan",
    },
    founder: {
      heading: "Woman-founded, work-led",
      body: "DeeLabs is a woman-founded company. We do not shout it on the homepage because the work should speak — but we are glad to talk about it when you ask",
    },
    legal: {
      heading: "Legal entity",
      body: "Operating in Bangkok and its metropolitan area. Legal entity details appear in the footer of every page",
    },
  },

  contact: {
    eyebrow: "Contact",
    h1: "Talk to the DeeLabs team",
    title: "Contact DeeLabs — LINE, email, phone",
    description:
      "Contact DeeLabs: enterprises interested in a paid internal-AI pilot, or SMEs wanting a website with a care plan — LINE @deelabs, support@deelabs.co, +66 65 724 2988",
    dek: "Pick the path that matches you — both reach the same team",
    path: {
      legend: "What are you interested in",
      enterprise: {
        title: "An enterprise AI pilot",
        desc: "Tell us the P&L metric you want to move; we will scope a 4–8 week pilot",
      },
      sme: { title: "Get a site", desc: "A done-for-you website on a care plan, from 490 THB/month" },
    },
    form: {
      name: "Name",
      email: "Email",
      org: "Company / organisation",
      phone: "Phone (optional)",
      interests: "What are you interested in (choose any)",
      message: "Tell us about your problem",
      messagePlaceholder:
        "e.g. our finance team loses hours every week on dunning… or we need a site for our shop before next season…",
      source: "Traffic source",
      submit: "Send by email",
      privacy: "This button opens an email to support@deelabs.co with your message attached — we reply within one business day",
      sent: "Your email client should have opened. If not, call us or message us on LINE",
    },
    interestsOptions: {
      ecommerce: "E-commerce",
      crm: "CRM",
      erp: "ERP",
      mobile: "Mobile app",
      api: "API / integration",
    },
    channels: {
      heading: "Direct channels",
      lineNote: "Message us directly — LINE is best for continuing a conversation after an intro",
    },
  },

  notFound: {
    title: "Page not found",
    body: "The page you are looking for may have moved or never existed",
    home: "Back to home",
  },
};

export default en;
