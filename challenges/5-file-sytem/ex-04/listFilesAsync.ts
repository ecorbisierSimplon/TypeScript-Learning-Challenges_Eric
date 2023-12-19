const fs = require("fs");
export function listFilesAsync(filePath: string): Promise<string[]> {
  try {
    return Promise.resolve(fs.readdirSync(filePath));
  } catch (error) {
    return Promise.reject(error);
  }
}
