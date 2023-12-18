# indexOf Function

## Objective:

Your task is to implement a generic TypeScript function named `indexOf`. This function should accept an array of any type and an item of that type as its arguments. It should return the index of the first occurrence of the item in the array. If the item is not found, it should return `-1`.

**Example:**  
If you call the function with the arguments `['apple', 'banana', 'cherry']` and `'banana'`, it should return `1`.

## Function signature:

```typescript
export function indexOf<T>(array: T[], item: T): number;
```

## Instructions:

1. **Create a file**: Create a file named `indexOf.ts`.
2. **Define the function**: Implement the function to match the provided signature and fulfill the objective.
3. **Export the Function**: Make sure your function is exported from the module to allow for testing.
4. **Testing your function**: Once you've written your function, test it using the following terminal command:

```Bash
npm test -- indexOf
```

Remember to use the generic type `<T>` in your implementation, allowing the function to work with arrays of any data type.
