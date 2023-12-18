import { describe, expect, test } from "@jest/globals";
import { difference } from "./difference";

describe("difference", () => {
  test("returns the difference between two arrays", () => {
    const array1 = [1, 2, 3];
    const array2 = [2, 3, 4];
    expect(difference(array1, array2)).toEqual([1]);
  });
  test("does not modify the original arrays", () => {
    const array1 = [1, 2, 3];
    const array2 = [2, 3, 4];
    difference(array1, array2);
    expect(array1).toEqual([1, 2, 3]);
    expect(array2).toEqual([2, 3, 4]);
  });
});
