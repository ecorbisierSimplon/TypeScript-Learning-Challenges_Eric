const fs = require('fs');
export function writeFileAsync(filePath: string, data: string): Promise<void> {
    try {
        fs.writeFileSync(filePath, data, { encoding: 'utf8' });

    } catch (error) {
        return Promise.reject(error);

    }
    return Promise.resolve();
}