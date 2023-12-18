# entries Function

## Objective:

Your task is to write a TypeScript function named `entries`. This function should accept an object and return its entries as an array of tuples. Each tuple will consist of a key and its corresponding value. Your function should be strongly typed and work with objects of varying structures.

For instance, if the function is given an object `{ name: 'John', age: 25 }`, it should return: `[['name', 'John'], ['age', 25]]`.

## Function signature:

```typescript
export function entries<T extends object>(obj: T): [keyof T, T[keyof T]][];
```

## Instructions:

1. **Create a file**: Start by creating a file named `entries.ts`.
2. **Define the function**: Use the provided function signature to implement your function.
3. **Export the Function**: Ensure that your function is exported from the module so it can be imported and tested elsewhere.
4. **Testing your function**: Once you've written your function, run the following command in your terminal to test it:

```Bash
npm test -- entries
```

## Example:

Given the object:

```typescript
const person = {
  name: "Alice",
  age: 30,
};
```

Your `entries` function should produce the following output:

```typescript
[
  ["name", "Alice"],
  ["age", 30],
];
```
