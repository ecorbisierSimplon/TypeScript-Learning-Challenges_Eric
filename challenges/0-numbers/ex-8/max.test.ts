import { describe, expect, test } from "@jest/globals";
import { max } from "./max";

describe("max", () => {
  test("max 0, 1 to equal 1", () => {
    expect(max(0, 1)).toBe(1);
  });
  test("max 1, 0 to equal 1", () => {
    expect(max(1, 0)).toBe(1);
  });
  test("max 0, 0 to equal 0", () => {
    expect(max(0, 0)).toBe(0);
  });
  test("max 1, 1 to equal 1", () => {
    expect(max(1, 1)).toBe(1);
  });
  test("max 1, 2 to equal 2", () => {
    expect(max(1, 2)).toBe(2);
  });
  test("max 2, 1 to equal 2", () => {
    expect(max(2, 1)).toBe(2);
  });
});
