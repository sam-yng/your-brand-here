import AxeBuilder from "@axe-core/playwright";
import { expect, type Page, test } from "@playwright/test";

async function expectAccessibleRoute(
  page: Page,
  path: string,
  heading: string,
  title: string,
) {
  const response = await page.goto(path);

  expect(response?.ok()).toBe(true);
  await expect(page).toHaveTitle(title);
  await expect(page.locator("h1")).toHaveText(heading);
  await expect(page.locator("main")).toBeVisible();

  const results = await new AxeBuilder({ page }).analyze();
  expect(
    results.violations.filter(
      ({ impact }) => impact === "critical" || impact === "serious",
    ),
  ).toEqual([]);
}

test("/ renders the studio foundation", async ({ page }) => {
  await expectAccessibleRoute(
    page,
    "/",
    "Your work has a point of view. Your website should too.",
    "Your Brand Here — Independent web studio",
  );
});

test("/services/ renders the services foundation", async ({ page }) => {
  await expectAccessibleRoute(
    page,
    "/services/",
    "Services",
    "Services — Your Brand Here",
  );
});

test("/studies/ renders the studies foundation", async ({ page }) => {
  await expectAccessibleRoute(
    page,
    "/studies/",
    "Brand studies",
    "Brand studies — Your Brand Here",
  );
});

test("/studies/northline-atelier/ renders the Northline study", async ({ page }) => {
  await expectAccessibleRoute(
    page,
    "/studies/northline-atelier/",
    "Northline Atelier",
    "Northline Atelier — Your Brand Here",
  );
});

test("/studies/sunday-service/ renders the Sunday Service study", async ({ page }) => {
  await expectAccessibleRoute(
    page,
    "/studies/sunday-service/",
    "Sunday Service",
    "Sunday Service — Your Brand Here",
  );
});

test("/studies/common-thread/ renders the Common Thread study", async ({ page }) => {
  await expectAccessibleRoute(
    page,
    "/studies/common-thread/",
    "Common Thread",
    "Common Thread — Your Brand Here",
  );
});

test("/process/ renders the process foundation", async ({ page }) => {
  await expectAccessibleRoute(
    page,
    "/process/",
    "Process",
    "Process — Your Brand Here",
  );
});

test("/about/ renders the about foundation", async ({ page }) => {
  await expectAccessibleRoute(page, "/about/", "About", "About — Your Brand Here");
});

test("/start/ renders the inquiry foundation", async ({ page }) => {
  await expectAccessibleRoute(
    page,
    "/start/",
    "Start a project",
    "Start a project — Your Brand Here",
  );
});

test("/thanks/ renders the accepted-inquiry foundation", async ({ page }) => {
  await expectAccessibleRoute(page, "/thanks/", "Thanks", "Thanks — Your Brand Here");
});

test("/privacy/ renders the privacy foundation", async ({ page }) => {
  await expectAccessibleRoute(
    page,
    "/privacy/",
    "Privacy",
    "Privacy — Your Brand Here",
  );
});

test("unknown routes render the recovery page", async ({ page }) => {
  const response = await page.goto("/not-a-real-route/");

  expect(response?.status()).toBe(404);
  await expect(page).toHaveTitle("Page not found — Your Brand Here");
  await expect(page.locator("h1")).toHaveText("Page not found");
  await expect(page.getByRole("link", { name: "Return home" })).toBeVisible();
});
