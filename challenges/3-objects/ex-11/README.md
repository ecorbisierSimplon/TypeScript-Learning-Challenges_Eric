# Invert Function

## Objective:

Your task is to write a TypeScript function named `invert`. This function will take an object and return a new object where the keys and values are inverted. For this exercise, assume that the input object's values are unique and can be used as string keys in the resulting object.

For instance:

```typescript
const input = { a: "1", b: "2", c: "3" };
const output = invert(input);
console.log(output); // { '1': 'a', '2': 'b', '3': 'c' }
```

## Function signature:

```typescript
export function invert<T extends object>(obj: T): { [K in keyof T]: string };
```

## Instructions:

1. **Create a file:** Create a file named `invert.ts`.
2. **Define the function.** Ensure you follow the provided signature.
3. **Export the Function:** Ensure your function is exported from the module so it can be imported and tested elsewhere.
4. **Testing your function:** Run the following command in your terminal to test your function:

```Bash
npm test -- invert
```

**Note:** Ensure you handle the key-value inversion correctly. The function needs to be generic to handle any object with stringifiable values.
