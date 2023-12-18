# Get From Index Function

## Objective:

Your task is to write a TypeScript function named `getFromIndex`. This function should be generic and accept an array and an index. It should return the element from the array at the specified index. For example, if you call the function with the arguments `['a', 'b', 'c']` and `1`, it should return `'b'`.

## Function signature:

```typescript
export function getFromIndex<T>(array: T[], index: number): T;
```

## Instructions:

1. **Create a file:** Create a file named `getFromIndex.ts`.

2. **Define the function:** Utilize TypeScript's generic feature to ensure that this function can work with arrays of any type.

3. **Export the Function:** Ensure that your function is exported from the module, so it can be imported and tested elsewhere.

4. **Testing your function:** To verify that your function works correctly, run the following command in your terminal:

```Bash
npm test -- getFromIndex
```
