import { afterAll, describe, expect, test } from "@jest/globals";
import { deleteFileAsync } from "./deleteFileAsync";
import * as fs from "fs";

const filePath = __dirname + "/deleteFileAsync.test.txt";
describe("deleteFileAsync", () => {
  afterAll(() => {
    try {
      fs.unlinkSync(filePath);
    } catch {}
  });

  test("deletes a file", async () => {
    fs.writeFileSync(filePath, "Hello, World!");
    await deleteFileAsync(filePath);
    expect(() => {
      fs.readFileSync(filePath, "utf8");
    }).toThrow("ENOENT: no such file or directory, open '" + filePath + "'");
  });

  test("throws an error for a missing file", async () => {
    await expect(deleteFileAsync("/missing/test.txt")).rejects.toThrow(
      "ENOENT: no such file or directory, unlink '/missing/test.txt'",
    );
  });
});
