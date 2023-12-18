import { afterAll, describe, expect, test } from "@jest/globals";
import { writeFileAsync } from "./writeFileAsync";
import * as fs from "fs";

describe("writeFileAsync", () => {
  const filePath = __dirname + "/writeFileAsync.test.txt";
  afterAll(() => {
    try {
      fs.unlinkSync(filePath);
    } catch {}
  });

  test("writes a file", async () => {
    await writeFileAsync(filePath, "Hello, World!");
    expect(fs.readFileSync(filePath, "utf8")).toBe("Hello, World!");
  });

  test("throws an error for a missing file", async () => {
    await expect(
      writeFileAsync("/missing/test.txt", "Hello, World!"),
    ).rejects.toThrow(
      "ENOENT: no such file or directory, open '/missing/test.txt'",
    );
  });
});
