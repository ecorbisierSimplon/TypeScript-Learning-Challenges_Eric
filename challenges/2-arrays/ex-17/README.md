# Flatten Function

## Objective:

Your task is to write a TypeScript function named `flatten`. This function should take a 2D array as its parameter and return a 1D array containing all the elements of the 2D array.

For example:

If the function is given:

```typescript
[
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];
```

It should return:

```typescript
[1, 2, 3, 4, 5, 6, 7, 8, 9];
```

## Function signature

```typescript
export function flatten<T>(array: T[][]): T[];
```

## Instructions:

1. **Create a file:** Start by creating a file named `flatten.ts`.
2. **Define the function:** Use the provided function signature as your guideline.
3. **Export the Function:** Make sure to export your function from the module so that it can be imported and tested elsewhere.
4. **Testing your function:** To verify that your function works correctly, run the following command in your terminal:

```Bash
npm test -- flatten
```
