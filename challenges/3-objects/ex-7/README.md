# Values Function

## Objective:

Your task is to write a TypeScript function named `values` that accepts an object with string keys and values of generic type `T`. This function should return an array containing all the values of the object.

For example, given an object `{a: "apple", b: "banana"}`, your function should return `["apple", "banana"]`.

## Function signature

```typescript
export function values<T>(obj: { [key: string]: T }): T[];
```

## Instructions:

1. **Create a file:** Create a file named `values.ts`.
2. **Define the function:** Implement the function using the provided function signature. Remember to handle the generic type `T` appropriately.
3. **Export the Function:** Ensure that your function is exported from the module so it can be imported and tested elsewhere.
4. **Testing your function:** Run the following command in your terminal to test your function:

```Bash
npm test -- values
```
