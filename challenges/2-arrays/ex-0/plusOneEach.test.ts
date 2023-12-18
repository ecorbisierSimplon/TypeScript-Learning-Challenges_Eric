import { describe, expect, test } from "@jest/globals";
import { plusOneEach } from "./plusOneEach";

describe("plusOneEach", () => {
  test("adds one to each item in an array", () => {
    expect(plusOneEach([1, 2, 3])).toEqual([2, 3, 4]);
    expect(plusOneEach([4, 5, 6])).toEqual([5, 6, 7]);
  });
});
