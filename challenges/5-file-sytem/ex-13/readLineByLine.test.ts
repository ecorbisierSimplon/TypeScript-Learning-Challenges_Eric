import { afterAll, describe, expect, test } from "@jest/globals";
import { readLineByLine } from "./readLineByLine";
import { checkFileExistsAsync } from "../ex-07/checkFileExistsAsync";

describe("readLineByLine", () => {
  test("should read file line by line", async () => {
    const file = `${__dirname}/test.txt`;
    const content = "Hello\nWorld";
    const lines: string[] = [];
    for await (const line of readLineByLine(file)) {
      lines.push(line);
    }
    expect(lines).toEqual(content.split("\n"));
  });

  test("should be usefull to read large csv files", async () => {
    const file = `${__dirname}/../../../data.csv`;

    const contentStream = readLineByLine(file);
    let i = 0;
    for await (const line of contentStream) {
      i++;
    }
    expect(i).toBe(6650720);
  }, 100000);

  test("should throw error if file does not exist", async () => {
    const file = `${__dirname}/does-not-exist.txt`;
    const iterator = readLineByLine(file);

    // Attempt to read the first line from the iterator
    await expect(
      (async () => {
        await iterator.next();
      })()
    ).rejects.toThrow();
  });
});
