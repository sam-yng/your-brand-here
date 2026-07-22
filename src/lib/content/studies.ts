import { z } from "zod";
import { studySchema } from "$lib/schemas/study";

const studioStudySchema = studySchema.extend({
  path: z.string().startsWith("/studies/").endsWith("/"),
  number: z.enum(["01", "02", "03"]),
  kind: z.string().min(1),
  homeSummary: z.string().min(1),
  indexSummary: z.string().min(1),
  explores: z.string().min(1),
  status: z.enum(["Study available", "Work in progress"]),
});

const studyInput = [
  {
    slug: "northline-atelier",
    path: "/studies/northline-atelier/",
    number: "01",
    kind: "Furniture & art decor",
    title: "Northline Atelier",
    summary:
      "A fictional furniture and art-decor store with an editorial commerce system.",
    honestyLabel: "Self-directed concept. This is not commissioned client work.",
    status: "Study available",
    homeSummary:
      "An editorial catalogue pairing considered objects with the drawings and materials that explain how they are made.",
    indexSummary:
      "An editorial store for furniture and objects — one piece per spread, with working drawings beside photographs.",
    explores: "Editorial commerce · catalogue modelling · no-JavaScript reading",
  },
  {
    slug: "sunday-service",
    path: "/studies/sunday-service/",
    number: "02",
    kind: "Video game launch",
    title: "Sunday Service",
    summary:
      "A fictional cozy kitchen-management game campaign with playful state themes.",
    honestyLabel: "Self-directed concept. This is not commissioned client work.",
    status: "Work in progress",
    homeSummary:
      "Work in progress: exploring key art, shift-based modes, and a wishlist journey for a cozy kitchen-management game.",
    indexSummary:
      "Work in progress on a campaign page for a cozy kitchen-management game, with key art, shift-based modes, and honest platform claims.",
    explores: "Campaign design · state theming · conversion UX",
  },
  {
    slug: "common-thread",
    path: "/studies/common-thread/",
    number: "03",
    kind: "Clothing label",
    title: "Common Thread",
    summary:
      "A fictional inclusive clothing label with lookbook, filters, sizing, and print paths.",
    honestyLabel: "Self-directed concept. This is not commissioned client work.",
    status: "Work in progress",
    homeSummary:
      "Work in progress: exploring a lookbook grid, category filters, and sizing and care as first-class content.",
    indexSummary:
      "Work in progress on an independent-label concept with a lookbook grid, category filters, repairs-for-life, and inclusive sizing.",
    explores: "Lookbook commerce · filtering · inclusive sizing · print CSS",
  },
] as const;

export const studies = studioStudySchema.array().parse(studyInput);
export type StudioStudy = z.infer<typeof studioStudySchema>;

export function getStudy(slug: StudioStudy["slug"]) {
  const study = studies.find((candidate) => candidate.slug === slug);
  if (!study) {
    throw new Error(`Missing validated study content for ${slug}`);
  }

  return study;
}
