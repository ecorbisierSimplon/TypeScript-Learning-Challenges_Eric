# Length Function

## Objective:

Your task is to write a TypeScript function named `length` that accepts a string as its parameter and returns the number of characters present in that string.

## Function signature

```typescript
export function length(str: string): number;
```

## Instructions:

1. **Create a file:** Initialize a new file named `length.ts`.
2. **Define the function:** Implement the `length` function to calculate and return the number of characters in the given string.
3. **Export the Function:** Make sure to export the `length` function from the module so it can be imported and tested in other parts of the project.
4. **Testing your function:** Once you have implemented the function, you can test its correctness by running the following command in your terminal:

```Bash
npm test -- length
```

**Note:** Do not use the built-in `.length` property of the string in your implementation. Aim for understanding how to iterate through a string and count its characters.
