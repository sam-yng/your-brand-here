import { describe, expect, test } from "bun:test";
import { homeConfiguration } from "../../src/lib/content/commercial";
import { routeMetadata } from "../../src/lib/content/metadata";
import { processStages } from "../../src/lib/content/process";
import {
  engagementShapes,
  serviceChain,
  services,
} from "../../src/lib/content/services";
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
    expect(studies.every(({ status }) => status === "Work in progress")).toBe(true);
    expect(studies.every(({ explores }) => explores.length > 0)).toBe(true);
  });

  test("keeps optional Home signals explicitly configurable", () => {
    expect(homeConfiguration.availability).toBeNull();
    expect(homeConfiguration.brandSlotMotion).toBe(true);
  });

  test("keeps accepted service and process cardinality", () => {
    expect(services).toHaveLength(3);
    expect(processStages).toHaveLength(5);
    expect(serviceChain).toHaveLength(5);
    expect(engagementShapes).toHaveLength(3);
    expect(services.every(({ deliverables }) => deliverables.length === 3)).toBe(true);
    expect(
      processStages.every(
        ({ what, deliverable, clientPart }) =>
          what.length > 0 && deliverable.length > 0 && clientPart.length > 0,
      ),
    ).toBe(true);
  });
});
