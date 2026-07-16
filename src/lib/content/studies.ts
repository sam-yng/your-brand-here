import { z } from "zod";
import { studySchema } from "$lib/schemas/study";

const studioStudySchema = studySchema.extend({
  path: z.string().startsWith("/studies/").endsWith("/"),
  number: z.enum(["01", "02", "03"]),
  proves: z.string().min(1),
});

const studyInput = [
  {
    slug: "northline-atelier",
    path: "/studies/northline-atelier/",
    number: "01",
    title: "Northline Atelier",
    summary:
      "A fictional furniture and art-decor store with an editorial commerce system.",
    honestyLabel: "Self-directed concept. This is not commissioned client work.",
    proves: "Editorial art direction, stable comparisons, and scoped study tokens.",
  },
  {
    slug: "sunday-service",
    path: "/studies/sunday-service/",
    number: "02",
    title: "Sunday Service",
    summary:
      "A fictional cozy kitchen-management game campaign with playful state themes.",
    honestyLabel: "Self-directed concept. This is not commissioned client work.",
    proves: "Campaign character, accessible state changes, and honest demonstrators.",
  },
  {
    slug: "common-thread",
    path: "/studies/common-thread/",
    number: "03",
    title: "Common Thread",
    summary:
      "A fictional inclusive clothing label with lookbook, filters, sizing, and print paths.",
    honestyLabel: "Self-directed concept. This is not commissioned client work.",
    proves: "Inclusive commerce detail, URL-backed filters, and useful print output.",
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
