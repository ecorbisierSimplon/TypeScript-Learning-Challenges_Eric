// import fs from 'fs';
const fs = require('fs');

export function readFileSync(filePath: string): string {
    let ready: string = fs.readFileSync(filePath, { encoding: 'utf8' });
    return ready;

}