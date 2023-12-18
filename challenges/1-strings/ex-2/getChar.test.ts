import { describe, expect, test } from "@jest/globals";
import { getChar } from "./getChar";

describe("getChar", () => {
  test("should return the first character when the index is 0", () => {
    expect(getChar("Hello", 0)).toBe("H");
  });
  test("should return the character at the given index", () => {
    expect(getChar("Hello", 1)).toBe("e");
  });
});
