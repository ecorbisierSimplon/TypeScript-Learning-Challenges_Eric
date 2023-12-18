import { describe, expect, test } from "@jest/globals";
import { includes } from "./includes";

describe("includes", () => {
  test("should return true if a string contains a given substring", () => {
    expect(includes("Hello World", "World")).toBe(true);
    expect(includes("Hello World", "lo World")).toBe(true);
    expect(includes("Hello World", "Hello")).toBe(true);
  });

  test("should return false if a string does not contain a given substring", () => {
    expect(includes("Hello World", "hello")).toBe(false);
    expect(includes("Hello World", "World!")).toBe(false);
  });
});
