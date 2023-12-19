import * as fs from "fs";
export function deleteFileAsync(source: string): Promise<void> {
    try {
        fs.unlinkSync(source);
    } catch (error) {
        return Promise.reject(error);
    }
    return Promise.resolve();

}