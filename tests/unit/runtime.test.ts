import { describe, expect, test } from "bun:test";
import { assertSupportedNodeVersion } from "../../src/lib/build-runtime";

describe("build runtime guard", () => {
  test("accepts Node 24 for every platform path", () => {
    expect(() => assertSupportedNodeVersion("24.17.0")).not.toThrow();
  });

  test("rejects Node 26 before platform-specific adapter selection", () => {
    expect(() => assertSupportedNodeVersion("26.3.1")).toThrow(
      "Your Brand Here builds require Node 24; received 26.3.1",
    );
  });

  test("rejects invalid version input", () => {
    expect(() => assertSupportedNodeVersion("unknown")).toThrow(
      "Your Brand Here builds require Node 24; received unknown",
    );
  });
});
