import { expect, test } from "@playwright/test";
import {
  expectAccessibleRoute,
  expectNoHorizontalOverflow,
  expectUsefulWithoutJavaScript,
  type RouteExpectation,
} from "./helpers";

const routes = [
  {
    path: "/",
    heading: "Your work has a point of view. Your website should too.",
    title: "Your Brand Here — Independent web studio",
    description:
      "Your Brand Here is an independent web studio for distinctive, accessible websites.",
  },
  {
    path: "/services/",
    heading: "One joined-up service, not five hand-offs.",
    title: "Services — Your Brand Here",
    description: "Strategy, art direction, design systems, and production web builds.",
  },
  {
    path: "/studies/",
    heading: "New ideas, made properly.",
    title: "Brand studies — Your Brand Here",
    description: "Self-directed brand studies carried from brief to production code.",
  },
  {
    path: "/studies/northline-atelier/",
    heading: "Northline Atelier",
    title: "Northline Atelier — Your Brand Here",
    description: "A self-directed furniture and art-decor store brand study.",
  },
  {
    path: "/studies/sunday-service/",
    heading: "Sunday Service",
    title: "Sunday Service — Your Brand Here",
    description: "A self-directed fictional kitchen-management game campaign study.",
  },
  {
    path: "/studies/common-thread/",
    heading: "Common Thread",
    title: "Common Thread — Your Brand Here",
    description: "A self-directed fictional inclusive clothing-label brand study.",
  },
  {
    path: "/process/",
    heading: "Clear from first note to final handoff.",
    title: "Process — Your Brand Here",
    description:
      "A clear web design and development process from first note to handoff.",
  },
  {
    path: "/about/",
    heading:
      "I'm Sam Young, a software engineer who cares how things read, move, and feel — not only whether they run.",
    title: "About — Your Brand Here",
    description: "Meet Sam Young, the designer and engineer behind Your Brand Here.",
  },
  {
    path: "/start/",
    heading: "Put your brand here.",
    title: "Start a project — Your Brand Here",
    description: "Tell Your Brand Here what you are making or changing.",
  },
  {
    path: "/start/thanks/",
    heading: "Thanks",
    title: "Thanks — Your Brand Here",
    description: "Confirmation that a project inquiry was accepted.",
  },
  {
    path: "/privacy/",
    heading: "Short, because there isn't much to disclose.",
    title: "Privacy — Your Brand Here",
    description: "How Your Brand Here handles inquiry and analytics data.",
  },
] as const satisfies readonly RouteExpectation[];

test("/ renders accessible foundation", async ({ page }) => {
  await expectAccessibleRoute(page, routes[0]);
});

test("/services/ renders accessible foundation", async ({ page }) => {
  await expectAccessibleRoute(page, routes[1]);
});

test("/studies/ renders accessible foundation", async ({ page }) => {
  await expectAccessibleRoute(page, routes[2]);
});

test("/studies/northline-atelier/ renders accessible foundation", async ({ page }) => {
  await expectAccessibleRoute(page, routes[3]);
});

test("/studies/sunday-service/ renders accessible foundation", async ({ page }) => {
  await expectAccessibleRoute(page, routes[4]);
});

test("/studies/common-thread/ renders accessible foundation", async ({ page }) => {
  await expectAccessibleRoute(page, routes[5]);
});

test("/process/ renders accessible foundation", async ({ page }) => {
  await expectAccessibleRoute(page, routes[6]);
});

test("/about/ renders accessible foundation", async ({ page }) => {
  await expectAccessibleRoute(page, routes[7]);
});

test("/start/ renders accessible foundation", async ({ page }) => {
  await expectAccessibleRoute(page, routes[8]);
});

test("/start/thanks/ renders accessible foundation", async ({ page }) => {
  await expectAccessibleRoute(page, routes[9]);
});

test("/privacy/ renders accessible foundation", async ({ page }) => {
  await expectAccessibleRoute(page, routes[10]);
});

test("legacy /thanks/ permanently redirects to canonical confirmation route", async ({
  request,
  page,
}) => {
  const response = await request.get("/thanks/", { maxRedirects: 0 });

  expect(response.status()).toBe(308);
  expect(response.headers().location).toBe("/start/thanks/");

  await page.goto("/thanks/");
  await expect(page).toHaveURL(/\/start\/thanks\/$/);
});

test("representative direct loads remain useful without JavaScript", async ({
  browser,
}) => {
  for (const route of [
    routes[0],
    routes[1],
    routes[2],
    routes[6],
    routes[7],
    routes[8],
    routes[9],
    routes[10],
  ]) {
    await expectUsefulWithoutJavaScript(browser, route);
  }
});

test("Home communicates offer, range, process, and next action", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByText("Independent web studio · Sydney + remote"),
  ).toBeVisible();
  await expect(page.getByLabel("Studio capabilities").locator("span")).toHaveCount(5);
  await expect(page.locator(".service-preview")).toHaveCount(3);
  await expect(page.locator(".study-plate.card")).toHaveCount(3);
  await expect(page.getByText("Work in progress", { exact: true })).toHaveCount(3);
  await expect(page.getByRole("link", { name: /View work in progress/ })).toHaveCount(
    3,
  );
  await expect(page.locator(".process-preview li")).toHaveCount(5);
  await expect(page.locator(".availability-pill")).toHaveCount(0);
  await expect(page.locator(".brand-slot")).toHaveAttribute("data-motion", "enabled");
  await expect(page.getByRole("link", { name: "Put your brand here" })).toBeVisible();
  await expect(page.locator("[data-treatment-count]")).toHaveText(
    /Treatment [1-3] \/ 3/,
  );
});

test("BrandSlot replay has focus parity and reduced motion ends on treatment three", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await expect(page.locator("[data-treatment-count]")).toHaveText("Treatment 3 / 3");
  await expect(page.locator(".treatment--final")).toHaveCSS("opacity", "1");

  await page.getByRole("link", { name: "See the studies" }).focus();
  await expect(page.locator("[data-treatment-count]")).toHaveText("Treatment 3 / 3");
});

test("Studies index preserves honesty and keeps Signal/Noise unlinked", async ({
  page,
}) => {
  await page.goto("/studies/");

  await expect(page.getByText(/Self-directed concepts/)).toBeVisible();
  await expect(page.locator(".study-plate.row")).toHaveCount(3);
  await expect(page.getByText("Work in progress", { exact: true })).toHaveCount(3);
  await expect(page.getByText("Explores:")).toHaveCount(3);
  await expect(page.getByRole("link", { name: /View work in progress/ })).toHaveCount(
    3,
  );
  await expect(page.getByText("Signal/Noise Records")).toBeVisible();
  await expect(page.getByRole("link", { name: /Signal\/Noise Records/ })).toHaveCount(
    0,
  );
  await expect(page.getByText("In progress", { exact: true })).toBeVisible();
});

test("commercial CTA styles remain scoped and preserve hover contrast", async ({
  page,
}) => {
  for (const route of ["/", "/services/"]) {
    await page.goto(route);
    await expect(page.locator(".studio-header .cta-link")).toHaveCSS(
      "min-height",
      "44px",
    );
  }

  await page.goto("/");
  const processLink = page.getByRole("link", { name: "Full process" });
  await processLink.hover();
  await expect(processLink).toHaveCSS("background-color", "rgb(23, 23, 22)");
  await expect(processLink).toHaveCSS("color", "rgb(255, 254, 250)");
});

test("Services and Process expose complete accepted content", async ({ page }) => {
  await page.goto("/services/");
  await expect(page.locator(".service-detail")).toHaveCount(3);
  await expect(page.locator(".engagement-card")).toHaveCount(3);
  await expect(page.getByText(/indicative budget band in AUD/)).toBeVisible();
  await expect(page.getByRole("heading", { name: "A good fit" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Not the offer" })).toBeVisible();

  await page.goto("/process/");
  await expect(page.locator(".process-card")).toHaveCount(5);
  await expect(page.getByRole("heading", { name: "What happens" })).toHaveCount(5);
  await expect(page.getByRole("heading", { name: "You get" })).toHaveCount(5);
  await expect(page.getByRole("heading", { name: "Your part" })).toHaveCount(5);
});

test("About preserves evidence decisions and Privacy reflects current collection", async ({
  page,
}) => {
  await page.goto("/about/");
  await expect(page.locator(".evidence-card")).toHaveCount(4);
  await expect(page.locator(".hard-call")).toHaveCount(4);
  await expect(page.locator(".standards-panel li")).toHaveCount(5);

  await page.goto("/privacy/");
  await expect(page.locator(".privacy-card")).toHaveCount(4);
  await expect(page.getByText("No analytics are currently installed.")).toBeVisible();
  await expect(page.getByText(/non-submitting preview/)).toBeVisible();
});

test("Start presents full schema without false submission", async ({ page }) => {
  await page.goto("/start/");

  await expect(page.locator("form input[name='name']")).toHaveAttribute("required", "");
  await expect(page.locator("form input[name='email']")).toHaveAttribute(
    "required",
    "",
  );
  await expect(page.locator("form textarea[name='brief']")).toHaveAttribute(
    "required",
    "",
  );
  await expect(page.locator("form input[name='consent']")).toHaveAttribute(
    "required",
    "",
  );
  await expect(page.locator("form select[name='budget'] option")).toHaveCount(5);
  await expect(page.getByRole("button", { name: "Send project brief" })).toBeDisabled();
  await expect(page.getByRole("status")).toContainText("Form delivery is not live yet");
  await expect(
    page.locator(".email-panel").getByRole("link", { name: "young142001@gmail.com" }),
  ).toHaveAttribute("href", "mailto:young142001@gmail.com");
});

test("commercial routes avoid horizontal overflow at 320px", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });

  for (const route of [
    "/",
    "/services/",
    "/studies/",
    "/process/",
    "/about/",
    "/privacy/",
    "/start/",
  ]) {
    await page.goto(route);
    await expectNoHorizontalOverflow(page);
  }
});

test("skip link and desktop navigation support keyboard use", async ({ page }) => {
  await page.goto("/");

  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();

  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Your Brand Here" }).first(),
  ).toBeFocused();
});

test("mobile navigation works at 320px with keyboard and no overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/");

  const menu = page.locator(".mobile-navigation summary");
  await menu.focus();
  await page.keyboard.press("Enter");
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Services" }).last()).toBeVisible();
  await expectNoHorizontalOverflow(page);
});

test("reduced motion collapses mobile navigation animation", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.locator(".mobile-navigation summary").click();

  const duration = await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .evaluate((element) => getComputedStyle(element).animationDuration);

  expect(Number.parseFloat(duration)).toBeLessThanOrEqual(0.00001);
});

test("unknown routes render useful recovery", async ({ page }) => {
  const response = await page.goto("/not-a-real-route/");

  expect(response?.status()).toBe(404);
  await expect(page).toHaveTitle("Page not found — Your Brand Here");
  await expect(page.locator("h1")).toHaveText("Page not found");
  await expect(page.getByRole("link", { name: "Return home" })).toBeVisible();
});
