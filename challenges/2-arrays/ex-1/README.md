# Add Item Function

## Objective:

Your task is to write a TypeScript function named `addItem` that takes in an array of numbers and a single number. The function should add the given number to the end of the array and return the modified array.

**Example**: If you call the function with an array `[1, 2, 3]` and a number `4`, the expected output should be `[1, 2, 3, 4]`.

## Function signature

```typescript
export function addItem(arr: number[], item: number): number[];
```

## Instructions:

1. **Create a file**: Create a new file and name it `addItem.ts`.
2. **Define the function**: Implement the function in this file, ensuring it behaves as described in the objective.
3. **Export the Function**: Make sure your function is exported, so it can be imported and tested elsewhere.
4. **Testing your function**: To ensure that your function works correctly, run the following command in your terminal:

```Bash
npm test -- addItem
```
