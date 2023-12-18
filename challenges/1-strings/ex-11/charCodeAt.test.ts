import { describe, expect, test } from "@jest/globals";
import { charCodeAt } from "./charCodeAt";

describe("charCodeAt", () => {
  test("should return the character code at a given index", () => {
    expect(charCodeAt("Hello", 0)).toBe(72);
    expect(charCodeAt("Hello", 1)).toBe(101);
    expect(charCodeAt("😎", 0)).toBe(55357);
    expect(charCodeAt("😎", 1)).toBe(56846);
  });
});
