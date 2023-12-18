import { describe, expect, test } from "@jest/globals";
import { hasProperty } from "./hasProperty";

describe("hasProperty", () => {
  test("should return true if the object has the property", () => {
    const obj = { key: "value" };
    expect(hasProperty(obj, "key")).toBe(true);
  });

  test("should return false if the object does not have the property", () => {
    const obj = { key: "value" };
    expect(hasProperty(obj, "otherKey")).toBe(false);
  });
});
