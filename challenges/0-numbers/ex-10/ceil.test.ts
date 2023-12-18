import { describe, expect, test } from "@jest/globals";
import { ceil } from "./ceil";

describe("ceil", () => {
  test("ceil 0 to equal 0", () => {
    expect(ceil(0)).toBe(0);
  });
  test("ceil 1 to equal 1", () => {
    expect(ceil(1)).toBe(1);
  });
  test("ceil 1.1 to equal 2", () => {
    expect(ceil(1.1)).toBe(2);
  });
  test("ceil 1.9 to equal 2", () => {
    expect(ceil(1.9)).toBe(2);
  });
  test("ceil -1 to equal -1", () => {
    expect(ceil(-1)).toBe(-1);
  });
  test("ceil -1.1 to equal -1", () => {
    expect(ceil(-1.1)).toBe(-1);
  });
  test("ceil -1.9 to equal -1", () => {
    expect(ceil(-1.9)).toBe(-1);
  });
});
