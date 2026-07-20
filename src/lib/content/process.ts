export type ProcessStage = Readonly<{
  number: `0${1 | 2 | 3 | 4 | 5}`;
  title: string;
  summary: string;
  what: string;
  deliverable: string;
  clientPart: string;
}>;

export const processStages = [
  {
    number: "01",
    title: "Listen and frame",
    summary: "Clarify the job, audience, evidence, and constraints.",
    what: "We talk through what you make, who it is for, what is not working now, and what a better site must change. I read everything you already have — old pages, notes, reviews, pitch documents.",
    deliverable: "An approved message hierarchy and a route map with a job per page.",
    clientPart: "Source material, honest answers, and a decision-maker in the room.",
  },
  {
    number: "02",
    title: "Write and direct",
    summary: "Shape the message and choose a distinctive visual world.",
    what: "I draft the key copy and establish the art direction: type, colour, layout grammar, and the one visual idea that belongs to your brand — not to a template.",
    deliverable: "Page outlines with working copy and a direction you can react to.",
    clientPart: "One focused review pass — clarity and truth, not wordsmithing.",
  },
  {
    number: "03",
    title: "Design and prototype",
    summary: "Prove hierarchy, rhythm, responsive behavior, and key states.",
    what: "The direction becomes a design system and clickable prototypes of the pages that matter most. We test the journey a real visitor takes, not isolated screens.",
    deliverable: "A documented design system (DESIGN.md) and working prototypes.",
    clientPart: "Decisions on the prototype, made against the original goal.",
  },
  {
    number: "04",
    title: "Build and test",
    summary: "Implement the system, content, accessibility, and production paths.",
    what: "I build the production site. Accessibility, performance budgets, keyboard journeys, and the no-JavaScript path are verified in CI as pages are built — not patched afterwards.",
    deliverable: "A staging site you can use on your own devices, with test results.",
    clientPart: "Real content in final form, and a review on your actual phone.",
  },
  {
    number: "05",
    title: "Launch and hand over",
    summary: "Verify the live journey and leave maintainable ownership behind.",
    what: "Domain, analytics, security headers, social images, and the inquiry pipeline go live. I walk you through editing, and hand over documentation a future developer can trust.",
    deliverable: "A launched site, its records, and a clear path for what comes next.",
    clientPart: "DNS access, a launch date, and twenty minutes for the walkthrough.",
  },
] as const satisfies readonly ProcessStage[];
