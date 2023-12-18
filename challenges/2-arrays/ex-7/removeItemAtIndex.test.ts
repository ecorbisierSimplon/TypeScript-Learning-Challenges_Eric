import { describe, expect, test } from "@jest/globals";
import { removeItemAtIndex } from "./removeItemAtIndex";

describe("removeItemAtIndex", () => {
  test("removes the item at the specified index", () => {
    const array = [1, 2, 3];
    expect(removeItemAtIndex(array, 1)).toEqual([1, 3]);
  });
  test("does not modify the original array", () => {
    const array = [1, 2, 3];
    removeItemAtIndex(array, 1);
    expect(array).toEqual([1, 2, 3]);
  });
});
