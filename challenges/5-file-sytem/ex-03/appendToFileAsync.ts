const fs = require("fs");
export function appendToFileAsync(
  filePath: string,
  data: string
): Promise<void> {
  try {
    return Promise.resolve(
      fs.appendFileSync(filePath, data, { encoding: "utf8" })
    );
  } catch (error) {
    return Promise.reject(error);
  }
}
