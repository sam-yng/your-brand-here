import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  fullyParallel: true,
  testDir: "./tests/e2e",
  testMatch: "**/*.e2e.ts",
  use: {
    baseURL: "http://127.0.0.1:4173",
    trace: "on-first-retry",
  },
  projects: [
    { name: "desktop-chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile-chromium", use: { ...devices["Pixel 7"] } },
  ],
  webServer: {
    command: "bun run build && bun run preview --host 127.0.0.1",
    port: 4173,
    reuseExistingServer: false,
  },
});
