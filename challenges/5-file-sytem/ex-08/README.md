# Read JSON File Function

## Objective:

Your task is to write a TypeScript function named `readJsonFileAsync`. This function should asynchronously read a JSON file and return its content as a JavaScript object. It must handle errors appropriately.

## Function signature

```typescript
export function readJsonFileAsync(filePath: string): Promise<any>;
```

## Instructions:

1. **Create a File**: Start by creating a file named `readJsonFileAsync.ts`.

2. **Define the Function**:

   - Your function should accept one parameter, `filePath`, which is a string representing the path to the JSON file.
   - Parse the file content as JSON.
   - The function should return a promise that resolves with the parsed JSON object or rejects if an error occurs.

3. **Export the Function**: Make sure your function is exported from the module. This allows it to be imported elsewhere for testing or other uses.

4. **Testing Your Function**: Test your function to ensure it reads JSON files correctly and handles errors. Run the following command in your terminal:

   ```Bash
   npm test -- readJsonFileAsync
   ```

5. **Handling Errors**: Pay attention to error handling in your implementation. The function should properly handle file read errors and JSON parsing errors.
