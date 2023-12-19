const fs = require('fs');
export function listFilesAsync(filePath: string): Promise<string[]> {
    let ready: string[] = [];
    try {
        ready = fs.readdirSync(filePath);

    } catch (error) {
        return Promise.reject(error);

    }
    return Promise.resolve(ready);
}