import { describe, expect, test } from "@jest/globals";
import { isOddNumber } from "./isOddNumber";

describe("isOddNumber", () => {
  test("isOddNumber 0 to equal false", () => {
    expect(isOddNumber(0)).toBe(false);
  });
  test("isOddNumber 1 to equal true", () => {
    expect(isOddNumber(1)).toBe(true);
  });
  test("isOddNumber 2 to equal false", () => {
    expect(isOddNumber(2)).toBe(false);
  });
  test("isOddNumber 3 to equal true", () => {
    expect(isOddNumber(3)).toBe(true);
  });
});
