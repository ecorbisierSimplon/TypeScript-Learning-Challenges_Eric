import { describe, expect, test } from "@jest/globals";
import { flatten } from "./flatten";

describe("flatten", () => {
  test("flattens an array of arrays", () => {
    const array = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    expect(flatten(array)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("does not modify the original array", () => {
    const array = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    flatten(array);
    expect(array).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });
});
