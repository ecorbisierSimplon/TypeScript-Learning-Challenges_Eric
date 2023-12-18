import { describe, expect, test } from "@jest/globals";
import { substring } from "./substring";

describe("substring", () => {
  test("should return a substring from a given string", () => {
    expect(substring("Hello World", 0, 5)).toBe("Hello");
    expect(substring("Hello World", 1, 4)).toBe("ell");
  });
});
