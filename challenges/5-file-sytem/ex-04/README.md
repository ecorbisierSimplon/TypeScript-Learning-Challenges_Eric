# List Files Asynchronously Function

## Objective:

Your task is to write a TypeScript function named `listFilesAsync`. This function should take a string representing a file path as its parameter and return a Promise that resolves to an array of filenames within the specified path.

## Function Signature

```typescript
export function listFilesAsync(path: string): Promise<string[]>;
```

## Instructions:

1. **Create a file:** Create a file named `listFilesAsync.ts`.
2. **Define the Function:**

   - Your function should use the `fs.readdir` method from Node.js's File System module to read the directory contents.
   - Handle the asynchronous nature of `fs.readdir` using Promises. The function should return a Promise that resolves with the array of filenames if successful, or rejects with an error if there's a problem accessing the directory.

3. **Export the Function:** Ensure that your function is exported from the module so it can be imported and tested elsewhere.

4. **Testing Your Function:**

   - After completing your implementation, save the file.
   - Test your function by running the following command in your terminal:

   ```Bash
   npm test -- listFilesAsync
   ```

5. **Handle Errors Gracefully:** Make sure your function correctly handles errors by rejecting the Promise with the error that `fs.readdir` might throw.

Remember, the focus of this exercise is not just on using Node.js's File System module, but also on handling asynchronous operations with Promises in TypeScript. This is a practical skill that is widely applicable in real-world TypeScript development.
