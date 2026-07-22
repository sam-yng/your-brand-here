import AxeBuilder from "@axe-core/playwright";
import { type Browser, expect, type Page } from "@playwright/test";

export type RouteExpectation = Readonly<{
  path: string;
  heading: string;
  title: string;
  description: string;
}>;

export async function expectAccessibleRoute(page: Page, route: RouteExpectation) {
  const response = await page.goto(route.path);

  expect(response?.ok()).toBe(true);
  await expect(page).toHaveTitle(route.title);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    route.description,
  );
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("h1")).toHaveText(route.heading);
  await expect(page.locator("main")).toHaveCount(1);
  await expect(page.getByRole("banner")).toHaveCount(1);
  await expect(page.getByRole("contentinfo")).toHaveCount(1);
  await expect(page.locator("head > title")).toHaveCount(1);
  await expect(page.locator('meta[name="description"]')).toHaveCount(1);
  await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);

  const results = await new AxeBuilder({ page }).analyze();
  expect(
    results.violations.filter(
      ({ impact }) => impact === "critical" || impact === "serious",
    ),
  ).toEqual([]);
}

export async function expectUsefulWithoutJavaScript(
  browser: Browser,
  route: RouteExpectation,
) {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();

  try {
    const response = await page.goto(route.path);
    expect(response?.ok()).toBe(true);
    await expect(page).toHaveTitle(route.title);
    await expect(page.locator("h1")).toHaveText(route.heading);
    await expect(page.getByRole("banner")).toBeVisible();

    const primaryNavigation = page.getByRole("navigation", {
      name: "Primary navigation",
    });
    if (!(await primaryNavigation.isVisible())) {
      await page.locator(".mobile-navigation summary").click();
      await expect(
        page.getByRole("navigation", { name: "Mobile navigation" }),
      ).toBeVisible();
    }

    await expect(page.getByRole("contentinfo")).toBeVisible();
  } finally {
    await context.close();
  }
}

export async function expectNoHorizontalOverflow(page: Page) {
  const sizes = await page.evaluate(() => ({
    body: document.body.scrollWidth,
    document: document.documentElement.scrollWidth,
    viewport: window.innerWidth,
  }));

  expect(sizes.body).toBeLessThanOrEqual(sizes.viewport);
  expect(sizes.document).toBeLessThanOrEqual(sizes.viewport);
}
