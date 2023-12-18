import { describe, expect, test } from "@jest/globals";
import { pow } from "./pow";

describe("pow", () => {
  test("should return 1 when exponent === 0", () => {
    expect(pow(2, 0)).toBe(1);
  });
  test("should return the result of 2^3", () => {
    expect(pow(2, 3)).toBe(8);
  });
  test("should return the result of 15^8", () => {
    expect(pow(15, 8)).toBe(2562890625);
  });
});
