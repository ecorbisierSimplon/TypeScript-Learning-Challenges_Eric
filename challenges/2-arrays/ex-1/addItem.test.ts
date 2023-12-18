import { describe, expect, test } from "@jest/globals";
import { addItem } from "./addItem";

describe("addItem", () => {
  test("adds an item to the end of an array", () => {
    expect(addItem([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
    expect(addItem([4, 5, 6], 7)).toEqual([4, 5, 6, 7]);
  });
  test("does not mutate the original array", () => {
    const originalArray = [1, 2, 3];
    addItem(originalArray, 4);
    expect(originalArray).toEqual([1, 2, 3]);
  });
});
