import { describe, expect, test } from "@jest/globals";
import { round } from "./round";

describe("round", () => {
  test("round 0 to equal 0", () => {
    expect(round(0)).toBe(0);
  });
  test("round 1 to equal 1", () => {
    expect(round(1)).toBe(1);
  });
  test("round -1 to equal -1", () => {
    expect(round(-1)).toBe(-1);
  });
  test("round 0.1 to equal 0", () => {
    expect(round(0.1)).toBe(0);
  });
  test("round -0.1 to equal -0", () => {
    expect(round(-0.1)).toBe(-0);
  });
  test("round 0.5 to equal 1", () => {
    expect(round(0.5)).toBe(1);
  });
  test("round -0.5 to equal -0", () => {
    expect(round(-0.5)).toBe(-0);
  });
  test("round 1.5 to equal 2", () => {
    expect(round(1.5)).toBe(2);
  });
  test("round -1.5 to equal -1", () => {
    expect(round(-1.5)).toBe(-1);
  });
});
