import { describe, expect, test } from "@jest/globals";

import { checkFileExistsAsync } from "./checkFileExistsAsync";

describe("checkFileExistsAsync", () => {
  test("should return true if the file exists", async () => {
    const result = await checkFileExistsAsync(__filename);
    expect(result).toBe(true);
  });

  test("should return false if the file does not exist", async () => {
    const result = await checkFileExistsAsync("does-not-exist.txt");
    expect(result).toBe(false);
  });
});
