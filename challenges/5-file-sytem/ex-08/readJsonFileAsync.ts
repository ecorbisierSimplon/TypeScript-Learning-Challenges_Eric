import * as fs from "fs";
export function readJsonFileAsync(filePath: string): Promise<any> {
  try {
    return Promise.resolve(
      JSON.parse(fs.readFileSync(filePath, { encoding: "utf8" }))
    );
  } catch (error) {
    return Promise.reject(error);
  }
}
