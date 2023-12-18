# Remove Last Item (Mutate) Function

## Objective:

Your task is to write a TypeScript function named `removeLastItemMutate`. This function should accept an array of any data type and remove its last item. The function should mutate the original array and not return anything.

For example, if you have an array like this:

```typescript
let numbers = [1, 2, 3, 4, 5];
removeLastItemMutate(numbers);
console.log(numbers); // Output should be [1, 2, 3, 4]
```

## Function signature

```typescript
export function removeLastItemMutate<T>(array: T[]): void;
```

## Instructions:

1. **Create a file:** Begin by creating a file named `removeLastItemMutate.ts`.
2. **Define the function:** Implement the function so that it mutates the input array by removing its last item.
3. **Export the Function:** Ensure your function is exported from the module so it can be imported and tested elsewhere.
4. **Testing your function:** Once you've implemented the function, you can test it using the following command in your terminal:

```Bash
npm test -- removeLastItemMutate
```
