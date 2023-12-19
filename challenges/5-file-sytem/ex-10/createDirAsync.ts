import * as fs from "fs";

export function createDirAsync(path: string): Promise<void> {
  try {
    return Promise.resolve(fs.mkdirSync(path));
  } catch (error) {
    return Promise.reject(error);
  }
}
