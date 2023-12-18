import { describe, expect, test } from "@jest/globals";
import { sumOfValues } from "./sumOfValues";

describe("sumOfValues", () => {
  test("returns the sum of all values in an array", () => {
    let array = [1, 2, 3];
    expect(sumOfValues(array)).toBe(6);
    array = [1, 2, 3, 4];
    expect(sumOfValues(array)).toBe(10);
  });
  test("does not modify the original array", () => {
    const array = [1, 2, 3];
    sumOfValues(array);
    expect(array).toEqual([1, 2, 3]);
  });
});
