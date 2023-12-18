import { describe, expect, test } from "@jest/globals";
import { pick } from "./pick";

describe("pick", () => {
  test("should pick the specified keys from an object", () => {
    const obj = { key: "value", otherKey: "other value" };
    expect(pick(obj, ["key"])).toEqual({ key: "value" });
  });
  test("should pick multiple keys from an object", () => {
    const obj = {
      key: "value",
      otherKey: "other value",
      thirdKey: "third value",
    };
    expect(pick(obj, ["key", "thirdKey"])).toEqual({
      key: "value",
      thirdKey: "third value",
    });
  });
  test("should not mutate the original object", () => {
    const obj = { key: "value", otherKey: "other value" };
    pick(obj, ["key"]);
    expect(obj).toEqual({ key: "value", otherKey: "other value" });
  });
});
