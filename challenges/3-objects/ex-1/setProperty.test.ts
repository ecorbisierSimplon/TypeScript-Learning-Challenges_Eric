import { describe, expect, test } from "@jest/globals";
import { setProperty } from "./setProperty";

describe("setProperty", () => {
  test("sets the property on an object", () => {
    const object = { a: 1, b: 2, c: 0 };
    const newObject = setProperty(object, "c", 3);
    expect(newObject).toEqual({ a: 1, b: 2, c: 3 });
  });
  test("sets the property on an object with no properties", () => {
    const object = {} as { a?: number };
    const newObject = setProperty(object, "a", 1);
    expect(newObject).toEqual({ a: 1 });
  });
  test("does not modify the original object", () => {
    const object = { a: 1, b: 2 } as { a: number; b: number; c?: number };
    setProperty(object, "c", 3);
    expect(object).toEqual({ a: 1, b: 2 });
  });
});
