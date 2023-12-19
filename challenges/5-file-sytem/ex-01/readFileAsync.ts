const fs = require('fs');

export function readFileAsync(path: string): Promise<string> {
    try {
        let ready: string = fs.readFileSync(path, { encoding: 'utf8' });
        if (ready) {
            return Promise.resolve(ready);
        }
    } catch (error) {
        return Promise.reject(error);

    }
    return Promise.reject("ENOENT: no such file or directory, open '" + path + "'");

}