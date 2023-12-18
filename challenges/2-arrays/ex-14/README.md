# forEach Function

## Objective:

Your task is to implement a TypeScript function named `forEach`. This function will mimic the behavior of the JavaScript array `forEach` method. It should take an array and a callback function as parameters. For each item in the array, the callback function will be executed with the current item and its index as arguments.

## Function signature

```typescript
export function forEach<T>(
  array: T[],
  callback: (item: T, index: number) => void
): void;
```

## Instructions:

1. **Create a file:** Initialize a file named `forEach.ts`.
2. **Define the function:** Follow the function signature provided above.
3. **Export the Function:** Ensure that your function is exported from the module to allow its importation and testing in different locations.
4. **Testing your function:** Use the command below in your terminal to validate the functionality of your `forEach` function:

```Bash
npm test -- forEach
```

## Example:

Suppose you have an array of numbers: `const numbers = [1, 2, 3]`

If you utilize the `forEach` function like this:

```typescript
forEach(numbers, (item, index) => {
  console.log(`Item at index ${index} is ${item}`);
});
```

The output should be:

```
Item at index 0 is 1
Item at index 1 is 2
Item at index 2 is 3
```
