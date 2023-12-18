# Intersection Function

## Objective:

Your task is to write a TypeScript function named `intersection` that finds the common elements between two arrays. The function should be generic, meaning it should work for arrays of any type (e.g., numbers, strings, objects).

## Function signature

```typescript
export function intersection<T>(array1: T[], array2: T[]): T[];
```

## Example

If `array1 = [1, 2, 3, 4]` and `array2 = [3, 4, 5, 6]`, calling `intersection(array1, array2)` should return `[3, 4]`.

## Instructions:

1. **Create a file**: Create a new file and name it `intersection.ts`.
2. **Define the function**: Using the function signature provided above, define your function.
3. **Implement the Function**: Write the function implementation so that it returns an array containing the common elements between `array1` and `array2`.
4. **Export the Function**: Make sure to export your function so that it can be imported and tested in other modules.
5. **Testing your function**: Once you've implemented the function, you can test it by running the following command in your terminal:

```Bash
npm test -- intersection
```

By completing this exercise, you'll gain practical experience with TypeScript generics and array manipulations. Use the testing command to verify the correctness of your implementation.
