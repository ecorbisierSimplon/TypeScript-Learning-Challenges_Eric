import { describe, expect, test } from "@jest/globals";
import { intersection } from "./intersection";

describe("intersection", () => {
  test("returns the intersection of two arrays", () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [2, 4, 6, 8, 10];
    expect(intersection(array1, array2)).toEqual([2, 4]);
  });
  test("does not modify the original arrays", () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [2, 4, 6, 8, 10];
    intersection(array1, array2);
    expect(array1).toEqual([1, 2, 3, 4, 5]);
    expect(array2).toEqual([2, 4, 6, 8, 10]);
  });
});
