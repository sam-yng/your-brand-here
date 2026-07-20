import { describe, expect, test } from "bun:test";
import { routeMetadata } from "../../src/lib/content/metadata";
import { processStages } from "../../src/lib/content/process";
import { services } from "../../src/lib/content/services";
import { studies } from "../../src/lib/content/studies";

describe("foundation content contracts", () => {
  test("keeps route metadata paths, titles, and descriptions unique", () => {
    const metadata = Object.values(routeMetadata);

    expect(new Set(metadata.map(({ path }) => path)).size).toBe(metadata.length);
    expect(new Set(metadata.map(({ title }) => title)).size).toBe(metadata.length);
    expect(new Set(metadata.map(({ description }) => description)).size).toBe(
      metadata.length,
    );
  });

  test("freezes the canonical confirmation route", () => {
    expect(routeMetadata.thanks.path).toBe("/start/thanks/");
    expect(routeMetadata.thanks.noindex).toBe(true);
  });

  test("validates three honest study records at the content boundary", () => {
    expect(studies).toHaveLength(3);
    expect(
      studies.every(({ honestyLabel }) =>
        honestyLabel.startsWith("Self-directed concept."),
      ),
    ).toBe(true);
  });

  test("keeps accepted service and process cardinality", () => {
    expect(services).toHaveLength(3);
    expect(processStages).toHaveLength(5);
  });
});
