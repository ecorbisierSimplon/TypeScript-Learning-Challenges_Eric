import { describe, expect, test } from "@jest/globals";
import { getProperty } from "./getProperty";

describe("getProperty", () => {
  test("gets the property from an object", () => {
    const object = { a: 1, b: 2 };
    expect(getProperty(object, "a")).toBe(1);
  });
});
