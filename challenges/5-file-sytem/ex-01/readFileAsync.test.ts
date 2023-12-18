import { describe, expect, test } from "@jest/globals";
import { readFileAsync } from "./readFileAsync";

describe("readFileAsync", () => {
  test("reads a file", async () => {
    expect(await readFileAsync(__dirname + "/readFileAsync.test.ts")).toMatch(
      /readFileAsync/,
    );
  });

  test("throws an error for a missing file", async () => {
    await expect(readFileAsync("missing.txt")).rejects.toThrow(
      "ENOENT: no such file or directory, open 'missing.txt'",
    );
  });
});
