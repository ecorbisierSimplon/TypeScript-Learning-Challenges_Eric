# Factorial Function

## Objective:

Your task is to write a TypeScript function named `factorial` that computes the factorial of a given number. The factorial of a number is the product of all positive integers less than or equal to that number. For instance, the factorial of 5 (denoted as 5!) is `5 x 4 x 3 x 2 x 1 = 120`. Additionally, the factorial of 0 is defined to be 1.

## Function signature

```typescript
export function factorial(n: number): number;
```

## Instructions:

1. **Create a file:** Create a file named `factorial.ts`.
2. **Define the function:** Implement the `factorial` function. Remember to handle the special case where `n` is 0.
3. **Export the Function:** Ensure that your function is exported from the module so it can be imported and tested elsewhere.
4. **Testing your function:** Once you've implemented the function, run the following command in your terminal to test its correctness:

```Bash
npm test -- factorial
```
