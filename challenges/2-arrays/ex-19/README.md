# Difference Function

## Objective:

Your task is to write a TypeScript function named `difference`. The function should take in two arrays and return an array representing the difference. The difference is calculated by excluding all values from the first array that are present in the second array.

**Example:**

If you have two arrays, `[2, 1]` and `[2, 3]`, the difference is `[1]` because the value `1` from the first array is not present in the second array.

## Function signature

```typescript
export function difference<T>(array: T[], values: T[]): T[];
```

## Instructions:

1. **Create a file:** Start by creating a file named `difference.ts`.
2. **Define the function:** Use the provided function signature to create your function.
3. **Implement the logic:** Your function should use the `filter` method to determine the difference between the two arrays.
4. **Export the Function:** Ensure your function is exported from the module so that it can be imported and tested elsewhere.
5. **Testing your function:** After writing your function, test it by running the following command in your terminal:

```Bash
npm test -- difference
```
