import { describe, expect, test } from "@jest/globals";
import { multiply } from "./multiply";

describe("exercice 1", () => {
  test("multiply 0 * 2 to equal 0", () => {
    expect(multiply(0, 2)).toBe(0);
  });
  test("multiply 1 * 2 to equal 2", () => {
    expect(multiply(1, 2)).toBe(2);
  });
  test("multiply 0.07 * 100 to equal 7.000000000000001", () => {
    expect(multiply(0.07, 100)).toBe(7.000000000000001);
  });
});
