import { describe, expect, test } from "@jest/globals";
import { readFileSync } from "./readFileSync";

describe("readFile", () => {
  test("reads a file", () => {
    expect(readFileSync(__dirname + "/readFileSync.test.ts")).toMatch(
      /readFile/,
    );
  });
});
