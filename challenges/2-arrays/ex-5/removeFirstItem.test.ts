import { describe, expect, test } from "@jest/globals";
import { removeFirstItem } from "./removeFirstItem";

describe("removeFirstItem", () => {
  test("removes the first item from an array", () => {
    const array = [1, 2, 3];
    expect(removeFirstItem(array)).toEqual([2, 3]);
  });
  test("does not modify the original array", () => {
    const array = [1, 2, 3];
    removeFirstItem(array);
    expect(array).toEqual([1, 2, 3]);
  });
});
