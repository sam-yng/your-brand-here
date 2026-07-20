export type NavigationLink = Readonly<{
  href: `/${string}`;
  label: string;
}>;

export type FooterGroup = Readonly<{
  label: string;
  links: readonly NavigationLink[];
}>;

export const primaryNavigation = [
  { href: "/services/", label: "Services" },
  { href: "/studies/", label: "Studies" },
  { href: "/process/", label: "Process" },
  { href: "/about/", label: "About" },
] as const satisfies readonly NavigationLink[];

export const primaryAction = {
  href: "/start/",
  label: "Start a project",
} as const satisfies NavigationLink;

export const footerGroups = [
  {
    label: "Studio",
    links: [
      { href: "/services/", label: "Services" },
      { href: "/process/", label: "Process" },
      { href: "/about/", label: "About" },
      { href: "/privacy/", label: "Privacy" },
    ],
  },
  {
    label: "Brand studies",
    links: [
      { href: "/studies/northline-atelier/", label: "Northline Atelier" },
      { href: "/studies/sunday-service/", label: "Sunday Service" },
      { href: "/studies/common-thread/", label: "Common Thread" },
    ],
  },
] as const satisfies readonly FooterGroup[];
