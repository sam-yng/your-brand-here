export type RouteMetadata = Readonly<{
  title: string;
  description: string;
  path: `/${string}`;
  noindex?: boolean;
}>;

export const routeMetadata = {
  home: {
    title: "Home",
    description:
      "Your Brand Here is an independent web studio for distinctive, accessible websites.",
    path: "/",
  },
  services: {
    title: "Services",
    description: "Strategy, art direction, design systems, and production web builds.",
    path: "/services/",
  },
  studies: {
    title: "Brand studies",
    description: "Self-directed brand studies carried from brief to production code.",
    path: "/studies/",
  },
  northline: {
    title: "Northline Atelier",
    description: "A self-directed furniture and art-decor store brand study.",
    path: "/studies/northline-atelier/",
  },
  sundayService: {
    title: "Sunday Service",
    description: "A self-directed fictional kitchen-management game campaign study.",
    path: "/studies/sunday-service/",
  },
  commonThread: {
    title: "Common Thread",
    description: "A self-directed fictional inclusive clothing-label brand study.",
    path: "/studies/common-thread/",
  },
  process: {
    title: "Process",
    description:
      "A clear web design and development process from first note to handoff.",
    path: "/process/",
  },
  about: {
    title: "About",
    description: "Meet Sam Young, the designer and engineer behind Your Brand Here.",
    path: "/about/",
  },
  start: {
    title: "Start a project",
    description: "Tell Your Brand Here what you are making or changing.",
    path: "/start/",
  },
  thanks: {
    title: "Thanks",
    description: "Confirmation that a project inquiry was accepted.",
    path: "/start/thanks/",
    noindex: true,
  },
  privacy: {
    title: "Privacy",
    description: "How Your Brand Here handles inquiry and analytics data.",
    path: "/privacy/",
  },
} as const satisfies Record<string, RouteMetadata>;
