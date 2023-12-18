# Write File Async Function

## Objective:

Your task is to write a TypeScript function named `writeFileAsync`. This function should asynchronously write data to a file specified by a path. It must use Promises to handle asynchronous file writing.

## Function signature

```typescript
export function writeFileAsync(filePath: string, data: string): Promise<void>;
```

## Instructions:

1. **Create a File**: Create a file named `writeFileAsync.ts`.

2. **Define the Function**: Define the `writeFileAsync` function. The function should return a Promise and use the `fs.writeFile` method to write data to a file. The Promise should resolve if the writing is successful and reject if there is an error.

3. **Export the Function**: Ensure that your function is exported from the module so it can be imported and tested elsewhere.

4. **Testing Your Function**: Run the following command in your terminal to test your function:
   ```Bash
   npm test -- writeFileAsync
   ```

Remember that your implementation should closely follow the function signature provided and handle the asynchronous nature of file operations in Node.js. Good luck!
