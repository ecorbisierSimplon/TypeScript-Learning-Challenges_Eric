import { describe, expect, test } from "@jest/globals";
import { uniq } from "./uniq";

describe("uniq", () => {
  test("removes duplicates from an array", () => {
    const array = [1, 2, 2, 3];
    expect(uniq(array)).toEqual([1, 2, 3]);
  });
  test("removes duplicates from an array of strings", () => {
    const array = ["a", "b", "b", "c"];
    expect(uniq(array)).toEqual(["a", "b", "c"]);
  });
  test("does not modify the original array", () => {
    const array = [1, 2, 2, 3];
    uniq(array);
    expect(array).toEqual([1, 2, 2, 3]);
  });
});
