import * as fs from "fs";
export function deleteFileAsync(source: string): Promise<void> {
  try {
    return Promise.resolve(fs.unlinkSync(source));
  } catch (error) {
    return Promise.reject(error);
  }
}
