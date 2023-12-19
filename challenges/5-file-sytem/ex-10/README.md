# Create Directory Asynchronously

## Objective:

Write a TypeScript function named `createDirAsync` that takes a string representing a directory path as a parameter and creates a new directory at that path asynchronously.

## Function Signature

```typescript
export function createDirAsync(path: string): Promise<void>;
```

## Instructions:

1. **Create a file**: Make a new file named `createDirAsync.ts`.

2. **Define the Function**: Implement the `createDirAsync` function. The function should return a `Promise<void>`. Use Node.js's `fs` module to create a directory asynchronously. Handle the scenario where directory creation may fail by rejecting the promise with an error, and resolve the promise when the directory is successfully created.

3. **Export the Function**: Ensure that your function is exported from the module, which allows it to be imported and tested in different parts of your application or testing environment.

4. **Testing Your Function**: To verify that your function works as expected, run this command in your terminal:

   ```Bash
   npm test -- createDirAsync
   ```

   Your function should pass the tests that check for successful directory creation, as well as proper handling of errors if directory creation fails.
