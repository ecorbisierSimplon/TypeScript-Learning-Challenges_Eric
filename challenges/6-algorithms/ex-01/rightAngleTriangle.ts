export function rightAngleTriangle(count: number): string {
    let result: string = "";
    for (let i: number = count; i > 0; i--) {
        result += "*".repeat(i) + "\n";
    }
    return result;
}