import { afterAll, describe, expect, test } from "@jest/globals";
import * as fs from "fs";
import { rmDirAsync } from "./rmDirAsync";

describe("rmDirAsync", () => {
  const dir = `${__dirname}/test-dir`;
  afterAll(() => {
    try {
      fs.rmdirSync(dir);
    } catch {}
  });
  test("should remove directory", async () => {
    fs.mkdirSync(dir);
    await rmDirAsync(dir);
    const exists = fs.existsSync(dir);
    expect(exists).toBe(false);
  });

  test("should throw error if directory does not exist", async () => {
    const dir = `${__dirname}/does-not-exist`;
    await expect(rmDirAsync(dir)).rejects.toThrow();
  });
});
