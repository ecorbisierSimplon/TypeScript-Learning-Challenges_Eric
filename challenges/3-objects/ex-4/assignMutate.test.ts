import { describe, expect, test } from "@jest/globals";
import { assignMutate } from "./assignMutate";

describe("assignMutate", () => {
  test("should assign a value to a key in an object", () => {
    const obj = { key: "value" };
    assignMutate(obj, { newKey: "new value" });
    expect(obj).toEqual({ newKey: "new value", key: "value" });
  });
});
