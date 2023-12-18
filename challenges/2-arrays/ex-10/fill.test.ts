import { describe, expect, test } from "@jest/globals";
import { fill } from "./fill";

describe("fill", () => {
  test("fills the array with the specified value", () => {
    let array = [1, 2, 3];
    expect(fill(array, 0)).toEqual([0, 0, 0]);
    array = [1, 2, 3, 4];
    expect(fill(array, 0)).toEqual([0, 0, 0, 0]);
  });
  test("does not modify the original array", () => {
    const array = [1, 2, 3];
    fill(array, 0);
    expect(array).toEqual([1, 2, 3]);
  });
});
