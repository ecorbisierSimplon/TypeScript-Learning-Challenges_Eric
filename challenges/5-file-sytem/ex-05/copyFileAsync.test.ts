import {
  afterEach,
  afterAll,
  beforeAll,
  describe,
  expect,
  test,
} from "@jest/globals";
import * as fs from "fs";
import { copyFileAsync } from "./copyFileAsync";

const sourcePath = __dirname + "/copyFileAsync.test.txt";
const destinationPath = __dirname + "/copyFileAsync.test.copy.txt";
describe("copyFileAsync", () => {
  beforeAll(() => {
    fs.writeFileSync(sourcePath, "Hello, World!");
  });

  afterEach(() => {
    try {
      fs.unlinkSync(destinationPath);
    } catch {}
  });

  afterAll(() => {
    try {
      fs.unlinkSync(sourcePath);
    } catch {}
  });

  test("copies a file", async () => {
    await copyFileAsync(sourcePath, destinationPath);
    expect(fs.readFileSync(destinationPath, "utf8").toString()).toBe(
      "Hello, World!",
    );
  });

  test("throws an error for a missing source file", async () => {
    await expect(
      copyFileAsync("/missing/test.txt", "/missing/test.copy.txt"),
    ).rejects.toThrow();
  });

  test("throws an error for a missing destination directory", async () => {
    await expect(
      copyFileAsync(
        __dirname + "/copyFileAsync.test.txt",
        "/missing/test.copy.txt",
      ),
    ).rejects.toThrow();
  });
});
