# Reverse Array Function

## Objective:

Your task is to write a TypeScript function named `reverseArray`. This function should accept an array of any type and return a new array that contains the elements of the input array in reversed order. This function should be generic, meaning it should be able to handle arrays of different types (e.g., `number[]`, `string[]`, etc.)

**Example:**  
For an input array `['a', 'b', 'c']`, the function should return `['c', 'b', 'a']`.

## Function signature

```typescript
export function reverseArray<T>(array: T[]): T[];
```

## Instructions:

1. **Create a file:** Create a file named `reverseArray.ts`.
2. **Define the function:** Ensure your function uses generics to handle arrays of any type.
3. **Export the Function:** Make sure to export your function from the module, so it can be imported and tested elsewhere.
4. **Testing your function:** To verify the correctness of your function, run the following command in your terminal:

```Bash
npm test -- reverseArray
```
