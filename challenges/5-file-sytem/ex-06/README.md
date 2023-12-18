# Delete File Async Function

## Objective:

Your task is to write a TypeScript function named `deleteFileAsync` that takes a file path as a parameter and deletes the file asynchronously. This function should return a promise.

## Function Signature

```typescript
export function deleteFileAsync(path: string): Promise<void>;
```

## Instructions:

1. **Create a file:** Create a file named `deleteFileAsync.ts`.

2. **Import Necessary Module:**

   - Begin by importing the `fs` module from Node.js at the top of your file:
     ```typescript
     import * as fs from "fs";
     ```

3. **Define and Implement the Function:**

   - Define the `deleteFileAsync` function according to the given signature.
   - Implement the function using the `fs.unlink` method to delete the file specified by the `path`.
   - The function should return a `Promise`. Use the `resolve` callback to handle a successful file deletion and the `reject` callback to handle errors.

4. **Export the Function:**

   - Ensure that your function is exported from the module so it can be imported and tested elsewhere.

5. **Testing Your Function:**

   - After implementing the function, save your file.
   - Test your function by running the following command in your terminal:
     ```Bash
     npm test -- deleteFileAsync
     ```

6. **Handle Feedback:**
   - If the tests pass, you have successfully completed the exercise.
   - If the tests fail, review and correct any issues in your implementation, and test again.
