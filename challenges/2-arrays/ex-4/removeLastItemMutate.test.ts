import { describe, expect, test } from "@jest/globals";
import { removeLastItemMutate } from "./removeLastItemMutate";

describe("removeLastItemMutate", () => {
  test("removes the last item from an array", () => {
    const array = [1, 2, 3];
    removeLastItemMutate(array);
    expect(array).toEqual([1, 2]);
  });
  test("does not return a new array", () => {
    const array = [1, 2, 3];
    expect(removeLastItemMutate(array)).toBe(undefined);
  });
});
