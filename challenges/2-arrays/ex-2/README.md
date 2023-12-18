# Add Item Mutate Function

## Objective:

Your task is to write a TypeScript function named `addItemMutate`. This function should mutate the original array by adding a new item to it. Given an array of numbers and an additional number, add this number to the end of the array without returning a new array.

**Example:**
If you have an array `[1, 2, 3]` and a number `4`, after using the `addItemMutate` function, the original array should be mutated to `[1, 2, 3, 4]`.

## Function signature

```typescript
export function addItemMutate(arr: number[], item: number): void;
```

## Instructions:

1. **Create a file:** Begin by creating a file named `addItemMutate.ts`.
2. **Define the function:** Implement the function so that it mutates the passed array by adding the given item to its end.
3. **Export the Function:** Ensure that your function is exported from the module, making it accessible for imports and testing elsewhere.
4. **Testing your function:** Once you've implemented your function, run the following command in your terminal to test its correctness:

```Bash
npm test -- addItemMutate
```

Ensure that your function modifies the original array and does not create or return a new one.
