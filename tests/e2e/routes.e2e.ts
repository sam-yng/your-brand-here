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
    heading: "Services",
    title: "Services — Your Brand Here",
    description: "Strategy, art direction, design systems, and production web builds.",
  },
  {
    path: "/studies/",
    heading: "Brand studies",
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
    heading: "Process",
    title: "Process — Your Brand Here",
    description:
      "A clear web design and development process from first note to handoff.",
  },
  {
    path: "/about/",
    heading: "About",
    title: "About — Your Brand Here",
    description: "Meet Sam Young, the designer and engineer behind Your Brand Here.",
  },
  {
    path: "/start/",
    heading: "Start a project",
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
    heading: "Privacy",
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
  for (const route of [routes[0], routes[3], routes[8], routes[9]]) {
    await expectUsefulWithoutJavaScript(browser, route);
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
