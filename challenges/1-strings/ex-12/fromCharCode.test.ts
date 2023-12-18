import { describe, expect, test } from "@jest/globals";
import { fromCharCode } from "./fromCharCode";

describe("fromCharCode", () => {
  test("should return a string from a Unicode value", () => {
    expect(fromCharCode(72)).toBe("H");
    expect(fromCharCode(73)).toBe("I");
    expect(fromCharCode(74)).toBe("J");
  });
});
