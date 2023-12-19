import { beforeEach, afterEach, describe, expect, test } from "@jest/globals";
import { moveFileAsync } from "./moveFileAsync";
import * as fs from "fs";

describe("moveFileAsync", () => {
  const src = `${__dirname}/src.txt`;
  const dest = `${__dirname}/dest.txt`;
  const srcContent = "Hello World";
  beforeEach(() => {
    fs.writeFileSync(`${__dirname}/src.txt`, srcContent);
  });

  afterEach(() => {
    try {
      fs.unlinkSync(src);
    } catch { }
    try {
      fs.unlinkSync(dest);
    } catch { }
  });
  test("should move file", async () => {
    await moveFileAsync(src, dest);
    const srcExists = fs.existsSync(src);
    expect(srcExists).toBe(false);
    const destExists = fs.existsSync(dest);
    expect(destExists).toBe(true);
    const content = fs.readFileSync(dest, "utf8");
    expect(content).toBe(srcContent);
  });

  test("should throw error if src file does not exist", async () => {
    const src = `${__dirname}/does-not-exist.txt`;
    await expect(moveFileAsync(src, dest)).rejects.toThrow();
  });
});
