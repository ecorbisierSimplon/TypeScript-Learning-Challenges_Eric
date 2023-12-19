const fs = require("fs");

export function readFileAsync(path: string): Promise<string> {
  try {
    return Promise.resolve(fs.readFileSync(path, { encoding: "utf8" }));
  } catch (error) {
    return Promise.reject(error);
  }
}
