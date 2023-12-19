import * as fs from "fs";

export async function* readLineByLine(
  filePath: string
): AsyncGenerator<string> {
  let lines: string[] = [];
  try {
    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

    for (const line of fileContent.split("\n")) {
      yield line;
    }
  } catch (error) {
    throw error;
  }
}
