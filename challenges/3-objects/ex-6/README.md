# Keys Function

## Objective:

Your task is to create a TypeScript function named `keys`. This function should accept an object as its parameter and return an array containing the keys of that object as strings.

For example, if the function is given the object `{ a: 1, b: 2 }`, it should return `['a', 'b']`.

## Function signature

```typescript
export function keys<T extends {}>(obj: T): string[];
```

## Instructions:

1. **Create a file:** Begin by creating a file named `keys.ts`.
2. **Define the function:** Use the provided function signature to define your function.
3. **Export the Function:** Ensure that your function is exported from the module so that it can be imported and tested elsewhere.
4. **Testing your function:** Once your function has been defined and exported, test it by running the following command in your terminal:

```Bash
npm test -- keys
```
