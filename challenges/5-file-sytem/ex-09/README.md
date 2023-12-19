# Move File Function

## Objective:

Create a TypeScript function named `moveFileAsync` that moves a file from a source path to a target path using Node.js's File System (fs) module. This function should return a Promise that resolves when the file move is successful and rejects if an error occurs.

## Function Signature

```typescript
export function moveFileAsync(source: string, target: string): Promise<void>;
```

## Instructions:

1. **Create a File**: Create a new TypeScript file named `moveFileAsync.ts`.

2. **Import fs Module**: At the beginning of your file, import the `fs` module from Node.js:

   ```typescript
   import * as fs from "fs";
   ```

3. **Define the Function**: Implement the `moveFileAsync` function. It should take two parameters, `source` and `target`, both of type `string`. The function should return a `Promise<void>`, encapsulating the asynchronous operation of moving a file.

4. **Export the Function**: Ensure that your function is exported from the module so it can be imported and tested elsewhere.

5. **Implement Error Handling**: Your function should handle errors appropriately. If the file move operation fails, the promise should be rejected with the error.

6. **Testing Your Function**: After implementing the function, test it to ensure it works as expected. Run the following command in your terminal:

   ```Bash
   npm test -- moveFileAsync
   ```

7. **Error Handling in Tests**: Remember that your unit tests should also cover scenarios where the file move might fail, to ensure your error handling logic is correct.

8. **Complete the Task**: If your function passes all the tests, you have successfully completed the task. If any tests fail, review and adjust your code before testing again.
