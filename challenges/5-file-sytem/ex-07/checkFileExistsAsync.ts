import * as fs from "fs";
export function checkFileExistsAsync(filePath: string): Promise<boolean> {
  return Promise.resolve(fs.existsSync(filePath));
}
