# Parse Int Function

## Objective:

Your task is to write a TypeScript function named `parseInt` that takes a string representation of an integer as a parameter and returns its numeric value. For example, given the string "123", your function should return the number 123.

## Function signature

```typescript
export function parseInt(str: string): number;
```

## Instructions:

1. **Create a file:** Start by creating a file named `parseInt.ts`.
2. **Define the function:** Implement the function following the given signature. The function should parse the input string and return its integer representation.
3. **Export the Function:** Make sure that your function is properly exported so that it can be imported and tested in other modules.
4. **Testing your function:** After writing your function, run the following command in your terminal to test its correctness:

```Bash
npm test -- parseInt
```

Note: Be mindful of potential parsing errors. Your function should be able to handle valid string representations of integers.
