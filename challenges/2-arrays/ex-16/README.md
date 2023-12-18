# Uniq Function

## Objective:

Your task is to create a TypeScript function named `uniq` that receives an array with elements of any type (denoted by generic type `T`) and returns a new array containing only the unique elements of the given array. The uniqueness of the elements should be determined using TypeScript's standard equality comparison.

**Example:** If your function receives `[1, 2, 2, 3, 4, 4, 4, 5]`, it should return `[1, 2, 3, 4, 5]`.

## Function signature

```typescript
export function uniq<T>(array: T[]): T[];
```

## Instructions:

1. **Create a file:** Start by creating a file named `uniq.ts`.
2. **Define the function:** Write the function using generics to ensure it works for arrays of any type.
3. **Export the Function:** Ensure that your function is exported from the module so it can be imported and tested elsewhere.
4. **Testing your function:** Once you have implemented your function, run the following command in your terminal to test it:

```Bash
npm test -- uniq
```
