import { describe, expect, test } from "@jest/globals";
import { sortArray } from "./sortArray";

describe("sortArray", () => {
  test("sorts the array", () => {
    const array = [3, 2, 1, 4, 5];
    expect(sortArray(array)).toEqual([1, 2, 3, 4, 5]);
  });
  test("does not modify the original array", () => {
    const array = [3, 2, 1];
    sortArray(array);
    expect(array).toEqual([3, 2, 1]);
  });
});
