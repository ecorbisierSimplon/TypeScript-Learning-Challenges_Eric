import { describe, expect, test } from "@jest/globals";
import { caesarCipher } from "./caesarCipher";

describe("caesarCipher", () => {
  test("should return a ciphered string", () => {
    expect(caesarCipher("Hello", 1)).toBe("Ifmmp");
    expect(caesarCipher("ABC", 1)).toBe("BCD");
    expect(caesarCipher("ABC", 2)).toBe("CDE");
  });
});
