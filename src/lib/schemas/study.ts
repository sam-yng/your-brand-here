import { z } from "zod";

export const studySlugSchema = z.enum([
  "northline-atelier",
  "sunday-service",
  "common-thread",
]);

export const studySchema = z.object({
  slug: studySlugSchema,
  title: z.string().min(1),
  summary: z.string().min(1),
  honestyLabel: z.string().startsWith("Self-directed concept."),
});

export type Study = z.infer<typeof studySchema>;
