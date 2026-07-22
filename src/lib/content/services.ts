export type Service = Readonly<{
  number: `0${1 | 2 | 3}`;
  mark: "signal" | "system" | "real";
  title: string;
  summary: string;
  detail: string;
  deliverables: readonly [string, string, string];
}>;

export const services = [
  {
    number: "01",
    mark: "signal",
    title: "Find the signal",
    summary:
      "We turn scattered notes, old pages, and half-formed ideas into a clear message and a page plan with a job to do.",
    detail:
      "We turn scattered notes, old pages, and half-formed ideas into a clear message and a page plan with a job to do. Not a strategy deck — a working outline of what each page says, to whom, and why it earns its place.",
    deliverables: [
      "Positioning and message hierarchy",
      "Route map with a job per page",
      "Copy direction and content outline",
    ],
  },
  {
    number: "02",
    mark: "system",
    title: "Build the system",
    summary:
      "I establish the type, colour, layout, components, imagery, and motion rules that make the site feel like one specific brand.",
    detail:
      "I establish the type, colour, layout, components, imagery, and motion rules that make the site feel like one specific brand. Everything is documented so future pages inherit the same character without guesswork.",
    deliverables: [
      "Art direction and design tokens",
      "Component and layout grammar",
      "DESIGN.md — readable by people and coding agents",
    ],
  },
  {
    number: "03",
    mark: "real",
    title: "Make it real",
    summary:
      "I build, test, and launch the production site — responsive, accessible, fast, and documented for whatever comes next.",
    detail:
      "I build, test, and launch the production site — responsive, accessible, fast, and documented for whatever comes next. Accessibility and performance budgets are checked in CI, not promised in a proposal.",
    deliverables: [
      "Production SvelteKit build",
      "WCAG 2.2 AA and performance verification",
      "Launch, analytics, and handover notes",
    ],
  },
] as const satisfies readonly Service[];

export const serviceChain = [
  "Clarify the story",
  "Establish the art direction",
  "Create the design system",
  "Build the website",
  "Launch and hand over",
] as const;

export const engagementShapes = [
  {
    title: "Launch",
    body: "A new site end to end: story, direction, system, build. For a launch, a new offer, or a first serious web presence.",
    meta: "Full journey · 3–12 pages",
  },
  {
    title: "Reposition",
    body: "Your content and audience exist; the expression is generic or dated. We keep what works and rebuild the voice, system, and site.",
    meta: "Replace an existing site",
  },
  {
    title: "Extend",
    body: "A system I built (or a documented one) needs new pages, a new section, or a seasonal change — without drifting off-brand.",
    meta: "For past and documented systems",
  },
] as const;

export const goodFit = [
  "A marketing or editorial site with roughly 3–12 core pages",
  "A launch, repositioning, new offer, or replacement for a generic site",
  "You can provide domain expertise, timely feedback, and source material",
  "Clarity, character, accessibility, and speed matter more than feature lists",
] as const;

export const notOffer = [
  "Logo-only or full corporate identity work",
  "High-volume ecommerce, for now",
  "An authenticated SaaS product disguised as a “website”",
  "Unlimited revisions, speculative pitches, or promises of “viral”",
] as const;
