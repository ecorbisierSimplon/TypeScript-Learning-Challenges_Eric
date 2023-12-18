# Remove Item At Index Function

## Objective:

Your task is to create a TypeScript function named `removeItemAtIndex`. This function should take in an array and an index as parameters, and it should return a new array with the item at the specified index removed. The function should be generic, meaning it can work with arrays of any type.

For example:
If you have an array `["apple", "banana", "cherry"]` and you call the function with index `1`, the returned array should be `["apple", "cherry"]`.

## Function signature

```typescript
export function removeItemAtIndex<T>(array: T[], index: number): T[];
```

## Instructions:

1. **Create a file:** Start by creating a file named `removeItemAtIndex.ts`.
2. **Define the function:** Implement the function using the provided signature.
3. **Export the Function:** Ensure that your function is exported from the module so it can be imported and tested elsewhere.
4. **Testing your function:** Once you've written your function, you can test its correctness by running the following command in your terminal:

```Bash
npm test -- removeItemAtIndex
```

**Hint:** Consider using the `slice` method of arrays to help with this task. Remember that the goal is not to modify the original array but to return a new array with the item removed.
