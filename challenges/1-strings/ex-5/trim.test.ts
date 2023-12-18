import { describe, expect, test } from "@jest/globals";
import { trim } from "./trim";

describe("trim", () => {
  test("should remove whitespace from both sides of a string", () => {
    expect(trim("  Hello  ")).toBe("Hello");
  });
  test("should not remove whitespace between word", () => {
    expect(trim("Hello   world")).toBe("Hello   world");
  });
});
