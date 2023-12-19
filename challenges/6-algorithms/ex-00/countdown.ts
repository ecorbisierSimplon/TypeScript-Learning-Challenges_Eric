export function countdown(count: number): number[] {
    let result: number[] = [];
    for (let i: number = count; i > 0; i--) {
        result.push(i);
    }
    return result;
}