import * as fs from "fs";

export function moveFileAsync(source: string, target: string): Promise<void> {
  try {
    fs.renameSync(source, target);
  } catch (error) {
    return Promise.reject(error);
  }
  return Promise.resolve();
}
