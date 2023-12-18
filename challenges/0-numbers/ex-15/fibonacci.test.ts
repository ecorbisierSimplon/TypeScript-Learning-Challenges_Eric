import { describe, expect, test } from "@jest/globals";
import { fibonacci } from "./fibonacci";

describe("fibonacci", () => {
  test("should return 0 when n === 0", () => {
    expect(fibonacci(0)).toBe(0);
  });
  test("should return 1 when n === 1", () => {
    expect(fibonacci(1)).toBe(1);
  });
  test("should return 1 when n === 2", () => {
    expect(fibonacci(2)).toBe(1);
  });
  test("should return 2 when n === 3", () => {
    expect(fibonacci(3)).toBe(2);
  });
  test("should return 3 when n === 4", () => {
    expect(fibonacci(4)).toBe(3);
  });
  test("should return 5 when n === 5", () => {
    expect(fibonacci(5)).toBe(5);
  });
  test("should return 8 when n === 6", () => {
    expect(fibonacci(6)).toBe(8);
  });
  test("should return 13 when n === 7", () => {
    expect(fibonacci(7)).toBe(13);
  });
  test("should return 21 when n === 8", () => {
    expect(fibonacci(8)).toBe(21);
  });
});
