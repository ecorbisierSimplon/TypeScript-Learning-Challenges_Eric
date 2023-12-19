import { afterAll, describe, expect, test } from "@jest/globals";
import * as fs from "fs";
import { getFileSizeAsync } from "./getFileSizeAsync";

describe("getFileSizeAsync", () => {
  const file = `${__dirname}/test.txt`;
  afterAll(() => {
    try {
      fs.unlinkSync(file);
    } catch {}
  });
  test("should get file size", async () => {
    const content = "Hello World";
    fs.writeFileSync(file, content);
    const size = await getFileSizeAsync(file);
    expect(size).toBe(content.length);
    fs.unlinkSync(file);
  });

  test("should throw error if file does not exist", async () => {
    const file = `${__dirname}/does-not-exist.txt`;
    await expect(getFileSizeAsync(file)).rejects.toThrow();
  });
});
