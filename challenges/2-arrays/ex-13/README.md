# SortArray Function

## Objective:

Your task is to create a TypeScript function named `sortArray`. This function should be able to take an array of any type (numbers, strings, etc.) as a parameter and return a new array with the elements sorted. The function must not modify the original array but instead return a new sorted array.

For instance, if provided with an array of numbers like `[3, 1, 4, 1, 5, 9]`, the function should return `[1, 1, 3, 4, 5, 9]`.

## Function signature:

```typescript
export function sortArray<T>(array: T[]): T[];
```

## Instructions:

1. **Create a file:** Begin by creating a file named `sortArray.ts`.
2. **Generic Function:** Your function should use TypeScript generics to allow it to sort arrays of any type.
3. **Defining the Function:** Implement the function ensuring that it returns a new sorted array and does not modify the input array.
4. **Export the Function:** Ensure that your function is exported from the module, so it can be imported and tested elsewhere.
5. **Testing your function:** Once you've written the function, test it by running the following command in your terminal:

```Bash
npm test -- sortArray
```
