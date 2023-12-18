import { afterEach, beforeEach, describe, expect, test } from "@jest/globals";
import * as fs from "fs";
import { appendToFileAsync } from "./appendToFileAsync";

const filePath = __dirname + "/appendToFileAsync.test.txt";

describe("appendToFileAsync", () => {
  beforeEach(() => {
    try {
      fs.unlinkSync(filePath);
    } catch {}
  });
  afterEach(() => {
    try {
      fs.unlinkSync(filePath);
    } catch {}
  });

  test("appends to a file", async () => {
    await appendToFileAsync(filePath, "Hello, World!");
    expect(fs.readFileSync(filePath, "utf8")).toBe("Hello, World!");
    await appendToFileAsync(filePath, "Hello, World!");
    expect(fs.readFileSync(filePath, "utf8")).toBe(
      "Hello, World!Hello, World!",
    );
  });

  test("throws an error for a missing file", async () => {
    await expect(
      appendToFileAsync("/missing/test.txt", "Hello, World!"),
    ).rejects.toThrow(
      "ENOENT: no such file or directory, open '/missing/test.txt'",
    );
  });
});
