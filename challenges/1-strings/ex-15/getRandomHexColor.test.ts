import { describe, expect, test } from "@jest/globals";
import { getRandomHexColor } from "./getRandomHexColor";

describe("getRandomHexColor", () => {
  test("should return a random hex color", () => {
    expect(getRandomHexColor()).toMatch(/^#[0-9a-fA-F]{6}$/);
  });
  test("should return a random hex color", () => {
    expect(getRandomHexColor()).not.toBe(getRandomHexColor());
  });
});
