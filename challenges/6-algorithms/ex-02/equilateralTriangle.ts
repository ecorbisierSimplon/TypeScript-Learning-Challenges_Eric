export function equilateralTriangle(count: number): string {
    let result: string = "";
    let k: number;
    for (let i: number = count; i > 0; i--) {
        k = count * 2 - i * 2 + 1;
        result += " ".repeat(i) + "*".repeat(k) + "\n";
    }
    return result;
}