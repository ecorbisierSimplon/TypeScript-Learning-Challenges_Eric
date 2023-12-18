import { describe, expect, test } from "@jest/globals";
import { invert } from "./invert";

describe("invert", () => {
  test("should invert the key-value pairs of an object", () => {
    const obj = { key: "value", otherKey: "other value" };
    expect(invert(obj)).toEqual({ value: "key", "other value": "otherKey" });
  });
  test("should not mutate the original object", () => {
    const obj = { key: "value", otherKey: "other value" };
    invert(obj);
    expect(obj).toEqual({ key: "value", otherKey: "other value" });
  });
});
