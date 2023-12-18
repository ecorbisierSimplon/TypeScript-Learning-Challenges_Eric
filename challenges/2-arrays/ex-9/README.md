# Mean Value Function

## Objective:

Your task is to create a TypeScript function called `meanValue`. This function should take an array of numbers as a parameter and return the average (mean) value of all the numbers in the array.

For example:
If the function is passed the array `[2, 4, 6, 8]`, it should return `5` because the sum of the numbers is `20` and there are `4` numbers in total, hence the mean is `20/4 = 5`.

## Function signature

```typescript
export function meanValue(array: number[]): number;
```

## Instructions:

1. **Create a file:** Begin by creating a file named `meanValue.ts`.
2. **Define the function:** In the file you've just created, write your function. Make sure to use the given function signature.
3. **Export the Function:** Make certain that your function is exported from the module. This ensures it can be imported and tested in different parts of the project.
4. **Testing your function:** After defining and exporting your function, you can test it using the provided test cases. Run the following command in your terminal:

```Bash
npm test -- meanValue
```

Remember to follow the example provided to ensure your function behaves as expected.
