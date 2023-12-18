import { describe, expect, test } from "@jest/globals";
import { numberToString } from "./numberToString";

describe("numberToString", () => {
  test("should convert a number to a string", () => {
    expect(numberToString(123)).toBe("123");
  });
});
