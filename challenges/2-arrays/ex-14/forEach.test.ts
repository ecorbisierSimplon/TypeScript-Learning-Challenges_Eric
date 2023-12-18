import { describe, expect, test, jest } from "@jest/globals";
import { forEach } from "./forEach";

describe("forEach", () => {
  test("iterates over an array", () => {
    const array = [1, 2, 3];
    const callback = jest.fn();
    forEach(array, callback);
    expect(callback.mock.calls).toEqual([
      [1, 0],
      [2, 1],
      [3, 2],
    ]);
  });
  test("does not modify the original array", () => {
    const array = [1, 2, 3];
    const callback = jest.fn();
    forEach(array, callback);
    expect(array).toEqual([1, 2, 3]);
  });
});
