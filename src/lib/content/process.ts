export type ProcessStage = Readonly<{
  number: `0${1 | 2 | 3 | 4 | 5}`;
  title: string;
  summary: string;
}>;

export const processStages = [
  {
    number: "01",
    title: "Listen and frame",
    summary: "Clarify the job, audience, evidence, and constraints.",
  },
  {
    number: "02",
    title: "Write and direct",
    summary: "Shape the message and choose a distinctive visual world.",
  },
  {
    number: "03",
    title: "Design and prototype",
    summary: "Prove hierarchy, rhythm, responsive behavior, and key states.",
  },
  {
    number: "04",
    title: "Build and test",
    summary: "Implement the system, content, accessibility, and production paths.",
  },
  {
    number: "05",
    title: "Launch and hand over",
    summary: "Verify the live journey and leave maintainable ownership behind.",
  },
] as const satisfies readonly ProcessStage[];
