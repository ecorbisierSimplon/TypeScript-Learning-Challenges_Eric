# Get Constructor Name Function

## Objective:

Your task is to write a TypeScript function named `getConstructorName`. This function should take an object of any type (except null or undefined) as its parameter and return the name of its constructor.

For example, given an input of an array `[]`, the function should return `'Array'`.

## Function signature:

```typescript
export function getConstructorName(obj: NonNullable<unknown>): string;
```

## Instructions:

1. **Create a file:** Create a file named `getConstructorName.ts`.
2. **Define the function:** Use the provided function signature as a starting point. Make sure the function returns the name of the object's constructor.
3. **Export the Function:** Ensure your function is exported from the module to facilitate testing.
4. **Testing your function:** After implementing the function, you can test its correctness. Run the following command in your terminal:

```Bash
npm test -- getConstructorName
```

**Tip:** Remember that the `constructor` property returns a reference to the constructor function that created the instance object. The `name` property on the constructor function will give you the name of the constructor.
