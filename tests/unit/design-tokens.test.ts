import { describe, expect, test } from "bun:test";

const css = await Bun.file(new URL("../../src/app.css", import.meta.url)).text();

function token(name: string) {
  const match = css.match(new RegExp(`--studio-${name}:\\s*(#[0-9a-f]{6});`, "i"));
  if (!match?.[1]) {
    throw new Error(`Missing canonical token --studio-${name}`);
  }

  return match[1];
}

function luminance(hex: string) {
  const channels = hex
    .slice(1)
    .match(/.{2}/g)
    ?.map((channel) => Number.parseInt(channel, 16) / 255)
    .map((channel) =>
      channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
    );

  if (!channels) {
    throw new Error(`Invalid color ${hex}`);
  }

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrast(foreground: string, background: string) {
  const values = [luminance(foreground), luminance(background)].sort(
    (left, right) => right - left,
  );
  return (values[0] + 0.05) / (values[1] + 0.05);
}

describe("canonical design tokens", () => {
  test("defines the complete accepted semantic palette", () => {
    const names = [
      "void",
      "canvas",
      "ink",
      "muted",
      "line",
      "violet",
      "violet-light",
      "terracotta",
      "ochre",
      "slate",
      "clay",
      "mist",
      "white",
      "success",
    ];

    expect(names.map(token)).toHaveLength(names.length);
  });

  test("keeps intended text pairs at WCAG 2.2 AA contrast", () => {
    const pairs = [
      ["ink", "canvas"],
      ["muted", "canvas"],
      ["canvas", "void"],
      ["white", "violet"],
      ["violet-light", "void"],
      ["ink", "terracotta"],
      ["ink", "success"],
    ] as const;

    for (const [foreground, background] of pairs) {
      expect(contrast(token(foreground), token(background))).toBeGreaterThanOrEqual(
        4.5,
      );
    }
  });
});
