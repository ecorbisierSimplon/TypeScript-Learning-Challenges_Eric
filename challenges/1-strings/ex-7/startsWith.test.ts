import { describe, expect, test } from "@jest/globals";
import { startsWith } from "./startsWith";

describe("startsWith", () => {
  test("should return true if a string starts with a given string", () => {
    expect(startsWith("Hello", "He")).toBe(true);
  });
  test("should return false if a string does not start with a given string", () => {
    expect(startsWith("Hello", "he")).toBe(false);
  });
});
