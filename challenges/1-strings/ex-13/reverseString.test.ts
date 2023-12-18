import { describe, expect, test } from "@jest/globals";
import { reverseString } from "./reverseString";

describe("reverse", () => {
  test("should reverse a string", () => {
    expect(reverseString("Hello")).toBe("olleH");
  });
});
