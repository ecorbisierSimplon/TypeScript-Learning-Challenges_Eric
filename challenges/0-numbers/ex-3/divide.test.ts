import { describe, expect, test } from "@jest/globals";
import { divide } from "./divide";

describe("divide", () => {
  test("divide 0 / 2 to equal 0", () => {
    expect(divide(0, 2)).toBe(0);
  });
  test("divide 1 / 2 to equal 0.5", () => {
    expect(divide(1, 2)).toBe(0.5);
  });
  test("divide 5.3 / 0.1 to equal 52.99999999999999", () => {
    expect(divide(5.3, 0.1)).toBe(52.99999999999999);
  });
  test("divide 0 / 0 to equal 0", () => {
    expect(divide(0, 0)).toBe(NaN);
  });
  test("divide 1 / 0 to equal 0", () => {
    expect(divide(1, 0)).toBe(Infinity);
  });
});
