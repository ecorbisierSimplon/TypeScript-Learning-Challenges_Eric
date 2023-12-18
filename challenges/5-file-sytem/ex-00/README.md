# ReadFileSync Function

## Objective:

Write a TypeScript function named readFileSync that takes a file path as a parameter and returns the content of the file, assuming the file is UTF-8 encoded.

## Function Signature

```typescript
export function readFileSync(filePath: string): string;
```

## Instructions:

1. **Create a File**: Create a file named `readFileSync.ts`.

2. **Define the Function**:

   - Import the `fs` module from Node.js at the beginning of your file.
   - Define the `readFileSync` function following the provided signature. This function should use the `fs.readFileSync` method to read the file content synchronously. Make sure to specify `"utf8"` as the encoding to get the file content as a string.

3. **Export the Function**: Ensure that your function is exported from the module so it can be imported and tested elsewhere.

4. **Testing Your Function**: To test your function, run the following command in your terminal:

   ```Bash
   npm test -- readFileSync
   ```
