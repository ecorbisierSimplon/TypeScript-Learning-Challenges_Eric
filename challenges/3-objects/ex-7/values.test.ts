import { describe, expect, test } from "@jest/globals";
import { values } from "./values";

describe("values", () => {
  test("should return an array of values from an object", () => {
    const obj = { key: "value", otherKey: "other value", number: 1 };
    expect(values(obj)).toEqual(["value", "other value", 1]);
  });
});
