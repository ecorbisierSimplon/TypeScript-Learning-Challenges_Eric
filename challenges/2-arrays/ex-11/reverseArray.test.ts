import { describe, expect, test } from "@jest/globals";
import { reverseArray } from "./reverseArray";

describe("reverseArray", () => {
  test("reverses the order of an array", () => {
    let array = [1, 2, 3];
    expect(reverseArray(array)).toEqual([3, 2, 1]);
    array = [5, 6, 7];
    expect(reverseArray(array)).toEqual([7, 6, 5]);
  });
  test("does not modify the original array", () => {
    const array = [1, 2, 3];
    reverseArray(array);
    expect(array).toEqual([1, 2, 3]);
  });
});
