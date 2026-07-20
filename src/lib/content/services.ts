export type Service = Readonly<{
  number: `0${1 | 2 | 3}`;
  title: string;
  summary: string;
}>;

export const services = [
  {
    number: "01",
    title: "Find the signal",
    summary:
      "Shape the message, structure, and visual point of view before screens multiply.",
  },
  {
    number: "02",
    title: "Build the system",
    summary:
      "Turn direction into reusable type, color, layout, content, and interaction rules.",
  },
  {
    number: "03",
    title: "Make it real",
    summary:
      "Build, test, launch, and hand over one production website without a relay race.",
  },
] as const satisfies readonly Service[];
