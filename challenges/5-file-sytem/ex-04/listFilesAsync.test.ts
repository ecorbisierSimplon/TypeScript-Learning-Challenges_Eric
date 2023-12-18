import { describe, expect, test } from "@jest/globals";
import { listFilesAsync } from "./listFilesAsync";

describe("listFilesAsync", () => {
  test("lists files in a directory", async () => {
    const files = await listFilesAsync(__dirname);
    expect(files).toContain("listFilesAsync.test.ts");
    expect(files).toContain("README.md");
    expect(files).toContain("listFilesAsync.ts");
  });

  test("throws an error for a missing directory", async () => {
    await expect(listFilesAsync("/missing")).rejects.toThrow(
      "ENOENT: no such file or directory, scandir '/missing'",
    );
  });
});
