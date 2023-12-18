import { describe, expect, test } from "@jest/globals";
import { isNegativeNumber } from "./isNegativeNumber";

describe("isNegativeNumber", () => {
  test("0 to equal false", () => {
    expect(isNegativeNumber(0)).toBe(false);
  });
  test("1 to equal false", () => {
    expect(isNegativeNumber(1)).toBe(false);
  });
  test("-1 to equal true", () => {
    expect(isNegativeNumber(-1)).toBe(true);
  });
  test("0.1 to equal false", () => {
    expect(isNegativeNumber(0.1)).toBe(false);
  });
  test("-0.1 to equal true", () => {
    expect(isNegativeNumber(-0.1)).toBe(true);
  });
});
