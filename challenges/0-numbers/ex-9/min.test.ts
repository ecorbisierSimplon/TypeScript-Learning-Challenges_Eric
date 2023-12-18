import { describe, expect, test } from "@jest/globals";
import { min } from "./min";

describe("min", () => {
  test("min 0, 1 to equal 0", () => {
    expect(min(0, 1)).toBe(0);
  });
  test("min 1, 0 to equal 0", () => {
    expect(min(1, 0)).toBe(0);
  });
  test("min 0, 0 to equal 0", () => {
    expect(min(0, 0)).toBe(0);
  });
  test("min 1, 1 to equal 1", () => {
    expect(min(1, 1)).toBe(1);
  });
  test("min 1, 2 to equal 1", () => {
    expect(min(1, 2)).toBe(1);
  });
  test("min 2, 1 to equal 1", () => {
    expect(min(2, 1)).toBe(1);
  });
});
