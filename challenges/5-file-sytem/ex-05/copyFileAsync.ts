const fs = require('fs');
export function copyFileAsync(source: string, target: string): Promise<void> {
    try {
        fs.copyFileSync(source, target);
    } catch (error) {
        return Promise.reject(error);
    }
    return Promise.resolve();

}