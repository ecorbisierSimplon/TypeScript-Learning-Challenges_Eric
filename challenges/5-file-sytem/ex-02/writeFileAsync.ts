const fs = require("fs");
export function writeFileAsync(filePath: string, data: string): Promise<void> {
  try {
    return Promise.resolve(
      fs.writeFileSync(filePath, data, { encoding: "utf8" })
    );
  } catch (error) {
    return Promise.reject(error);
  }
}
