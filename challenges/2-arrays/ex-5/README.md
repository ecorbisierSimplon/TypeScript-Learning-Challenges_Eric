# Remove First Item Function

## Objective:

Your task is to write a TypeScript function named `removeFirstItem`. This function should accept an array of any type and return a new array with the first item removed. For example, if provided with the array `[3, 2, 1]`, the function should return `[2, 1]`.

## Function signature

```typescript
export function removeFirstItem<T>(array: T[]): T[];
```

## Instructions:

1. **Create a file:** Create a file named `removeFirstItem.ts`.
2. **Define the function:** Using generics, design your function to handle arrays of any type.
3. **Export the Function:** Ensure your function is exported from the module, allowing it to be imported and tested elsewhere.
4. **Testing your function:** After implementing the function, test it to ensure it's working correctly by running the following command in your terminal:

```Bash
npm test -- removeFirstItem
```
