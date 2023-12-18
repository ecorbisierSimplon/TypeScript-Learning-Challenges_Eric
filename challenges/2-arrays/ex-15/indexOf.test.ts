import { describe, expect, test } from "@jest/globals";

import { indexOf } from "./indexOf";

describe("indexOf", () => {
  test("returns the index of the first matching item", () => {
    const array = [1, 2, 3];
    expect(indexOf(array, 2)).toBe(1);
  });
  test("returns -1 if no matching item is found", () => {
    const array = [1, 2, 3];
    expect(indexOf(array, 4)).toBe(-1);
  });
  test("does not modify the original array", () => {
    const array = [1, 2, 3];
    indexOf(array, 2);
    expect(array).toEqual([1, 2, 3]);
  });
});
