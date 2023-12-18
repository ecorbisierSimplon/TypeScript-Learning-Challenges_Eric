# Get Property Function

## Objective:

Your task is to write a TypeScript function named `getProperty`. This function should be generic and able to retrieve the value of a property from an object, given its key. It should ensure type safety by leveraging TypeScript's generics and keyof type operator.

For example, if you have an object `{name: "Alice", age: 25}`, and you want to retrieve the value of the `name` property, your function should return `"Alice"`.

## Function signature:

```typescript
export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K];
```

## Instructions:

1. **Create a file**: Start by creating a file named `getProperty.ts`.

2. **Define the function**: Use the provided function signature as a guide to implement the function. Ensure you handle the generics and types correctly.

3. **Export the Function**: Make sure your function is exported from the module so it can be imported and tested elsewhere.

4. **Testing your function**: After writing your function, you can test it by running the following command in your terminal:

```Bash
npm test -- getProperty
```

**Tip**: To better understand how the function works, you can try calling it with various objects and property keys to observe its type-safe behavior. For example:

```typescript
const user = { name: "Alice", age: 25 };
console.log(getProperty(user, "name")); // Expected: "Alice"
console.log(getProperty(user, "age")); // Expected: 25
```
