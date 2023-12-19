import * as fs from "fs";

export function rmDirAsync(path: string): Promise<void> {
  try {
    return Promise.resolve(fs.rmdirSync(path));
  } catch (error) {
    return Promise.reject(error);
  }
}
