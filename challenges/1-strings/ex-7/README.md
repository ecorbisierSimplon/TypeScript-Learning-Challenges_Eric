# startsWith Function

## Objective:

Your task is to create a TypeScript function named `startsWith`. This function should determine whether a given string (`str`) starts with a specific substring (`searchString`) and return a boolean value based on the result.

**Example:**

For `str = "TypeScript"` and `searchString = "Type"`, the function should return `true`.

For `str = "JavaScript"` and `searchString = "JavaS"`, the function should return `true`.

For `str = "JavaScript"` and `searchString = "JavaX"`, the function should return `false`.

## Function signature

```typescript
export function startsWith(str: string, searchString: string): boolean;
```

## Instructions:

1. **Create a file:** Begin by creating a new file named `startsWith.ts`.
2. **Define the function:** Implement the `startsWith` function using the provided signature.
3. **Export the Function:** Make sure your function is properly exported so it can be tested in other parts of the application.
4. **Testing your function:** To validate that your function behaves as expected, run the following command in your terminal:

```Bash
npm test -- startsWith
```
