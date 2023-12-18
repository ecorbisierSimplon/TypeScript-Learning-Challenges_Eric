import { describe, expect, test } from "@jest/globals";
import { concatStrings } from "./concatStrings";

describe("concatStrings", () => {
  test("should concat two strings", () => {
    expect(concatStrings("Hello", "World")).toBe("Hello World");
  });
});
