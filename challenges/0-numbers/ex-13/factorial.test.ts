import { describe, expect, test } from "@jest/globals";
import { factorial } from "./factorial";

describe("factorial", () => {
  test("should return 1 when n === 0", () => {
    expect(factorial(0)).toBe(1);
  });
  test("should return 5! value", () => {
    expect(factorial(5)).toBe(120);
  });
});
