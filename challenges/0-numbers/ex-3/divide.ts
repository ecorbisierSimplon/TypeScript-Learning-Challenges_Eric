export function divide(a: number, b: number): number {
    let result: number = 0;
    if (a === 0 && b === 0) {
        return NaN;
    }
    if (b === 0) {
        return Infinity;
    }
    return a / b;
}