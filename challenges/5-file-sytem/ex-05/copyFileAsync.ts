const fs = require("fs");
export function copyFileAsync(source: string, target: string): Promise<void> {
  try {
    return Promise.resolve(fs.copyFileSync(source, target));
  } catch (error) {
    return Promise.reject(error);
  }
}
