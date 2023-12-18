import { describe, expect, test } from "@jest/globals";
import { lowerCase } from "./lowerCase";

describe("lowerCase", () => {
  test("should return a string in lower case", () => {
    expect(lowerCase("Hello")).toBe("hello");
  });
});
