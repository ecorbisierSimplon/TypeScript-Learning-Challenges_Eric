import { describe, expect, test } from "@jest/globals";
import { keys } from "./keys";

describe("keys", () => {
  test("should return an array of keys from an object", () => {
    const obj = { key: "value", otherKey: "other value" };
    expect(keys(obj)).toEqual(["key", "otherKey"]);
  });
});
