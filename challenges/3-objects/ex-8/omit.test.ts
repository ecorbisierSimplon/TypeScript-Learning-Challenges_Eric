import { describe, expect, test } from "@jest/globals";
import { omit } from "./omit";

describe("omit", () => {
  test("should omit the specified keys from an object", () => {
    const obj = { key: "value", otherKey: "other value" };
    expect(omit(obj, ["key"])).toEqual({ otherKey: "other value" });
  });
  test("should omit multiple keys from an object", () => {
    const obj = {
      key: "value",
      otherKey: "other value",
      thirdKey: "third value",
    };
    expect(omit(obj, ["key", "thirdKey"])).toEqual({ otherKey: "other value" });
  });
  test("should not mutate the original object", () => {
    const obj = { key: "value", otherKey: "other value" };
    omit(obj, ["key"]);
    expect(obj).toEqual({ key: "value", otherKey: "other value" });
  });
});
