import { describe, expect, test } from "@jest/globals";
import { assign } from "./assign";

describe("assign", () => {
  test("assigns the properties from one object to another", () => {
    const object = { a: 1, b: 2 };
    const otherObject = { b: 3, c: 4 };
    expect(assign(object, otherObject)).toEqual({ a: 1, b: 3, c: 4 });
  });
  test("does not modify the original object", () => {
    const object = { a: 1, b: 2 };
    const otherObject = { b: 3, c: 4 };
    assign(object, otherObject);
    expect(object).toEqual({ a: 1, b: 2 });
  });
});
