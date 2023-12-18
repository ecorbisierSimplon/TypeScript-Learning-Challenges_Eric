import { describe, expect, test } from "@jest/globals";
import { subtract } from "./subtract";

describe("subtract", () => {
  test("subtract 0 - 2 to equal -2", () => {
    expect(subtract(0, 2)).toBe(-2);
  });
  test("subtract 1 - 2 to equal -1", () => {
    expect(subtract(1, 2)).toBe(-1);
  });
  test("subtract 0.07 - 100 to equal -99.93", () => {
    expect(subtract(0.07, 100)).toBe(-99.93);
  });
});
