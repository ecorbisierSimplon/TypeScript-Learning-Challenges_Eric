import { describe, expect, test } from "@jest/globals";
import { upperCase } from "./upperCase";

describe("upperCase", () => {
  test("should return a string in upper case", () => {
    expect(upperCase("Hello")).toBe("HELLO");
  });
});
