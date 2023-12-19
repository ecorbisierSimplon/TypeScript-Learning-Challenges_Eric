# rmDirAsync Function

## Objective:

Create a TypeScript function named `rmDirAsync`. This function should asynchronously remove a directory specified by the given path and return a promise.

## Function Signature:

```typescript
export function rmDirAsync(path: string): Promise<void>;
```

## Instructions:

1. **Create a File:** Start by creating a file named `rmDirAsync.ts`.

2. **Import Dependencies:** At the beginning of your file, import the necessary module from Node.js:

   ```typescript
   import * as fs from "fs";
   ```

3. **Define the Function:**

   - Your function should be an exported async function that takes a single string argument `path`, representing the path of the directory to be removed.
   - Inside the function, return a new Promise that encapsulates the asynchronous behavior. Use `fs.rmdir` to remove the directory. This function should use the callback pattern to handle success and error.
   - In the callback, resolve the promise if the operation is successful, and reject it if an error occurs.

4. **Export the Function:** Ensure that your function is properly exported from the module so it can be imported and tested elsewhere.

5. **Testing Your Function:** To verify that your function works as expected, use the provided test command. Run this in your terminal:

   ```Bash
   npm test -- rmDirAsync
   ```

6. **Handling Errors:** Pay attention to how your function handles errors and how it resolves or rejects the promise accordingly. Proper error handling is crucial in asynchronous operations.
