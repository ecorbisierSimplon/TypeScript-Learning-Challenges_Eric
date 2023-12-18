import { describe, expect, test } from "@jest/globals";
import { isPositiveNumber } from "./isPositiveNumber";

describe("isPositiveNumber", () => {
  test("isPositiveNumber 0 to equal false", () => {
    expect(isPositiveNumber(0)).toBe(false);
  });
  test("isPositiveNumber 1 to equal true", () => {
    expect(isPositiveNumber(1)).toBe(true);
  });
  test("isPositiveNumber -1 to equal false", () => {
    expect(isPositiveNumber(-1)).toBe(false);
  });
  test("isPositiveNumber 0.1 to equal true", () => {
    expect(isPositiveNumber(0.1)).toBe(true);
  });
  test("isPositiveNumber -0.1 to equal false", () => {
    expect(isPositiveNumber(-0.1)).toBe(false);
  });
});
