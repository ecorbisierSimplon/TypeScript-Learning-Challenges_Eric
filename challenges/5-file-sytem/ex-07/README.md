# Check File Exists Function

## Objective:

Your task is to create a TypeScript function named `checkFileExistsAsync`. This function should asynchronously check if a file exists at a given file path and return a boolean value (`true` if it exists, `false` otherwise).

## Function Signature

```typescript
export function checkFileExistsAsync(filePath: string): Promise<boolean>;
```

## Instructions:

1. **Create a File**: Create a file named `checkFileExistsAsync.ts`.

2. **Function Implementation**:

   - Define and implement the `checkFileExistsAsync` function.
   - The function should return a Promise that resolves to a boolean value.

3. **Export the Function**: Ensure that your function is exported from the module, so it can be imported and tested elsewhere.

4. **Testing Your Function**: After you have written and saved your function, test it by running the following command in your terminal:

   ```bash
   npm test -- checkFileExistsAsync
   ```
