import { describe, expect, test } from "@jest/globals";
import { getFromIndex } from "./getFromIndex";

describe("getFromIndex", () => {
  test("gets the item at the specified index", () => {
    const array = [1, 2, 3];
    expect(getFromIndex(array, 1)).toBe(2);
  });
  test("does not modify the original array", () => {
    const array = [1, 2, 3];
    getFromIndex(array, 1);
    expect(array).toEqual([1, 2, 3]);
  });
});
