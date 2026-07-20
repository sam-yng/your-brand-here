export const capabilities = [
  "Story",
  "Art direction",
  "Design system",
  "Build",
  "Launch",
] as const;

export type HomeConfiguration = Readonly<{
  availability: "Booking from September 2026" | "Typical lead time 3–4 weeks" | null;
  brandSlotMotion: boolean;
}>;

export const homeConfiguration: HomeConfiguration = {
  availability: null,
  brandSlotMotion: true,
};

export const engagementOptions = {
  projectTypes: [
    "New site / launch",
    "Repositioning an existing site",
    "New offer or section",
    "Not sure yet",
  ],
  budgets: ["Under $10k", "$10k – $20k", "$20k – $40k", "$40k +", "Help me scope it"],
  timings: [
    "As soon as we can",
    "In the next 1–3 months",
    "This year",
    "Just exploring",
  ],
} as const;

export const evidence = [
  {
    name: "Lumen",
    kind: "Systems engineering",
    tone: "violet",
    body: "A TypeScript monorepo with local transcription, hybrid retrieval, background work, and end-to-end testing — proof that I can ship complex systems that keep working.",
    decision:
      "Hard call: local-first transcription over a simpler API dependency, to keep user audio private.",
  },
  {
    name: "Rankwire",
    kind: "Product system",
    tone: "terracotta",
    body: "An editorial language developed into a full product: authentication, feed ingestion, per-user ranking, tests, and repository guardrails that keep contributions honest.",
    decision:
      "Hard call: per-user ranking on ingestion rather than at read time, trading storage for speed.",
  },
  {
    name: "h-alter",
    kind: "Tooling",
    tone: "ink",
    body: "A published harness that sets up the quality gate — formatting, linting, type checks, tests — so every project starts with the same floor instead of renegotiating it.",
    decision:
      "Hard call: one opinionated gate over configurable options. Fewer choices, more shipped.",
  },
  {
    name: "This studio",
    kind: "Working proof",
    tone: "slate",
    body: "Your Brand Here is itself the specimen: a multi-page SvelteKit studio shell with distinct study previews, accessible navigation, and checks enforced in CI.",
    decision:
      "Hard call: self-directed studies labelled honestly, instead of implying client work that does not exist.",
  },
] as const;

export const buildStandards = [
  "Server-rendered pages that work before — and without — JavaScript",
  "WCAG 2.2 AA as a design input, not a cleanup task",
  "Performance budgets enforced in CI, not promised in proposals",
  "Reduced-motion journeys that stay complete and understandable",
  "Documentation precise enough that the next developer needs no archaeology",
] as const;
