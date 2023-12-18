import { describe, expect, test } from "@jest/globals";
import { arrayRotate } from "./arrayRotate";

describe("arrayRotate", () => {
  test("rotates the array by the specified amount", () => {
    let array = [1, 2, 3];
    expect(arrayRotate(array, 1)).toEqual([2, 3, 1]);
    expect(arrayRotate(array, 2)).toEqual([3, 1, 2]);
  });
  test("does not modify the original array", () => {
    const array = [1, 2, 3];
    arrayRotate(array, 1);
    expect(array).toEqual([1, 2, 3]);
  });
});
