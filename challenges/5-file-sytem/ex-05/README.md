# Copy File Async Function

## Objective

Your task is to write a TypeScript function named `copyFileAsync`. This function should asynchronously copy a file from a source path to a target path using Promises.

## Function Signature

```typescript
export function copyFileAsync(source: string, target: string): Promise<void>;
```

## Instructions

1. **Create a File:** Create a file named `copyFileAsync.ts`.

2. **Define the Function:** Implement the `copyFileAsync` function. It should:

   - Take two parameters: `source` (the path of the file to copy) and `target` (the path where the file should be copied).
   - Return a `Promise<void>`.
   - Use the `fs.copyFile` method from Node.js's File System module to perform the file copy operation.
   - Handle any errors that occur during the file copy process by rejecting the promise with the error.
   - Resolve the promise once the file has been successfully copied.

3. **Export the Function:** Ensure that your function is exported from the module so it can be imported and tested elsewhere.

4. **Testing Your Function:** After implementing the function, you can test it to ensure it works as expected. Run the following command in your terminal:

   ```Bash
   npm test -- copyFileAsync
   ```
