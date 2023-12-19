const fs = require('fs');
export function appendToFileAsync(filePath: string, data: string): Promise<string> {
    try {
        fs.appendFileSync(filePath, data, { encoding: 'utf8' });

    } catch (error) {
        return Promise.reject(error);

    }
    return Promise.resolve("");
}