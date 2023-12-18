# Substring Function

## Objective:

Your task is to write a TypeScript function named `substring`. This function should take in three parameters: a string and two numbers representing the start and end positions, respectively. It should return a substring extracted from the input string, starting at the position indicated by the first number and ending at the position indicated by the second number.

**Example:** If the function is given the arguments `('Hello, World!', 0, 5)`, it should return `'Hello'`.

## Function signature

```typescript
export function substring(str: string, start: number, end: number): string;
```

## Instructions:

1. **Create a file:** Begin by creating a file named `substring.ts`.
2. **Define the function:** Implement the function following the given signature.
3. **Export the Function:** Make sure that your function is exported from the module so it can be imported and tested elsewhere.
4. **Testing your function:** To verify the correctness of your function, run the following command in your terminal:

```Bash
npm test -- substring
```
