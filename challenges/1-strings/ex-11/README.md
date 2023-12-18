# CharCodeAt Function

## Objective:

Your task is to create a TypeScript function named `charCodeAt`. This function should take a string and an index as parameters and return the Unicode value (or code point) of the character at that position within the string. For example, given the string "hello" and index 1, the function should return `101`, which is the Unicode value of "e".

## Function signature:

```typescript
export function charCodeAt(str: string, index: number): number;
```

## Instructions:

1. **Create a file**: Begin by creating a file named `charCodeAt.ts`.
2. **Define the function**: Implement the function so that it returns the Unicode value of the character at the specified index of the provided string.
3. **Export the Function**: Ensure your function is exported from the module, allowing it to be imported and tested elsewhere.
4. **Testing your function**: To verify that your function is working correctly, run the following command in your terminal:

```Bash
npm test -- charCodeAt
```
