import { describe, expect, test } from "@jest/globals";
import { removeLastItem } from "./removeLastItem";

describe("removeLastItem", () => {
  test("removes the last item from an array", () => {
    const array = [1, 2, 3];
    expect(removeLastItem(array)).toEqual([1, 2]);
  });
  test("does not modify the original array", () => {
    const array = [1, 2, 3];
    removeLastItem(array);
    expect(array).toEqual([1, 2, 3]);
  });
});
