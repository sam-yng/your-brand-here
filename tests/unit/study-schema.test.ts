import { describe, expect, test } from "bun:test";
import { studySchema } from "../../src/lib/schemas/study";

describe("studySchema", () => {
  test("accepts an honestly labelled v1 study", () => {
    const result = studySchema.safeParse({
      slug: "northline-atelier",
      title: "Northline Atelier",
      summary: "An architecture and interiors study.",
      honestyLabel: "Self-directed concept. This is not commissioned client work.",
    });

    expect(result.success).toBe(true);
  });

  test("rejects a study without the required honesty label", () => {
    const result = studySchema.safeParse({
      slug: "sunday-service",
      title: "Sunday Service",
      summary: "A neighbourhood kitchen study.",
      honestyLabel: "Client work.",
    });

    expect(result.success).toBe(false);
  });
});
