# Fill Function

## Objective:

Your task is to write a TypeScript function named `fill`. This function should take in two parameters: an array and a value. The function should return a new array where each element is replaced by the provided value. The length of the returned array should remain the same as the input array.

**Example:**
If you provide an array `[1, 2, 3]` and a value `4`, the function should return `[4, 4, 4]`.

## Function signature

```typescript
export function fill<T>(array: T[], value: T): T[];
```

## Instructions:

1. **Create a file:** Begin by creating a file named `fill.ts`.
2. **Define the function:** Implement the function to replace each element of the array with the provided value. Remember to keep the length of the output array the same as the input.
3. **Export the Function:** Ensure that your function is exported from the module so it can be imported and tested elsewhere.
4. **Testing your function:** After writing the function, test it to ensure it behaves as expected. Run the following command in your terminal:

```Bash
npm test -- fill
```
