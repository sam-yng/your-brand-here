import { z } from "zod";

const paletteSwatchSchema = z.object({
  label: z.string().min(1),
  value: z.string().regex(/^#[0-9a-f]{6}$/i),
});

const collectionPieceSchema = z.object({
  number: z.string().regex(/^0[1-4]$/),
  slug: z.string().min(1),
  name: z.string().min(1),
  materials: z.string().min(1),
  price: z.string().regex(/^\$[\d,]+$/),
  caption: z.string().min(1),
  detail: z.string().min(1),
});

const northlineContentSchema = z.object({
  eyebrow: z.string().min(1),
  strapline: z.string().min(1),
  introduction: z.string().min(1),
  palette: paletteSwatchSchema.array().length(4),
  pieces: collectionPieceSchema.array().length(4),
  comparison: z.object({
    eyebrow: z.string().min(1),
    heading: z.string().min(1),
    photoLabel: z.string().min(1),
    planLabel: z.string().min(1),
    photoCaption: z.string().startsWith("Placeholder"),
    planCaption: z.string().startsWith("Placeholder"),
    explanation: z.string().min(1),
  }),
  buildNote: z.object({
    heading: z.string().min(1),
    introduction: z.string().min(1),
    proves: z.string().min(1).array().length(4),
    underTheHood: z.string().min(1).array().length(4),
  }),
  cta: z.object({
    heading: z.string().min(1),
    label: z.string().min(1),
    href: z.literal("/start/"),
  }),
  creativeWork: z.object({
    "@context": z.literal("https://schema.org"),
    "@type": z.literal("CreativeWork"),
    name: z.literal("Northline Atelier"),
    description: z.string().min(1),
    genre: z.literal("Brand study"),
    creator: z.object({
      "@type": z.literal("Person"),
      name: z.literal("Sam Young"),
    }),
    keywords: z.string().min(1).array().min(1),
  }),
});

export const northlineContent = northlineContentSchema.parse({
  eyebrow: "Furniture & art decor · Fictional store · Sydney",
  strapline: "Objects with a spine.",
  introduction:
    "The brief: a small atelier selling furniture and art decor needs its catalogue to feel like a folio, not a warehouse feed. The answer is an editorial store: limestone and oxblood instead of white and grey, one object per spread, and the working drawing sold alongside the photograph — because buyers of good objects care how they are made.",
  palette: [
    { label: "Limestone", value: "#d8d0bf" },
    { label: "Oxblood", value: "#5a2a26" },
    { label: "Slate blue", value: "#3a5a7c" },
    { label: "Cream", value: "#ede7d8" },
  ],
  pieces: [
    {
      number: "01",
      slug: "loma-chair",
      name: "Loma Chair",
      materials: "Walnut · bouclé",
      price: "$1,850",
      caption: "Loma Chair",
      detail: "Solid walnut · edition of 40",
    },
    {
      number: "02",
      slug: "meridian-credenza",
      name: "Meridian Credenza",
      materials: "Oak · steel",
      price: "$4,200",
      caption: "Meridian Credenza",
      detail: "Fumed oak · made to order",
    },
    {
      number: "03",
      slug: "halo-floor-lamp",
      name: "Halo Floor Lamp",
      materials: "Brass · linen",
      price: "$980",
      caption: "Halo Floor Lamp",
      detail: "Aged brass · dimmable",
    },
    {
      number: "04",
      slug: "terra-mirror",
      name: "Terra Mirror",
      materials: "Travertine",
      price: "$1,340",
      caption: "Terra Mirror",
      detail: "Honed travertine · edition of 25",
    },
  ],
  comparison: {
    eyebrow: "Signature interaction",
    heading: "The object and its drawing are the same fact.",
    photoLabel: "In the room",
    planLabel: "The drawing",
    photoCaption: "Placeholder — Loma chair & Halo lamp, styled room",
    planCaption: "Placeholder — working drawing 1:20, walnut & bouclé",
    explanation:
      "Every object pairs the styled photograph with the working drawing that produced it. The toggle crossfades in place — no layout shift, keyboard operable, and both states ship in the HTML so the pairing survives without JavaScript.",
  },
  buildNote: {
    heading: "What this study proves, honestly.",
    introduction:
      "A fictional store, followed through as if it were real: catalogue model, art direction, product pages, and production constraints decided together — not styled afterwards.",
    proves: [
      "Editorial art direction for commerce, beyond the studio shell",
      "Catalogue and product-page content modelling",
      "Responsive imagery and object galleries",
      "Subtle transitions that respect reduced motion",
    ],
    underTheHood: [
      'Scoped tokens: [data-study="northline"] overrides semantic variables',
      "Prerendered routes; the store stays browsable with JavaScript disabled",
      "≤ 90KB compressed JavaScript for the whole study",
      "Serif/sans pairing self-hosted as WOFF2",
    ],
  },
  cta: {
    heading: "Selling considered objects through an unconsidered website?",
    label: "Discuss a similar challenge",
    href: "/start/",
  },
  creativeWork: {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Northline Atelier",
    description:
      "A self-directed fictional furniture and art-decor store study exploring editorial commerce.",
    genre: "Brand study",
    creator: {
      "@type": "Person",
      name: "Sam Young",
    },
    keywords: [
      "editorial commerce",
      "catalogue modelling",
      "accessible interaction design",
    ],
  },
});

export type NorthlinePiece = (typeof northlineContent.pieces)[number];
