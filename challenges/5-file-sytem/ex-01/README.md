# Read File Async Function

## Objective:

Your task is to write a TypeScript function named `readFileAsync` that takes a file path as a parameter and returns a Promise. This Promise should resolve with the file content as a string in UTF-8 format.

## Function Signature

```typescript
export function readFileAsync(path: string): Promise<string>;
```

## Instructions:

1. **Create a File:** Create a file named `readFileAsync.ts`.

2. **Define and Implement the Function:** Use the Node.js `fs` (File System) module to read a file. Your function should return a Promise that either resolves with the file content as a string or rejects with an error.

3. **Export the Function:** Ensure that your function is exported from the module so it can be imported and tested elsewhere.

4. **Testing Your Function:** To test your function, use the following command in your terminal:

   ```Bash
   npm test -- readFileAsync
   ```

   Make sure to handle both the resolve (successful file reading) and reject (error in reading the file) scenarios in your test cases.
