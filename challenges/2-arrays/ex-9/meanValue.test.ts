import { describe, expect, test } from "@jest/globals";
import { meanValue } from "./meanValue";

describe("meanValue", () => {
  test("returns the mean value of an array of numbers", () => {
    let array = [1, 2, 3];
    expect(meanValue(array)).toBe(2);
    array = [1, 2, 3, 4];
    expect(meanValue(array)).toBe(2.5);
  });
  test("does not modify the original array", () => {
    const array = [1, 2, 3];
    meanValue(array);
    expect(array).toEqual([1, 2, 3]);
  });
});
