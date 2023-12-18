import { describe, expect, test } from "@jest/globals";
import { isEvenNumber } from "./isEvenNumber";

describe("isEvenNumber", () => {
  test("isEvenNumber 0 to equal true", () => {
    expect(isEvenNumber(0)).toBe(true);
  });
  test("isEvenNumber 1 to equal false", () => {
    expect(isEvenNumber(1)).toBe(false);
  });
  test("isEvenNumber 2 to equal true", () => {
    expect(isEvenNumber(2)).toBe(true);
  });
  test("isEvenNumber 3 to equal false", () => {
    expect(isEvenNumber(3)).toBe(false);
  });
});
