# Remove Last Item Function

## Objective:

Your task is to create a TypeScript function named `removeLastItem` that takes in an array of any type and returns a new array with the last item removed. For example, given the array `[1, 2, 3]`, your function should return `[1, 2]`.

## Function signature

```typescript
export function removeLastItem<T>(array: T[]): T[];
```

## Instructions:

1. **Create a file**: Create a file named `removeLastItem.ts`.
2. **Define the function**: Use generics to ensure that your function works with arrays of any type.
3. **Export the Function**: Make sure that your function is exported from the module so it can be imported and tested elsewhere.
4. **Testing your function**: Run the following command in your terminal to verify your function:

```Bash
npm test -- removeLastItem
```
