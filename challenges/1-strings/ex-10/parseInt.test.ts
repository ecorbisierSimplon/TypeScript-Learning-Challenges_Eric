import { describe, expect, test } from "@jest/globals";
import { parseInt } from "./parseInt";

describe("parseInt", () => {
  test("should parse a string into an integer", () => {
    expect(parseInt("123")).toBe(123);
    expect(parseInt("123.12")).toBe(123);
    expect(parseInt("123,12")).toBe(123);
  });
  test("should return NaN if the string cannot be parsed", () => {
    expect(parseInt("Hello")).toBeNaN();
  });
});
