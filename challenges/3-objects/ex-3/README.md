# Assign Function

## Objective:

Your task is to create a TypeScript function named `assign`. This function should merge two objects, `target` and `source`, into a single object. The merged object should have properties of both the `target` and the `source`, with the `source` properties overwriting the `target` properties if there are any conflicts.

For example, if we have:

```typescript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const result = assign(obj1, obj2);
console.log(result); // Output should be: { a: 1, b: 3, c: 4 }
```

## Function signature

```typescript
export function assign<T, U>(target: T, source: U): T & U;
```

## Instructions:

1. **Create a file**: Create a file named `assign.ts`.
2. **Define the function**: Implement the `assign` function using the provided function signature.
3. **Export the Function**: Ensure that your function is exported from the module so it can be imported and tested elsewhere.
4. **Testing your function**: Run the following command in your terminal to test your function:

```Bash
npm test -- assign
```
