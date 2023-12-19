import { describe, expect, test } from "@jest/globals";
import { readJsonFileAsync } from "./readJsonFileAsync";

describe("readJsonFileAsync", () => {
  test("should return the parsed JSON object", async () => {
    const result = await readJsonFileAsync(
      __dirname + "/../../../package.json",
    );
    expect(result).toEqual(
      expect.objectContaining({
        name: "typescript-challenges",
      }),
    );
  });

  test("should throw an error if the file does not exist", async () => {
    await expect(readJsonFileAsync("does-not-exist.txt")).rejects.toThrow();
  });
});
