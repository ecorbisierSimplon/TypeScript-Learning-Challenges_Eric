import { describe, expect, test } from "@jest/globals";
import { entries } from "./entries";

describe("entries", () => {
  test("should return an array of key-value pairs", () => {
    const obj = { key: "value", otherKey: "other value" };
    expect(entries(obj)).toEqual([
      ["key", "value"],
      ["otherKey", "other value"],
    ]);
  });
  test("should return an empty array if the object is empty", () => {
    expect(entries({})).toEqual([]);
  });
  test("should not mutate the original object", () => {
    const obj = { key: "value", otherKey: "other value" };
    entries(obj);
    expect(obj).toEqual({ key: "value", otherKey: "other value" });
  });
});
