// import fs from 'fs';
const fs = require("fs");

export function readFileSync(filePath: string): string {
  return fs.readFileSync(filePath, { encoding: "utf8" });
}
