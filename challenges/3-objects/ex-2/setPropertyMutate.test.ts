import { describe, expect, test } from "@jest/globals";
import { setPropertyMutate } from "./setPropertyMutate";

describe("setPropertyMutate", () => {
  test("sets the property on an object", () => {
    const object = { a: 1, b: 2 };
    setPropertyMutate(object, "a", 3);
    expect(object).toEqual({ a: 3, b: 2 });
  });
  test("returns undefined", () => {
    const object = { a: 1, b: 2 };
    expect(setPropertyMutate(object, "a", 3)).toBe(undefined);
  });
});
