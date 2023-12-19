# Append to File Function

## Objective

Create a TypeScript function named `appendToFileAsync` that appends a string to a file asynchronously. The function should handle any errors that may occur during the file operation.

## Function Signature

```typescript
export function appendToFileAsync(
  filePath: string,
  data: string,
): Promise<void>;
```

## Instructions

1. **Create a File**: Start by creating a file named `appendToFileAsync.ts`.

2. **Import Necessary Modules**: At the beginning of your file, import the `fs` module from Node.js as follows:

   ```typescript
   import * as fs from "fs";
   ```

3. **Define the Function**: Implement the `appendToFileAsync` function. It should take two parameters: `filePath` (a string representing the path to the file) and `data` (a string to be appended to the file). The function should return a `Promise<void>`.

4. **Error Handling**: Ensure that your function correctly handles any errors during the file operation. If an error occurs, the promise should be rejected with the error.

5. **Export the Function**: Make sure to export the function from your module so that it can be imported and tested in other files.

6. **Testing Your Function**: Once you have implemented the function, save the file and run the following command in your terminal to test it:

   ```Bash
   npm test -- appendToFileAsync
   ```

7. **Troubleshooting**: If the tests fail, review your code for any errors or misimplementations and try again. Pay close attention to the asynchronous nature of the file operation and proper error handling.

