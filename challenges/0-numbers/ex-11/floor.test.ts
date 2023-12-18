import { describe, expect, test } from "@jest/globals";
import { floor } from "./floor";

describe("floor", () => {
  test("floor 0 to equal 0", () => {
    expect(floor(0)).toBe(0);
  });
  test("floor 1 to equal 1", () => {
    expect(floor(1)).toBe(1);
  });
  test("floor -1 to equal -1", () => {
    expect(floor(-1)).toBe(-1);
  });
  test("floor 0.1 to equal 0", () => {
    expect(floor(0.1)).toBe(0);
  });
  test("floor -0.1 to equal -1", () => {
    expect(floor(-0.1)).toBe(-1);
  });
  test("floor -1.9 to equal -2", () => {
    expect(floor(-1.9)).toBe(-2);
  });
  test("floor 1.9 to equal 1", () => {
    expect(floor(1.9)).toBe(1);
  });
});
