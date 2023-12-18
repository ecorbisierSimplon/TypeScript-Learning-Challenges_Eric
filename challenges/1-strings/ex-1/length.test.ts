import { describe, expect, test } from "@jest/globals";
import { length } from "./length";

describe("length", () => {
  test("should return the number of character in a given string", () => {
    expect(length("Hello")).toBe(5);
  });
});
